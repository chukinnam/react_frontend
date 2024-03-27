import React from "react";

const Footer = () => {
  return (
    <footer>
      <div class="footer_container">
        <div class="footer_flex_box">
          <div class="content">
            <h4>
              <span>CONTACT US</span>
            </h4>
            <ul class="contact_us_content">
              <li>
                <div class="phone">
                  <span>+852 2658 5113</span>
                </div>
              </li>
              <li>
                <div class="email">
                  <span>info@miioskin.com</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="content">
            <h4>
              <span>OUR CENTRES</span>
            </h4>
            <ul class="address">
              <li>
                <div>
                  <p>中環分店</p>
                  <span>
                    2-3/F, 1 Lan Kwai Fong, Central, HK 香港中環蘭桂坊１號 2-3
                    樓
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <p>尖沙咀分店</p>
                  <span>尖沙咀海港城世界商業中心1008室</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="content">
            <h4>
              <span>FOLLOW US</span>
            </h4>
            <ul class="social_media">
              <li>
                <img
                  alt="whatsapp icon"
                  src="/photo/whatsapp_icon.png"
                  width="40"
                  height="40"
                  decoding="async"
                  loading="lazy"
                />
              </li>
              <li>
                <img
                  alt="facebook icon"
                  src="/photo/facebook_icon.png"
                  width="40"
                  height="40"
                  decoding="async"
                  loading="lazy"
                />
              </li>
              <li>
                <img
                  alt="instagram icon"
                  src="/photo/ig_icon.png"
                  width="40"
                  height="40"
                  decoding="async"
                  loading="lazy"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
