import React, { useEffect } from "react";
import $ from "jquery";
function Gallery() {
  useEffect(() => {
    let image_array = [];
    $(document).ready(() => {
      $(".item.gallery").each(function () {
        image_array.push($(this));
      });
      var carousel = $(".carousel"),
        currdeg = 0;

      $(".next").on("click", function () {
        rotate("n");
      });
      $(".prev").on("click", function () {
        rotate("p");
      });

      let touched = false;
      let touchOrgPositionX = "";
      let touchEndPositionX = "";
      //mousedown
      $(".gallery").on("touchstart mousedown", (event) => {
        touched = true;
        touchOrgPositionX = event.pageX;
      });
      //mouseup
      $(".gallery").on("touchend mouseup", (event) => {
        touched = false;
        touchEndPositionX = event.pageX;
      });
      // mousee move
      let delay = false;
      $(".gallery").on("mousemove touchmove", () => {
        if (touched) {
          if (delay) {
            clearTimeout(delay);
          }
          delay = setTimeout(() => {
            if (touchOrgPositionX - touchEndPositionX > 20) {
              rotate("n");
            } else if (touchEndPositionX - touchOrgPositionX > 20) {
              rotate("p");
            }
          }, 300);
        }
      });

      function rotate(e) {
        let itemFirst = "";
        let itemMiddle = "";
        let itemLast = "";
        if (e == "n") {
          itemFirst = image_array[0];
          itemMiddle = image_array[1];
          itemLast = image_array[2];
          console.log(image_array);
          currdeg = currdeg - 120;
          itemLast.css({
            "-webkit-transform":
              "rotateY(" + -currdeg + "deg)" + "translateY(-4vw)",
            "-moz-transform":
              "rotateY(" + -currdeg + "deg)" + "translateY(-4vw)",
            "-o-transform": "rotateY(" + -currdeg + "deg)" + "translateY(-4vw)",
            transform: "rotateY(" + -currdeg + "deg)" + "translateY(-4vw)",
          });
          itemFirst.css({
            "-webkit-transform":
              "rotateY(" + -currdeg + "deg)" + "translateY(4vw)",
            "-moz-transform":
              "rotateY(" + -currdeg + "deg)" + "translateY(4vw)",
            "-o-transform": "rotateY(" + -currdeg + "deg)" + "translateY(4vw)",
            transform: "rotateY(" + -currdeg + "deg)" + "translateY(4vw)",
          });
          itemMiddle.css({
            "-webkit-transform":
              "rotateY(" + -currdeg + "deg)" + "translateY(0)",
            "-moz-transform": "rotateY(" + -currdeg + "deg)" + "translateY(0)",
            "-o-transform": "rotateY(" + -currdeg + "deg)" + "translateY(0)",
            transform: "rotateY(" + -currdeg + "deg)" + "translateY(0)",
          });
          image_array.push(image_array.shift());
        }
        if (e == "p") {
          image_array.unshift(image_array.pop());
          itemFirst = image_array[0];
          itemMiddle = image_array[1];
          itemLast = image_array[2];
          currdeg = currdeg + 120;
          itemLast.css({
            "-webkit-transform":
              "rotateY(" + -currdeg + "deg)" + "translateY(4vw)",
            "-moz-transform":
              "rotateY(" + -currdeg + "deg)" + "translateY(4vw)",
            "-o-transform": "rotateY(" + -currdeg + "deg)" + "translateY(4vw)",
            transform: "rotateY(" + -currdeg + "deg)" + "translateY(4vw)",
          });
          itemFirst.css({
            "-webkit-transform":
              "rotateY(" + -currdeg + "deg)" + "translateY(0)",
            "-moz-transform": "rotateY(" + -currdeg + "deg)" + "translateY(0)",
            "-o-transform": "rotateY(" + -currdeg + "deg)" + "translateY(0)",
            transform: "rotateY(" + -currdeg + "deg)" + "translateY(0)",
          });
          itemMiddle.css({
            "-webkit-transform":
              "rotateY(" + -currdeg + "deg)" + "translateY(-4vw)",
            "-moz-transform":
              "rotateY(" + -currdeg + "deg)" + "translateY(-4vw)",
            "-o-transform": "rotateY(" + -currdeg + "deg)" + "translateY(-4vw)",
            transform: "rotateY(" + -currdeg + "deg)" + "translateY(-4vw)",
          });
        }
        carousel.css({
          "-webkit-transform": "rotateY(" + currdeg + "deg)",
          "-moz-transform": "rotateY(" + currdeg + "deg)",
          "-o-transform": "rotateY(" + currdeg + "deg)",
          transform: "rotateY(" + currdeg + "deg)",
        });
      }
    });
  }, []);
  return (
    <>
      <h2>Ttle</h2>
      <div className="image-gallery">
        <div className="gallery">
          <div className="container">
            <div className="carousel gallery-images">
              <div className="a">
                <div className="item gallery">
                  <img
                    draggable="false"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                    src="photo/banner_men.webp"
                  />
                </div>
              </div>
              <div className="b">
                <div className="item gallery">
                  <img
                    draggable="false"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                    src="photo/banner_men.webp"
                  />
                </div>
              </div>
              <div className="c">
                <div className="item gallery">
                  <img
                    draggable="false"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                    src="photo/banner_men.webp"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="next">NEXT</div>
          <div className="prev">PREVIOUS</div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
