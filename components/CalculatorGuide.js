import Link from "next/link";

export default function CalculatorGuide({
  title,
  intro,
  steps,
  howItWorks,
  example,
  tips,
  faqs,
  related,
}) {
  return (
    <section className="calculator-guide" aria-label={`${title} guide`}>
      <div className="guide-intro">
        <div className="eyebrow">CALCULATOR GUIDE</div>
        <h2>About the {title}</h2>
        <p>{intro}</p>
      </div>

      <div className="guide-block">
        <h3>How to use this calculator</h3>
        <ol className="guide-steps">
          {steps.map((step) => <li key={step}>{step}</li>)}
        </ol>
      </div>

      <div className="guide-grid">
        <div className="guide-card">
          <h3>How the calculation works</h3>
          <p>{howItWorks}</p>
        </div>
        <div className="guide-card">
          <h3>Example</h3>
          <p>{example}</p>
        </div>
      </div>

      <div className="guide-block">
        <h3>Things to keep in mind</h3>
        <ul className="guide-list">
          {tips.map((tip) => <li key={tip}>{tip}</li>)}
        </ul>
      </div>

      <div className="guide-block">
        <h3>Frequently asked questions</h3>
        <div className="guide-faq">
          {faqs.map(({ question, answer }) => (
            <div className="guide-faq-item" key={question}>
              <h4>{question}</h4>
              <p>{answer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="guide-related">
        <div>
          <div className="eyebrow">KEEP CALCULATING</div>
          <h3>Related calculators</h3>
        </div>
        <div className="related-links">
          {related.map(({ title: relatedTitle, href, description }) => (
            <Link href={href} className="related-link" key={href}>
              <span>
                <strong>{relatedTitle}</strong>
                <small>{description}</small>
              </span>
              <b>↗</b>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
