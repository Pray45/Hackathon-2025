import {motion as Motion} from 'framer-motion';
import Header from '../components/Header';

const text = "CODE ARCADE";

const Hero = () => {
  return (
    <div className="flex flex-col">
      <section className="mbl min-h-screen md:h-screen relative bg-[#8FD8EA] overflow-hidden flex flex-col justify-between">
        <Motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Header />
        </Motion.div>

        <div>
          <div className='sm:hidden flex items-center justify-center relative'>
            <img src="bg.png" className='mt-0' alt="" />
            <h1 className="flex font-anton absolute text-[25vw] mb-10 leading-none text-black">
              <Motion.span
                className='flex'
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {text}
              </Motion.span>
              <img src="arw.svg" className='w-25 mb-20 mr-5' alt="" />
            </h1>
          </div>

          <div className="flex flex-col justify-center items-center relative">
            <div className="z-10 sm:mb-20">
              <div className='flex w-screen justify-between items-center'>
                <Motion.img
                  src="red.svg"
                  className='hidden sm:flex w-[15vw]'
                  alt=""
                  initial={{ x: -400, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                />

                <Motion.h1
                  className="font-anton sm:flex hidden text-[10vw] font-black text-white mb-5"
                  style={{
                    WebkitTextStroke: '1px black',
                    textShadow: '10px 5px 0 black',
                  }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 120 }}
                >
                  {text.split('').map((char, idx) => (
                    <Motion.span
                      key={idx}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      {char}
                    </Motion.span>
                  ))}
                </Motion.h1>

                <Motion.img
                  className='hidden sm:flex rotate-180 w-[15vw]'
                  src="red.svg"
                  alt=""
                  initial={{ x: -400, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                />
              </div>

              <Motion.p
                className="font-poppins text-[3.5vw] px-3 text-left sm:text-[1.1vw] sm:text-center text-black sm:w-1/2 mx-auto mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                A thrilling state-level hackathon bringing together bright minds to innovate, collaborate, and build impactful tech solutions in a high-energy, competitive environment.
              </Motion.p>

              <Motion.div
                className="flex gap-10 justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <button className="group w-[40vw] sm:w-fit overflow-x-hidden px-[2vw] sm:text-[1.15vw] py-[0.75vw] font-anton text-black bg-white border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] active:shadow-[1px_1px_0px_0px_#000] transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 active:translate-x-1 active:translate-y-1 select-none">
                  <span className="relative z-10">Register Now</span>
                </button>

                <button className="group w-[40vw] sm:w-fit overflow-hidden px-[2vw] sm:text-[1.15vw] py-[0.75vw] font-anton text-black bg-white border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] active:shadow-[1px_1px_0px_0px_#000] transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 active:translate-x-1 active:translate-y-1 select-none">
                  <span className="relative z-10">Read More</span>
                </button>
              </Motion.div>
            </div>
          </div>
        </div>

        <Motion.img
          className='hidden sm:flex absolute w-[100vw] h-[30vw] -bottom-[12.5vw] z-0'
          src="/bgwave.png"
          alt=""
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 1, ease: 'easeOut' }}
        />

        <div className="h-10 sm:h-[8vh] 2xl:h-15 w-screen bg-[#875CFF] border-t-2 overflow-hidden relative">
          <div className="marquee-track flex absolute whitespace-nowrap">
            <div className="marquee-content px-4 text-white font-bold sm:pt-2 text-2xl sm:text-[2vw] gap-5">
              <h1 className='flex items-center gap-5'>
                Insert Brain. Press Start. Hack <img src="Vector.svg" className='w-5 animate-spin' style={{ animationDuration: '3s' }} alt="" />
              </h1>
            </div>
            <div className="marquee-content px-4 text-white font-bold sm:pt-2 text-2xl sm:text-[2vw] gap-5">
              <h1 className='flex items-center gap-5'>
                Insert Brain. Press Start. Hack <img src="Vector.svg" className='w-5 animate-spin' style={{ animationDuration: '3s' }} alt="" />
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
