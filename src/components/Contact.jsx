// src/components/Contact.jsx

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({
    success: "",
    error: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setFeedback({ success: "", error: "" }); // Reset feedback on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback({ success: "", error: "" });

    // EmailJS Configuration
    const serviceID = "service_m7xod12"; // Replace with your EmailJS Service ID
    const templateID = "template_bcye21s"; // Replace with your EmailJS Template ID
    const publicKey = "VmLx9l3ImQco4kZnb"; // Replace with your EmailJS Public Key

    emailjs
      .send(
        serviceID,
        templateID,
        {
          from_name: form.name, // Sender's Name
          to_name: "Myo Htet", // Receiver's Name
          from_email: form.email, // Sender's Email
          to_email: "myohtetkyaw2003@gmail.com", // Your Email (Receiver)
          message: form.message, // Message Content
        },
        publicKey
      )
      .then(
        () => {
          setLoading(false);
          setFeedback({ success: "Thank you! I'll get back to you soon." });
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          setFeedback({
            error:
              "Something went wrong. Please try again later or contact me directly at myohtetkyaw2003@gmail.com.",
          });
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div
      className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden"
      id="contact"
    >
      {/* Contact Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {/* Name Field */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              required
            />
          </label>

          {/* Email Field */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              required
            />
          </label>

          {/* Message Field */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              required
            />
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>

          {/* Feedback Messages */}
          {feedback.success && (
            <p className="text-green-500 mt-4">{feedback.success}</p>
          )}
          {feedback.error && (
            <p className="text-red-500 mt-4">{feedback.error}</p>
          )}
        </form>
      </motion.div>

      {/* Earth Canvas or Another Visual Component */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
