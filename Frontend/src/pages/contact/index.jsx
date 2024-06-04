import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaClock, FaPhoneAlt, FaLocationArrow } from 'react-icons/fa';
import { MdEmail, MdSend } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { headingAnimation, contactAnimation } from '../../hooks/useAnimation';
import BottomLine from '../../components/bottom-line';

const Contact = () => {
  const navigate = useNavigate();
  const form = useRef();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const handleSend = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_6xnj05v',
        'template_exk29f8',
        form.current,
        'kLfLk-o6LKj-L9c77'
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Message has been sent',
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/');
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="py-8 parent">
      <motion.div
        initial="hidden"
        animate={viewDiv && 'visible'}
        variants={headingAnimation}
      >
        <h3 className="mt-16 text-center text-accent">Contact</h3>
        <h1 className="text-4xl font-semibold text-center text-accent">
          Contact <span className="text-primary">Us</span>
        </h1>
        <BottomLine />
        <h2 className="py-5 text-center text-accent">
          Dont hesitate to contact us at any time. You can have a free
          consultation with our great team who is ready to help you in
          showcasing your project.
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 gap-20 mt-8 md:grid-cols-2">
        <motion.div
          className=""
          ref={ref}
          initial="hidden"
          animate={viewDiv && 'visible'}
          variants={contactAnimation}
        >
          <form ref={form} onSubmit={handleSend}>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
              <input
                className="input-field"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
              <input
                className="input-field"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <input
              className="input-field"
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              required
            />
            <textarea
              className="input-field"
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Message"
              required
            ></textarea>
            <button
              type="submit"
              value="Send Message"
              className="primary-button"
            >
              <span>Send</span>
              <span>
                <MdSend />
              </span>
            </button>
          </form>
        </motion.div>
        <motion.div
          className=""
          initial={{ y: 50, opacity: 0 }}
          animate={viewDiv && 'visible'}
          variants={contactAnimation}
        >
          <div className="flex items-center my-6">
            <FaPhoneAlt className="mr-8 text-3xl text-primary duration-300 cursor-pointer hover:text-accent"></FaPhoneAlt>
            <h3 className="font-medium text-accent">0896387111079</h3>
          </div>
          <div className="flex items-center my-6">
            <MdEmail className="mr-8 text-3xl duration-300 text-primary cursor-pointer  hover:text-accent"></MdEmail>
            <h3 className="font-medium text-accent">info@showspot.com</h3>
          </div>
          <div className="flex items-center my-6">
            <FaClock className="mr-8 text-3xl text-primary duration-300 cursor-pointer  hover:text-accent"></FaClock>
            <h3 className="font-medium text-accent">
              Monday – Friday, 09:00 – 17:00
            </h3>
          </div>
          <div className="flex items-center my-6">
            <FaLocationArrow className="mr-8 text-primary text-3xl duration-300 cursor-pointer  hover:text-accent"></FaLocationArrow>
            <h3 className="font-medium text-accent">
              Digital Park, Sambau, Kecamatan Nongsa, Kota Batam, Kepulauan Riau
              29466
            </h3>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        animate={viewDiv && 'visible'}
        variants={headingAnimation}
      ></motion.div>
    </div>
  );
};

export default Contact;
