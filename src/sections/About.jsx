import { useState } from "react";
import Globe from "react-globe.gl";

import Button from "../components/Button.jsx";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(" adrian@jsmastery.pro");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const languages = [
    { name: "JavaScript", img: "assets/js.png" },
    { name: "Python", img: "assets/python.png" },
    { name: "SQL", img: "assets/sql.png" },
    { name: "C", img: "assets/c.png" },
    { name: "C++", img: "assets/c++.png" },
    { name: "HTML", img: "assets/html.png" },
    { name: "CSS", img: "assets/css.png" },
  ];

  const frameworks = [
    { name: "React JS", img: "assets/reactjs.png" },
    { name: "Express", img: "assets/express.png" },
    { name: "Three.js", img: "assets/threejs.png" },
    { name: "Material UI", img: "assets/mui.png" },
    { name: "Bootstrap", img: "assets/bootstrap.png" },
    { name: "Tailwind CSS", img: "assets/tailwindcss.png" },
    { name: "Node.js", img: "assets/nodejs.png" },
    { name: "Mongoose", img: "assets/mongoose.png" },
  ];

  const databases = [
    { name: "MongoDB", img: "assets/mongodb.png" },
    { name: "MySQL", img: "assets/mysql.png" },
  ];

  const IconWithHover = ({ name, img }) => (
    <div className="relative group w-16 h-16">
      <img src={img} alt={name} className="w-full h-full object-contain" />
      <span className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-60 text-white flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
        {name}
      </span>
    </div>
  );

  return (
    <section className="c-space my-20 mt-80" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-row-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid1.png"
              alt="grid-1"
              className="w-60 sm:h-[276px] h-70 object-contain ml-10 rounded-lg"
            />

            <div>
              <p className="grid-headtext">Hi, I’m Naman Dadhich</p>
              <p className="grid-subtext">
                I'm a 2nd-year B.Tech CSE student at Maharaja Surajmal Institute
                of Technology (MSIT), and a tech enthusiast with a passion for
                coding, innovation, and exploring the latest in technology!
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[276px] h-fit object-contain overflow-hidden"
            />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code.
                Programming isn&apos;t just my profession—it&apos;s my passion.
                I enjoy exploring new technologies, and enhancing my skills.
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
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 28.70406,
                    lng: 77.102493,
                    text: "Naman",
                    color: "white",
                    size: 15,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I’m very flexible with time zone communications & locations
              </p>
              <p className="grid-subtext">
                I&apos;m based in New Delhi, India and open to remote work
                worldwide.
              </p>
              <a href="#contact"><Button name="Contact Me" isBeam containerClass="w-full mt-10" /></a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container flex flex-col items-center text-center">
            {/* Languages Section */}
            <h2 className="text-2xl font-bold mb-4 text-green-500">
              Languages
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 mb-8">
              {languages.map((lang) => (
                <IconWithHover
                  key={lang.name}
                  name={lang.name}
                  img={lang.img}
                />
              ))}
            </div>

            {/* Libraries and Frameworks Section */}
            <h2 className="text-2xl font-bold mb-4 text-green-500">
              Libraries and Frameworks
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-4 mb-8">
              {frameworks.map((framework) => (
                <IconWithHover
                  key={framework.name}
                  name={framework.name}
                  img={framework.img}
                />
              ))}
            </div>

            {/* Databases Section */}
            <h2 className="text-2xl font-bold mb-4 text-green-500">
              Databases
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
              {databases.map((db) => (
                <IconWithHover key={db.name} name={db.name} img={db.img} />
              ))}
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <div className="space-y-2">
              <p className="text-center grid-headtext">Apart from coding</p>
              <div className="copy-container">
                <p className="grid-subtext">
                  I’m passionate about chess because it sharpens my mind and
                  strengthens my problem-solving abilities. The game challenges
                  me to think critically and strategically, always planning my
                  next move. I also love playing cricket, which keeps me active
                  and provides a great balance between mental and physical
                  fitness. Cricket teaches teamwork and discipline while keeping
                  me energized. Gaming is another passion of mine—it’s not just
                  fun, but also helps me relax and think strategically in
                  fast-paced situations. Together, these activities keep me
                  focused, fit, and always improving my skills.
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
