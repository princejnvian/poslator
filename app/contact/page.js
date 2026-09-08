export const metadata = {
  title: "Contact POSLATOR – Get in Touch",
  description:
    "Contact POSLATOR for questions, feedback, suggestions, or issues with our free online calculators and tools.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <section className="section">
      <div className="container prose">
        <div className="eyebrow">CONTACT</div>

        <h1>Contact us</h1>

        <p>
          Have a question, feedback, or found an issue with one of our
          calculators? We'd love to hear from you.
        </p>

        <div className="contact-box">
          <b>Email</b>
          <p>
            <a href="mailto:princejnvian@gmail.com">
              princejnvian@gmail.com
            </a>
          </p>
          <small>
            We welcome questions, feedback, suggestions, and reports about
            calculator issues.
          </small>
        </div>
      </div>
    </section>
  );
}