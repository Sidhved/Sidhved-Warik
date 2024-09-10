import Globe from "react-globe.gl";
import { Color } from "three";
import Button from "../components/Button";
import { useState } from "react";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("sw6071@nyu.edu");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 sm:grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container ">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I am Sidhved Warik</p>
              <p className="grid-subtext">
                I am a Full-Stack Machine Learning Engineer pursuing Masters in
                Computer Science at New York University. My passion lies in
                exploring innovative solutions to real-world problems, using AI
                and deep learning. I am proficient in Software Development and
                Exploratory Data Analysis.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3 ">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:w-[276px] h-fit object-contain mx-auto"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                My technical toolkit includes Python, R, C++, and JavaScript,
                with a focus on machine learning frameworks like TensorFlow,
                PyTorch, and scikit-learn. I’m proficient in backend development
                using Django and Node.js, and have a strong grasp of cloud
                services like AWS. Whether it's data analysis, model
                development, or backend architecture, I’m equipped to tackle
                diverse challenges.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 40.678177,
                    lng: -73.94416,
                    text: "I am here!",
                    Color: "white",
                    size: 20,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">My Journey so far...</p>
              <p className="grid-subtext">
                I’m originally from India, where I completed my BTech in
                Computer Science with a specialization in Artificial
                Intelligence and Machine Learning in 2023. Driven by my passion
                for AI, I continued my journey at NYU to pursue a master's in
                computer science. My experiences, from leading initiatives at
                the Google Developer Student Club to interning as a Machine
                Learning Engineer, have shaped my career path and deepened my
                commitment to advancing AI technologies.
              </p>

              <a href="#contact" className="w-full">
                <Button
                  name="Contact Me"
                  isBeam
                  containerClass="w-full mt-10"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext mt-20">My Hobbies</p>
              <p className="grid-subtext">
                When I’m not coding, I enjoy playing the piano, diving into
                digital content creation, and solving intricate puzzles like the
                rubik's cube. I’m also passionate about fitness and working
                towards my personal goals. Outside of tech, you might find me
                exploring art, learning new languages, or playing basketball.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center mt-10">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg: text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  sw6071@nyu.edu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
