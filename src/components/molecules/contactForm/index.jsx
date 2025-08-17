import Input from "../../atoms/input";
import Button from "../../atoms/button";

function ContactForm() {
  return (
    <form
      action="https://formsubmit.co/luizazevedo.dev@gmail.com"
      method="POST"
      className="flex flex-col gap-2 w-sm"
    >
      <Input type="text" placeholder="Digite seu nome ..." />
      <Input type="email" placeholder="Digite seu e-mail ..." />
      <textarea
        placeholder="Digite sua mensagem ..."
        className="border p-2 rounded-md resize-none"
      />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_subject" value="Novo envio portfolio!" />
      <Button type="submit">Enviar</Button>
    </form>
  );
}

export default ContactForm;
