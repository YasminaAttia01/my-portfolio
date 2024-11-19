import Globe from "react-globe.gl"
import Button from "../components/Button"
import { useState } from "react";
const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('attiayasmina01@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
    return (
      <section className="c-space my-20" id="about">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
              <img 
                src="/assets/yasmina.jpg" 
                alt="grid-1" 
                style={{ width: '80px', height: '80px', borderRadius: '50%', border: '4px solid white' }} 
              /> 
              <div>
              <p className="grid-headtext">Hi , I am Yasmina</p>
              <p className="grid-subtext"> I am a versatile software engineering student with expertise in web development, JavaScript mastery, and specialization in cloud technologies and DevOps. I excel in building scalable applications, optimizing performance, and delivering innovative solutions with a focus on efficiency and impactful results.</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 xl:row-span-3">
            <div className="grid-container">
              <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:w-[276px] h-fit object-contain"/>
              <div>
                <p className="grid-headtext">Tech Stack</p>
                <p className="grid-subtext">
                  I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                  applications
                </p>
              </div>

            </div>
          

          </div>
          <div className="col-span-1 xl:row-span-4">
            <div className="grid-container">
              <div className=" rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                <Globe 
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  { lat: 35.8256, lng: 10.636, text: 'Sousse, Tunisia', color: 'white', size: 15 }
                ]}
                
              />
               
              </div>
              <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Tunisia and open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>

            </div>
          

          </div>
          <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">attiayasmina01@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;