import { useState } from "react";
import faqBackgroundImage from "../../../assets/faq/background_1.png";
import "../../../css/FAQSection.css";

export const faqItems = [
  {
    question: "What should I wear?",
    answer:
      "Indian formal or festive attire is warmly encouraged for all three events. Think rich colours and comfortable footwear for dancing at the Sangeet. Black is best avoided for the wedding ceremony.",
  },
  {
    question: "Are children welcome?",
    answer:
      "We love your little ones, but to help us plan an evening for the adults, we have kept our celebrations for guests aged 16 and above, except for immediate family.",
  },
  {
    question: "Is there a wedding hashtag?",
    answer:
      "Yes — tag your photos with #AnkitaMeetsSiddharth so we can find and enjoy them all after the weekend.",
  },
  {
    question: "Do you have a gift registry?",
    answer:
      "Your presence is truly the only present we need. For those who insist, additional details will be shared closer to the wedding.",
  },
  {
    question: "Who do I contact with questions?",
    answer:
      "Reach out any time at ankita.siddharth.wedding@example.com. We are happy to help with travel, accommodation, or anything in between.",
    email: "ankita.siddharth.wedding@example.com",
  },
];

function FAQItem({ item, isOpen, onToggle, index }) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <article className={`faq-item ${isOpen ? "faq-item--open" : ""}`}>
      <h3 className="faq-item__heading">
        <button
          id={buttonId}
          className="faq-item__button"
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span>{item.question}</span>

          <span className="faq-item__icon" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        className="faq-item__answer-wrapper"
        role="region"
        aria-labelledby={buttonId}
      >
        <div className="faq-item__answer">
          {item.email ? (
            <p>
              Reach out any time at{" "}
              <a href={`mailto:${item.email}`}>{item.email}</a>. We are happy
              to help with travel, accommodation, or anything in between.
            </p>
          ) : (
            <p>{item.answer}</p>
          )}
        </div>
      </div>
    </article>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section
      className="faq-section"
      id="faq"
      style={{ "--faq-bg-image": `url(${faqBackgroundImage})` }}
    >
      <div className="faq-section__inner">
        <header className="faq-section__intro">
          <p className="faq-section__eyebrow">Before the Celebrations</p>

          <h2>
            Frequently Asked
            <span>Questions</span>
          </h2>

          <div className="faq-section__ornament" aria-hidden="true">
            <span />
            <i>✦</i>
            <span />
          </div>

          <p className="faq-section__description">
            A few helpful details to make your journey and celebration with us
            as effortless as possible.
          </p>

          <div className="faq-section__contact">
            <p>Still have a question?</p>

            <a href="mailto:ankita.siddharth.wedding@example.com">
              Send us a note
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </header>

        <div className="faq-section__accordion">
          {faqItems.map((item, index) => (
            <FAQItem
              key={item.question}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}