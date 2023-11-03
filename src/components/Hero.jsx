import { logo } from "../assets";

const Hero = () => {
  return (
    <div className="w-full grotesk flex justify-center md:pt-[30px]">
      <div className="flex flex-col md:flex-row items-center justify-between md:p-5 py-10 px-4">
        <div className="flex flex-col gap-3 sm:items-start items-center">
          <h1 className="font-bold text-center sm:text-left sm:text-6xl text-3xl">
            There is a <br />
            unique crypto token <br />
            known as <span className="">Depressed</span>.
          </h1>
          <p className="sm:text-2xl sm:text-left text-center text-lg font-medium text-[#EBEBF599]">
            In a world where emotions were <br />
            traded like currency.
            {/* 
In a world where emotions were traded like currency, There was a unique crypto token known as "Depressed."

*/}
          </p>
          <a
            href="https://etherscan.io/token/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="sm:text-lg sm:text-left text-center underline text-[12px] font-normal text-[#EBEBF599]">
              CA: 
            </p>
          </a>
          <div>
            <a href="" target="_blank" rel="noopener noreferrer">
              <button className=" border-[#fff] mb-5">Buy $DEPRESSION Now</button>
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
//https://link.bitpay.com/i/W5M73vVNnHzvrYwNvPLKhw
