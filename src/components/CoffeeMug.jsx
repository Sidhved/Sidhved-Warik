import { useGLTF, Float } from "@react-three/drei";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CoffeeMug = (props) => {
  const { nodes, materials } = useGLTF("/models/coffee_cup.glb");
  const CoffeeMugRef = useRef();

  useGSAP(() => {
    gsap.to(CoffeeMugRef.current.position, {
      y: CoffeeMugRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <Float floatIntensity={1}>
      <group
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.09}
        position={[-7, -4, 0]}
        {...props}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial.geometry}
          material={materials.DefaultMaterial}
          rotation={[(3 * Math.PI) / 5, Math.PI / 4, 0]}
          scale={15}
          ref={CoffeeMugRef}
        />
      </group>
    </Float>
  );
};

useGLTF.preload("/models/coffee_cup.glb");

export default CoffeeMug;
