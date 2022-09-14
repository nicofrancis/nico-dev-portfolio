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
        action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
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
      </form>
    </div>
  );
}

export default Contact;
