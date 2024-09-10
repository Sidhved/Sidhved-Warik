import { Canvas } from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { PerspectiveCamera } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index";
import PythonLogo from "../components/PythonLogo";
import Cube from "../components/Cube";
import CoffeeMug from "../components/CoffeeMug";
import Ring from "../components/Ring";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Sidhved <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          ML Engineer | Full Stack Developer
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                //   scale={0.06}
                //   position={[0, 0, 0]}
                rotation={[0, -Math.PI, 0]}
                position={sizes.deskPosition}
                scale={sizes.deskScale}
              />
            </HeroCamera>
            <group>
              <CoffeeMug position={sizes.coffeeMugPosition} />
              <PythonLogo position={sizes.pythonLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Ring position={sizes.ringPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button
            name="Let's Work Together"
            isBeam
            containerClass="sm:w-fit w-full sm: min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
