import React from "react";
import styles from "../style";
function Contact() {
  return (
    <div
      id="contact"
      className="w-full h-screen flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/6fcab773-e06a-4aa7-9662-eb65d8c10aa9"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <h1
            className={`flex-2 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] ${styles.flexCenter}`}
          >
            Contact
          </h1>
        </div>

        <input className="p-2" type="text" placeholder="Name" name="name" />
        <input
          className="my-4 p-2"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button
          className={`${styles.paragraph} text-white hover:text-secondary border-2 hover:bg-primary hover:border-secondary px-4 py-3 my-8 mx-auto flex items-center`}
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
}

export default Contact;
