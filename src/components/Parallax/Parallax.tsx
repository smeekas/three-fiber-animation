import { ScrollControls, Scroll } from "@react-three/drei";
import React from "react";
import Particles from "./Particles";
import ParallaxHtml from "./ParallaxHtml";

function Parallax() {
  return (
    <ScrollControls pages={2}>
      <Scroll>
        <Particles />
      </Scroll>
      <Scroll html>
        <ParallaxHtml
          heading="html page"
          buttonContent="Click here button"
          top={100}
        />
      </Scroll>
    </ScrollControls>
  );
}

export default Parallax;
