import { useLanguage } from '../i18n/LanguageContext.jsx';
import { processSteps } from '../data/processSteps.js';
import { processText } from '../data/pageText.js';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import '../styles/sections/process.css';

export default function Process() {
  const { t } = useLanguage();

  return (
    <section className="process" aria-labelledby="process-title">
      <div className="container">
        <SectionHeading id="process-title" kicker={processText.kicker} title={processText.title} centered />

        <ol className="process__steps">
          {processSteps.map((step, index) => (
            <Reveal as="li" className="process-step" key={step.title.en} delay={index * 70}>
              <div className="process-step__number">{index + 1}</div>
              <div>
                <h3>{t(step.title)}</h3>
                <p>{t(step.text)}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <p className="process__disclaimer">{t(processText.disclaimer)}</p>
      </div>
    </section>
  );
}
