const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://github.com/namannn04" className="">
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2 ml-3"
            />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/naman-dadhich-99ba432b2/">
            <img
              src="/assets/linkedIn.png"
              alt="linkedIn"
              className="w-1/2 h-1/2 ml-3"
            />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://x.com/namannn04">
            <img
              src="/assets/twitter.svg"
              alt="twitter"
              className="w-1/2 h-1/2 ml-3"
            />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.instagram.com/namannn04">
            <img
              src="/assets/instagram.svg"
              alt="instagram"
              className="w-1/2 h-1/2 ml-3"
            />
          </a>
        </div>
      </div>

      <p className="text-white-500">
        © 2024 Naman Dadhich. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
