import { logo, x } from "../assets";
import { FaTelegram } from "react-icons/fa";
const telegram = "https://t.me/OddbetERC";
const twitter = "https://twitter.com/OddBet_Erc";
const Footer = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse justify-between py-[5px] px-[2%] w-screen mt-[5px] mb-[25px] gap-3 grotesk">
      <div className="flex items-center justify-center">
        <img src={logo} alt="Logo" width="40px" height="40px" />
        <p className="font-semibold ml-[5px]">ODDBET</p>
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
