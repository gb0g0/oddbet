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
          title="Fan Engagement"
          subtitle="OddsBet empowers fans to participate actively in the world of Sports."
        />
        <Card
          icon={<MdGroups3 fontSize={21} className="text-white" />}
          title="Global Marketplace"
          subtitle="With the OddBet Token, fans can trade and collect limited-edition digital collectibles, including virtual player cards, historic moments, and unique merchandise."
        />
        <Card
          icon={<FaGift fontSize={21} className="text-white" />}
          title="Tokenized Clubs"
          subtitle="Sports clubs can also benefit from the OddsBet Token by using it for crowdfunding, merchandise sales, and rewarding loyal supporters."
        />
      </div>
    </div>
  );
};
export default Section2;
