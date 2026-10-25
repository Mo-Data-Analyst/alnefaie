import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { faqItems } from '../data/faq.js';
import { faqText } from '../data/pageText.js';
import SectionHeading from '../components/SectionHeading.jsx';
import Button from '../components/Button.jsx';
import '../styles/sections/faq.css';

/* Accordion: one answer open at a time (the first one starts open). */
export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq" aria-labelledby="faq-title">
      <div className="container faq__layout">
        <SectionHeading id="faq-title" kicker={faqText.kicker} title={faqText.title} intro={faqText.intro}>
          <Button href="#contact" variant="dark" className="faq__button">
            {t(faqText.button)}
          </Button>
        </SectionHeading>

        <div>
          <div className="faq__list">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              const answerId = `faq-answer-${index}`;
              return (
                <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={item.question.en}>
                  <h3 className="faq-item__heading">
                    <button
                      type="button"
                      className="faq-item__question"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    >
                      <span>{t(item.question)}</span>
                      <span className="faq-item__icon" aria-hidden="true" />
                    </button>
                  </h3>
                  <div id={answerId} className="faq-item__answer" hidden={!isOpen}>
                    {t(item.answer)}
                  </div>
                </div>
              );
            })}
          </div>
          <p className="faq__note">{t(faqText.note)}</p>
        </div>
      </div>
    </section>
  );
}
