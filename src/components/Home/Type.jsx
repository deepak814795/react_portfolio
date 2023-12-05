import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Software Developer",
              "Full Stack Developer",
              "Open Source Contributor"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 80,
          }}
        />
      )
}

export default Type