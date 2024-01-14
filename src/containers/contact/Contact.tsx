import { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_uo5cbzt', 'template_xlh8v8i', form.current, 'J3ltYyPwo06RtMz9H')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });

      // You can reset the form after sending the email if needed
      form.current.reset();
    }
  };

  return (
    <>
      <section className="contact" id="contact">
        <h2 className="heading">Contact <span>Me</span></h2>

        <form ref={form} onSubmit={sendEmail}>
          <div className="input-box">
            <input type="text" placeholder="Your Name" name="user_name" required />
            <input type="email" placeholder="Your Email" name="user_email" required />
          </div>
          <div className="input-box">
            <input type="number" placeholder="Whatsapp Number" name="user_number" />
            <input type="text" placeholder="Your Subject" name="subject" required />
          </div>
          <textarea id="" cols={30} rows={10} placeholder="Your Message" name="message" required></textarea>
          <input type="submit" value="Send Message" className="btn" id="submit" />
        </form>
      </section>
    </>
  );
}

export default Contact;
