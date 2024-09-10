import React from "react";

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms and Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-4">
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/sidhved-warik/" target="_blank">
            <img
              src="/assets/linkedin.svg"
              alt="linkedin"
              className="w-1/2 h-1/2 mx-3"
            />
          </a>
        </div>

        <div className="social-icon">
          <a href="https://github.com/Sidhved" target="_blank">
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2 mx-3"
            />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://x.com/Sid9051" target="_blank">
            <img
              src="/assets/twitter.svg"
              alt="twitter"
              className="w-1/2 h-1/2 mx-3"
            />
          </a>
        </div>

        <div className="social-icon">
          <a href="https://www.instagram.com/sidhved_1509/" target="_blank">
            <img
              src="/assets/instagram.svg"
              alt="instagram"
              className="w-1/2 h-1/2 mx-3"
            />
          </a>
        </div>
      </div>
      <p className="text-white-500">
        © 2024 Sidhved Warik. All Rights Reserved
      </p>
    </section>
  );
};

export default Footer;
