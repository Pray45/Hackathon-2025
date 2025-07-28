'use client';
import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';

const FAQs = () => {
  const faqs = [
    {
      question: "Who Can Participate In The Hackathon?",
      answer:
        "Anyone with a passion for innovation and technology! Whether you're a student, beginner, experienced developer, designer, or entrepreneur — you're welcome to participate. No prior hackathon experience is required. If you're eager to learn, build, and collaborate, this event is for you!",
    },
    {
      question: "What is the team size and can I participate solo?",
      answer:
        "You can participate solo or in a team of up to 4 members. Teamwork is encouraged, but solo participation is completely acceptable!",
    },
    {
      question: "Are there any registration fees or eligibility criteria?",
      answer:
        "There are no registration fees. The hackathon is open to all students and developers regardless of their academic year or background.",
    },
    {
      question: "Will there be any mentorship or workshops during the event?",
      answer:
        "Yes! We'll have mentorship sessions and technical workshops during the hackathon to guide you throughout your journey.",
    },
    {
      question: "What should we bring and what resources will be provided",
      answer:
        "Bring your laptop, charger, and any hardware you may need. Internet, workspace, food, and refreshments will be provided at the venue.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FFC0CA] w-full px-[5%]">
      {/* Heading */}

    <img
        className="w-[70vw] flex"
        src="faq.svg"
        alt=""
    />

      {/* FAQ List */}
      <div className="flex flex-col gap-10 items-center py-[5%]">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          const isEven = idx % 2 === 0;

          return (
            <Motion.div
              key={idx}
              className="w-full max-w-6xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`flex flex-col ${isEven ? 'md:items-start items-center' : 'md:items-end items-center'}`}>
                <Motion.div
                  onClick={() => toggleFAQ(idx)}
                  whileTap={{ scale: 0.98 }}
                  className={`btn-shadow flex items-center gap-4 p-6 bg-[#FFFFFF] text-[#875CFF] font-anton text-[2vh] sm:text-[2vw] shadow-lg cursor-pointer w-full max-w-5xl ${
                    isEven ? '' : 'flex-row-reverse text-right'
                  }`}
                >
                  <Motion.img
                    src="/q.svg"
                    alt="?"
                    className="w-10 md:w-12 lg:w-14"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="flex-1">{faq.question}</span>
                </Motion.div>

                <AnimatePresence mode="wait">
                  {isOpen && (
                    <Motion.div
                      initial={{ opacity: 0, height: 0, y: 0 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      exit={{ opacity: 0, height: 0, y: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="btn-shadow overflow-hidden z-0 w-full max-w-5xl"
                    >
                      <div
                        className={`bg-[#875CFF] text-white font-anton text-lg md:text-md lg:text-2xl px-6 py-6 shadow-inner ${
                          isEven ? 'md:text-left text-center ' : 'md:text-right text-center '
                        }`}
                      >
                        {faq.answer}
                      </div>
                    </Motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQs;