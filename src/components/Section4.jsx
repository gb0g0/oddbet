import { logo, pepe1 } from "../assets";

const Section4 = () => {
  return (
    <div className="w-full grotesk flex justify-center md:pt-[30px]">
      <div className="flex flex-col md:flex-row items-center justify-between md:p-5 py-10 px-4">
        <div className="flex flex-col gap-3 sm:items-start items-center">
          <h1 className="font-bold text-center sm:text-left sm:text-6xl text-3xl">
            Be part of this change
          </h1>
          <p className="sm:text-2xl sm:text-left text-center text-lg font-medium text-[#EBEBF599]">
            Timely and accurate data heightens the <br />
            excitement and competitiveness of the platform.
          </p>
          <div>
            <a href="https://t.me/DarkSideofAI_Portal">
              <button className=" border-[#fff] mb-5">
                Join Telegram
              </button>
            </a>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-start md:ml-10 icon-fade">
          <img src={pepe1} alt="logo" width={350} />
        </div>
      </div>
    </div>
  );
};
export default Section4;
