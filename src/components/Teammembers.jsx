import { motion as Motion } from 'framer-motion';

const TeamMemberCard = ({ name, image }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="flex flex-col items-center border-2 border-black rounded-b-[50px] overflow-hidden bg-white w-[200px] sm:w-[230px] md:w-[250px] shadow-xl"
    >
      <img src={image} alt={name} className="w-full h-[250px] object-cover" />
      <div className="w-full bg-[#8FD8EA] text-center py-3 font-anton text-black text-[1rem] border-t-2 border-black">
        {name}
      </div>
    </Motion.div>
  );
};

export default TeamMemberCard;
