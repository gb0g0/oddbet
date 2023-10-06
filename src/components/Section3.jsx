import { logo, pepe2 } from "../assets";

const Section3 = () => {
  return (
    <div className="w-full grotesk flex justify-center md:pt-[30px]">
      <div className="flex flex-col md:flex-row items-center justify-between md:p-5 py-10 px-4">
        <div className="flex flex-col gap-3 sm:items-start items-center">
          <h1 className="font-bold text-center sm:text-left sm:text-6xl text-3xl">
            Dive into <br />
            OddsBet Realm
          </h1>
          <p className="sm:text-2xl sm:text-left text-center text-lg font-medium text-[#EBEBF599]">
            Experience betting in fair secure and smooth way.
            <br />
            Start your adventure today!
          </p>
          <div>
            <a href="https://t.me/OddbetERC">
              <button className="green border-[#fff] mb-5">
                Early Access
              </button>
            </a>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-start md:ml-10 icon-fade">
          <img src={pepe2} alt="logo" width={350} />
        </div>
      </div>
    </div>
  );
};
export default Section3;
