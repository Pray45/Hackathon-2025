import { motion as Motion } from "framer-motion";
import TeamMemberCard from "../components/Teammembers";

const teamData = [
  { name: "Pray Patel", img: "team/pray.jpeg" },
  { name: "Sigma male", img: "team/niraj.jpg" },
  { name: "Shut up..!!!", img: "team/mahek.jpeg" },
  { name: "call pagluuu", img: "team/ruddar.jpeg" },
  { name: "Muskan don", img: "team/muskan.jpeg" },
  { name: "crime master gogo", img: "team/idk.jpg" },
];

const Ourteam = () => {
  return (
    <div className="bg-[#A88AFF] w-screen overflow-hidden relative pb-1">
      <img
        className="w-[70vw] justify-self-end flex"
        src="img/ourteam.svg"
        alt=""
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-8 gap-5 mt-12 max-w-6xl mx-auto pb-10">
        {teamData.map((member, index) => (
          <Motion.div
            key={index}
            className="flex justify-center"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
          >
            <TeamMemberCard name={member.name} image={member.img} />{" "}
          </Motion.div>
        ))}
      </div>
    </div>
  );
};

export default Ourteam;