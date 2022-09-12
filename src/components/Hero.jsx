import styles from "../style";
import { discount, robot, logo } from "../assets";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          <span>Nico Francis</span>
          <br className="sm:block hidden" />
          <span className="text-gradient">I build things for the web.</span>
        </h1>
      </div>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        I’m a fullstack software engineer specializing in building exceptional
        digital experiences. Here to turn your ideas into reality.
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={logo} alt="hero" className="w-[100%] h-[100%] relative z-[5]" />

      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>

    <div></div>
  </section>
);

export default Hero;
