import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the fields
    if (name && email) {
      const templateParams = {
        name: name,
        email: email,
        message: message,
      };

      // Send the email using EmailJS
      emailjs.send('service_qxv7ns8', 'template_x2ltkte', templateParams, 'IDsUf6oSbAyhN7Y9Z')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert(`Thank you for registering, ${name}!`);
          setFormSubmitted(true);
          setName('');
          setEmail('');
          setMessage('');
        })
        .catch((error) => {
          console.error('FAILED...', error);
          alert('There was an error sending your message. Please try again later.');
        });
    } else {
      alert('Please fill in the required fields.');
    }
  };

  return (
    <section id="register">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className={formSubmitted ? 'form-submitted' : ''}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Message (optional)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Form;
