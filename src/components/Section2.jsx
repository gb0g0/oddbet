import { FaGift } from "react-icons/fa";
import { MdGroups3 } from "react-icons/md";
import { BsFillCheckSquareFill } from "react-icons/bs";
const Card = ({ icon, title, subtitle }) => (
  <div className="flex flex-col max-w-xs min-h-[15.625rem] justify-start p-4 cursor-pointer white-glassmorphism hover:shadow-xl">
    <div className="w-14 h-14 rounded-md flex items-center justify-center bg-black">
      {icon}
    </div>
    <div className="flex flex-col flex-1">
      <h1 className="mt-2 text-white text-2xl font-medium">{title}</h1>
      <p className="mt-2 text-[#EBEBF599] font-extralight">{subtitle}</p>
    </div>
  </div>
);

const Section2 = () => {
  return (
    <div className="w-full grotesk my-[20px] ">
      <div className="w-full text-white text-4xl font-bold flex justify-center">
        Key Features
      </div>
      <div className="flex flex-wrap w-screen my-[20px] gap-[26px] grotesk justify-center items-center">
        <Card
          icon={<BsFillCheckSquareFill fontSize={21} className="text-white" />}
          title="Ethical Dilemmas"
          subtitle="AI systems can perpetuate and even exacerbate existing biases and prejudices present in the data they are trained on."
        />
        <Card
          icon={<MdGroups3 fontSize={21} className="text-white" />}
          title="Job Displacement"
          subtitle="Preparing the workforce for the future and addressing the potential negative impact on employment is a pressing concern."
        />
        <Card
          icon={<FaGift fontSize={21} className="text-white" />}
          title="Data Privacy"
          subtitle="The collection and utilization of personal data by AI systems can raise concerns about consent, transparency, and data ownership."
        />
      </div>
    </div>
  );
};
export default Section2;
