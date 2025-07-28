import React from 'react';
import {motion as Motion} from 'framer-motion';

const rewardData = [
  { label: 'TITLE WINNERS', amount: '15,000 ₹' },
  { label: 'FIRST RUNNERS UP', amount: '10,000 ₹' },
  { label: 'SECOND RUNNERS UP', amount: '5,000 ₹' },
];

const Prize = () => {
  return (
    <section className="w-full bg-[#A2EAFB] text-black px-[5%] py-[5%]">
      {/* Header */}


      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-x-4 border-t-4 border-black w-full">
        {/* Left side - Prize Pool */}
        <Motion.div
          className="bg-[#FFF59D] p-6 flex flex-col items-center justify-center shadow-lg w-full border-b-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-anton text-[5vh] sm:text-[4vw] text-center mb-12">
            TOTAL PRIZE POOL
          </h2>
          <p className="font-anton text-[12vw] md:text-[5vw] mb-4 leading-none">
            35,000 ₹
          </p>

          {/* Swag Icons */}
          <div className="flex gap-4 mb-4 ">
            <img src="/team/ruddar.jpeg" alt="tshirt" className="sm:w-[5vw] w-[7vh] rounded-full h-[7vh] sm:h-[5vw]" />
            <img src="/team/ruddar.jpeg" alt="pen" className="sm:w-[5vw] w-[7vh] rounded-full h-[7vh] sm:h-[5vw]" />
            <img src="/team/ruddar.jpeg" alt="badge" className="sm:w-[5vw] w-[7vh] rounded-full h-[7vh] sm:h-[5vw]" />
          </div>

          <p className="text-center font-poppins text-[2vh] sm:text-[2vw] leading-snug px-5">
            Free swags will be given to everyone who qualifies for the offline round
          </p>
        </Motion.div>

        {/* Right side - Reward Tiers */}
        <Motion.div
          className="flex flex-col md:border-l-4  border-black w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {rewardData.map((reward, index) => (
            <Motion.div
              key={index}
              className="bg-white py-10 w-full text-center border-black border-b-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-anton text-purple-700 text-[5vh] sm:text-[3vw] ">
                {reward.label}
              </h3>
              <p className="text-black font-anton text-[5vh] sm:text-[4vw]">{reward.amount}</p>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default Prize;
