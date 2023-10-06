import { logo } from "../assets";

const Hero = () => {
  return (
    <div className="w-full grotesk flex justify-center md:pt-[30px]">
      <div className="flex flex-col md:flex-row items-center justify-between md:p-5 py-10 px-4">
        <div className="flex flex-col gap-3 sm:items-start items-center">
          <h1 className="font-bold text-center sm:text-left sm:text-6xl text-3xl">
            OddsBet offers<br/>users a fair and secure<br/>platform to place bets
          </h1>
          <p className="sm:text-2xl sm:text-left text-center text-lg font-medium text-[#EBEBF599]">
           Access real-time odds, and enjoy <br/>a seamless gambling experience.

          </p>
          <a
            href="https://etherscan.io/token/0xBa71C77e8fc9CbB5bF715daF4e7bf158aBb6bF9B"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="sm:text-lg sm:text-left text-center underline text-[10px] font-normal text-[#EBEBF599]">
              CA: 0xBa71C77e8fc9CbB5bF715daF4e7bf158aBb6bF9B
            </p>
          </a>
          <div>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="green border-[#fff] mb-5">
                Buy $ODD Now
              </button>
            </a>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-start md:ml-10 icon-fade">
          <img src={logo} alt="logo" width={350} />
        </div>
      </div>
    </div>
  );
};
export default Hero;
