const Section1 = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen my-10 sm:px-32 px-5 grotesk">
        <div className="p-5 w-full flex flex-col justify-center items-center white-glassmorphism">
          <p className="text-2xl font-bold text-center">Dark Side of AI</p>
          <p className="text-white font-extralight text-justify sm:text-center max-w-[1000px]">
            In recent years, artificial intelligence (AI) has made remarkable
            strides, transforming various aspects of our lives. From virtual
            personal assistants to self-driving cars, AI has promised to make
            our world more efficient and convenient. However, as AI technology
            advances, it also brings to light a darker side that merits our
            attention and vigilance.
          </p>
          <p className="text-white font-extralight text-justify sm:text-center max-w-[1000px]">
            AI's ability to analyze vast amounts of data is a double-edged
            sword. While it can help improve products and services, it also
            poses significant threats to individual privacy. AI systems can
            easily gather and analyze personal data, leading to potential
            privacy breaches.
          </p>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col items-center justify-center gap-6">
        <iframe
          width="400"
          height="315"
          src="https://www.youtube-nocookie.com/embed/pnjrrHAA1tg?si=fcQoAO0OaGpEhxIU&amp;controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="400"
          height="315"
          src="https://www.youtube-nocookie.com/embed/RdAQnkDzGvc?si=NwkEd4gHLKle3ric&amp;controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};
export default Section1;
