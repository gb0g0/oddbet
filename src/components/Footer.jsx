import { logo, x } from "../assets";
import { FaTelegram } from "react-icons/fa";
const telegram = "https://t.me/DarkSideofAI_Portal";
const twitter = "http://Twitter.com/DarksideofAI_";
const Footer = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse justify-between py-[5px] px-[2%] w-screen mt-[5px] mb-[25px] gap-3 grotesk">
      <div className="flex items-center justify-center">
        <img src={logo} alt="Logo" width="40px" height="40px" />
        <p className="font-semibold ml-[5px]">Dark Side of AI</p>
      </div>
      <div className="flex items-center justify-center gap-1">
        <a href={twitter}>
          <img src={x} alt="Logo" width="50px" height="50px" />
        </a>
        <a href={telegram}>
          <FaTelegram fontSize={29} className="text-white" />
        </a>
      </div>
    </div>
  );
};
export default Footer;
