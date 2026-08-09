import { faqItems } from '../../content/siteContent';

function FAQSection() {
  return (
    <section className="section-shell" id="faq">
      <div className="container">
        <p className="section-eyebrow">Good to know</p>
        <h2 className="section-title">Frequently Asked</h2>
        <div className="faq-list">
          {faqItems.map((item) => (
            <article className="faq-item" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
