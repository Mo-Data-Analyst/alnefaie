import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { chatbotQuestions, chatbotText } from '../data/chatbotFaq.js';
import Icon from './Icon.jsx';
import logo from '../assets/images/logo-al-nefaie.webp';
import '../styles/chatbot.css';


function normalize(text) {
  return String(text)
    .toLowerCase()
    .replace(/[ً-ْـ]/g, '')
    .replace(/[أإآ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
    .replace(/[؟?!.,،:;«»"'‘’“”]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function findMatchingQuestion(typedText) {
  const typed = normalize(typedText);
  return chatbotQuestions.find(
    (item) => normalize(item.question.ar) === typed || normalize(item.question.en) === typed
  );
}

const startingConversation = [{ type: 'welcome' }, { type: 'questions' }];

export default function Chatbot() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenOpened, setHasBeenOpened] = useState(false);
  const [conversation, setConversation] = useState(startingConversation);
  const [typedText, setTypedText] = useState('');
  const logRef = useRef(null);
  const inputRef = useRef(null);
  const toggleRef = useRef(null);

  const addEntries = (...entries) => setConversation((current) => [...current, ...entries]);

  const openChat = () => {
    setIsOpen(true);
    setHasBeenOpened(true);
  };
  const closeChat = () => {
    setIsOpen(false);
    toggleRef.current?.focus({ preventScroll: true });
  };

  const askQuestion = (item) => addEntries({ type: 'user', item }, { type: 'answer', item }, { type: 'actions' });
  const showQuestions = () => addEntries({ type: 'questions' });
  const goToContact = () => {
    closeChat();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = typedText.trim();
    if (!text) return;
    setTypedText('');
    const match = findMatchingQuestion(text);
    addEntries({ type: 'user', text }, match ? { type: 'answer', item: match } : { type: 'fallback' }, { type: 'actions' });
  };

  // Keep the newest message in view
  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [conversation, isOpen]);

  // Focus the input when opening; close with Escape
  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => inputRef.current?.focus({ preventScroll: true }), 200);
    const onKeyDown = (event) => event.key === 'Escape' && closeChat();
    document.addEventListener('keydown', onKeyDown);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  const lastIndex = conversation.length - 1;

  const renderEntry = (entry, index) => {
    switch (entry.type) {
      case 'welcome':
        return <div key={index} className="chat-message chat-message--bot">{t(chatbotText.welcome)}</div>;
      case 'user':
        return (
          <div key={index} className="chat-message chat-message--user">
            {entry.item ? t(entry.item.question) : entry.text}
          </div>
        );
      case 'answer':
        return <div key={index} className="chat-message chat-message--bot">{t(entry.item.answer)}</div>;
      case 'fallback':
        return <div key={index} className="chat-message chat-message--bot chat-message--notice">{t(chatbotText.fallback)}</div>;
      case 'questions':
        // Only the latest set of buttons is shown, so old choices don't pile up
        if (index !== lastIndex) return null;
        return (
          <div key={index} className="chat-questions">
            {chatbotQuestions.map((item) => (
              <button key={item.id} type="button" className="chat-questions__button" onClick={() => askQuestion(item)}>
                {t(item.question)}
              </button>
            ))}
          </div>
        );
      case 'actions':
        if (index !== lastIndex) return null;
        return (
          <div key={index} className="chat-actions">
            <button type="button" className="chat-actions__button" onClick={showQuestions}>
              {t(chatbotText.backToQuestions)}
            </button>
            <button type="button" className="chat-actions__button chat-actions__button--gold" onClick={goToContact}>
              {t(chatbotText.contactUs)}
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        className={`chat-toggle ${hasBeenOpened ? 'has-been-opened' : ''}`}
        aria-expanded={isOpen}
        aria-controls="chat-window"
        aria-label={t(isOpen ? chatbotText.close : chatbotText.open)}
        onClick={() => (isOpen ? closeChat() : openChat())}
      >
        <span className="chat-toggle__dot" aria-hidden="true" />
        <Icon name={isOpen ? 'close' : 'chat'} size={isOpen ? 22 : 26} />
      </button>

      <div
        id="chat-window"
        className={`chat-window ${isOpen ? 'is-open' : ''}`}
        role="dialog"
        aria-labelledby="chat-title"
        aria-hidden={!isOpen}
        inert={!isOpen ? true : undefined}
      >
        <div className="chat-window__header">
          <img src={logo} alt="" width="38" height="36" />
          <div>
            <strong id="chat-title">{t(chatbotText.title)}</strong>
            <small>{t(chatbotText.subtitle)}</small>
          </div>
          <button type="button" className="chat-window__close" aria-label={t(chatbotText.close)} onClick={closeChat}>
            <Icon name="close" size={16} strokeWidth={2} />
          </button>
        </div>

        <div className="chat-window__log" ref={logRef} aria-live="polite">
          {conversation.map(renderEntry)}
        </div>

        <form className="chat-window__form" onSubmit={handleSubmit} autoComplete="off">
          <input
            ref={inputRef}
            type="text"
            maxLength={200}
            value={typedText}
            onChange={(event) => setTypedText(event.target.value)}
            placeholder={t(chatbotText.inputPlaceholder)}
            aria-label={t(chatbotText.inputPlaceholder)}
          />
          <button type="submit" className="chat-window__send" aria-label={t(chatbotText.send)}>
            <Icon name="send" size={18} strokeWidth={1.8} />
          </button>
        </form>
        <p className="chat-window__footer">{t(chatbotText.footer)}</p>
      </div>
    </>
  );
}
