import React, { useEffect } from "react";
import { TweenLite, TweenMax, Linear, Sine } from "gsap";

function Banner() {
  useEffect(() => {
    TweenLite.set("#container", { perspective: 600 });
    var total = 10;
    var container = document.getElementById("container"),
      w = window.innerWidth,
      h = window.innerHeight / 1.38;
    //create leaf
    for (let i = 0; i < total; i++) {
      var Div = document.createElement("div");
      TweenLite.set(Div, {
        attr: { class: "dot" },
        x: R(0, w),
        y: R(-200, -150),
        z: R(-200, 200),
      });
      container.appendChild(Div);
      animm(Div);
    }
    // animate start
    function animm(elm) {
      TweenMax.to(elm, R(6, 15), {
        y: h + 100,
        ease: Linear.easeNone,
        repeat: -1,
        delay: -15,
      });
      TweenMax.to(elm, R(4, 8), {
        x: "+=100",
        rotationZ: R(0, 180),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
      });
      TweenMax.to(elm, R(2, 8), {
        rotationX: R(0, 360),
        rotationY: R(0, 360),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
        delay: -5,
      });
    }

    function R(min, max) {
      return min + Math.random() * (max - min);
    }
  }, []);
  return (
    <>
      <div className="fade-in-banner">
        <div className="banner_title"> Title </div>
        <div className="container">
          <div id="container"></div>
        </div>
        <div className="half-video-half-image">
          <div className="image">
            <div className="image-container">
              <img src="photo/banner_men.webp" />
            </div>
          </div>
          <div className="image">
            <div className="image-container">
              <img src="photo/banner_women.webp" />
            </div>
          </div>
        </div>
      </div>
      <script src="js/animation.js"></script>
    </>
  );
}

export default Banner;
