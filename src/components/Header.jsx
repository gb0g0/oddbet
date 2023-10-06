import { useState } from "react";
import { logo } from "../assets";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
const buy =
  "https://app.rocketswap.cc/exchange/swap?outputCurrency=0xED32631bC4A7a6081f60eFcd76D70A3f7A482FF5";
const twitter = "https://x.com/OnlyUp_ERC";
const telegram = "https://t.me/OnlyUp_ERC";
const Header = () => {
  const [toogleMenu, setToogleMenu] = useState(false);
  return (
    <div className="flex md:flex-row justify-center py-[5px] px-[2%] w-screen mt-[5px] mb-[25px] gap-6 grotesk">
      <div className="flex items-center justify-center">
        <img src={logo} alt="Logo" width="40px" height="40px" />
        <p className="font-semibold ml-[5px]">ODDBET</p>
      </div>
      {/* <div className="md:flex hidden items-center justify-center gap-10">
        <a href="http://vote.only-up.app/">Play</a>
        <a href={buy}>Buy</a>
        <a href={twitter}>About</a>
        <button className="green">Connect</button>
      </div>
        {toogleMenu ? (
          <RxCross2
            fontSize={40}
            className="cursor-pointer md:hidden flex z-20"
            onClick={() => setToogleMenu(false)}
          />
        ) : (
          <HiMenuAlt3
            fontSize={40}
            className="cursor-pointer md:hidden z-20"
            onClick={() => setToogleMenu(true)}
          />
        )}
        {toogleMenu && (
          <div
            onClick={() => setToogleMenu(false)}
            className="h-screen w-screen z-10 top-0 right-0 flex absolute"
          >
            <div className="gap-4 z-10 justify-center flex flex-col items-center flex-initial w-[200px] absolute top-12 right-0 rounded-xl glass-effect md:hidden py-5 ">
              <a href="http://vote.only-up.app/">Play</a>
              <a href={buy}>Buy</a>
              <a href={twitter}>About</a>
              <button className="green">Connect</button>
            </div>
          </div>
        )} */}
    </div>
  );
};
export default Header;
