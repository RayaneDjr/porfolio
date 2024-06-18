import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault(); //the email won't send without it

    emailjs
      .sendForm(
        "service_t1hb2ch",
        "template_hmb69gg",
        e.target,
        "les8Ii56S8RsNOhoa"
      )
      .then(
        (result) => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
          window.scrollTo(0, 0);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div
      name='contact'
      className='w-full min-h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form
        method='POST'
        action='https://formsubmit.co/your@email.com'
        className='flex flex-col max-w-[600px] w-full mt-24'
        onSubmit={sendEmail}>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
            Contact
          </p>
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <p className='text-gray-300 py-4'>
            // Remplissez le formulaire suivant ou envoyez moi un email -
            rayane.djaffar@outlook.fr
          </p>
        </div>
        <input
          className='bg-[#ccd6f6] p-2'
          type='text'
          placeholder='Name'
          name='user_name'
          required
        />
        <input
          className='my-4 p-2 bg-[#ccd6f6]'
          type='email'
          placeholder='Email'
          name='user_email'
          required
        />
        <textarea
          className='bg-[#ccd6f6] p-2'
          name='message'
          rows='10'
          placeholder='Message'
          required
        />
        <button
          type='submit'
          className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>
          Travaillons ensemble
        </button>
      </form>
    </div>
  );
};

export default Contact;
