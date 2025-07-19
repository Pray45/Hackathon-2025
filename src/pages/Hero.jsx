import React from 'react';
import Header from '../components/Header';

const Hero = () => {
  return (
    <div className="flex flex-col">
      <section className="min-h-screen md:h-screen relative bg-[#8FD8EA] overflow-hidden flex flex-col justify-between">
        <Header />

        <div>

        <div className='sm:hidden flex items-center justify-center'>
          <img src="bg.png" className='mt-10' alt="" />
          <h1
            className="font-anton absolute text-[25vw] leading-none text-black"
            >
            CODE ARCADE
          </h1>
        </div>
        
        <div className="flex-1 flex flex-col justify-center items-center px-6 py-12 relative">
          <div className="z-10 mb-20">
            <div className='flex w-screen justify-between'>
              <img src="red.svg" className='hidden sm:flex w-[15vw]' alt="" />

              <h1
                className="font-anton sm:flex hidden text-[10vw] font-black text-white mb-5"
                style={{
                  WebkitTextStroke: '1px black',
                  textShadow: '10px 5px 0 black',
                }}
                >
                CODE ARCADE
              </h1>

              <img className='hidden sm:flex rotate-180 w-[15vw]' src="red.svg" alt="" />
            </div>
         
            <p className="font-poppins font-bold text-[3.5vw] px-3 text-left sm:text-[1.1vw] sm:text-center text-black sm:w-1/2 mx-auto mb-8 leading-relaxed">
              A thrilling state-level hackathon bringing together bright minds to innovate, collaborate, and build impactful tech solutions in a high-energy, competitive environment.
            </p>
         
            <div className="flex gap-10 justify-center">
              <button 
                className="group w-[40vw] sm:w-fit overflow-x-hidden px-[2vw] sm:text-[1.15vw] py-[0.75vw] font-anton text-black bg-white border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] active:shadow-[1px_1px_0px_0px_#000] transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 active:translate-x-1 active:translate-y-1 select-none"
                >
                <span className="relative z-10">Register Now</span>
              </button>

              <button 
                className="group w-[40vw] sm:w-fit overflow-hidden px-[2vw] sm:text-[1.15vw] py-[0.75vw] font-anton text-black bg-white border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] active:shadow-[1px_1px_0px_0px_#000] transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 active:translate-x-1 active:translate-y-1 select-none"
                >
                <span className="relative z-10">Read More</span>
              </button>
            </div>
          </div>
        </div>


        </div>

        <img className='hidden sm:flex absolute w-[100vw] h-[30vw] -bottom-[12.5vw] z-0' src="/bgwave.png" alt="" />
        
        <div className="h-10 sm:h-15 w-screen bg-[#875CFF] overflow-hidden relative">
          <div className="marquee-track flex absolute whitespace-nowrap">
            <div className="marquee-content px-4 text-white font-bold pt-1 text-2xl sm:text-[2vw] gap-5">
              <h1 className='flex items-center gap-5'>
                Insert Brain. Press Start. Hack Insert Brain. Press Start. Hack Insert Brain. Press Start. Hack Insert Brain.
              </h1>
            </div>
            <div className="marquee-content px-4 text-white font-bold pt-1 text-2xl sm:text-[2vw] gap-5">
              <h1 className='flex items-center gap-5'>
                Insert Brain. Press Start. Hack Insert Brain. Press Start. Hack Insert Brain. Press Start. Hack Insert Brain.
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
