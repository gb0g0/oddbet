import { logo, pepe2 } from "../assets";

const Section3 = () => {
  return (
    <div className="w-full grotesk flex justify-center md:pt-[30px]">
      <div className="flex flex-col md:flex-row items-center justify-between md:p-5 py-10 px-4">
        <div className="flex flex-col gap-3 sm:items-start items-center">
          <h1 className="font-bold text-center sm:text-left sm:text-6xl text-3xl">
            Dive into Depressed
            <br />
            Individual Realm
          </h1>
          <p className="sm:text-2xl sm:text-left text-center text-lg font-medium text-[#EBEBF599]">
            In a world of tokens, feelings bought and sold,
            <br />A unique emotion, Depressed, a story unfolds.
          </p>
          <div>
            <a
              href="https://t.me/DepressedPortal
"
            >
              <button className="border-[#fff] mb-5">Early Access</button>
            </a>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-start md:ml-10 icon-fade">
          <img src={"https://neurosciencenews.com/files/2023/07/depression-anxiety-concept-eurscience.jpg"} alt="logo" width={350} />
        </div>
      </div>
    </div>
  );
};
export default Section3;
