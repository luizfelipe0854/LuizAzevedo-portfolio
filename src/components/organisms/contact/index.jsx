import Title from "../../atoms/title";

import ContactForm from "../../molecules/contactForm";

function ContactSection() {
  return (
    <section className="mt-12 mb-8" id="contato">
      <Title>Contato</Title>
      <ContactForm />
    </section>
  );
}

export default ContactSection;
