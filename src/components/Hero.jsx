import styles from "../style";
import { logo } from "../assets";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingX}`}>
    <div
      className={`${styles.flexStart} flex-1 flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          <span>I'm Nico.</span>
          <br className="sm:block hidden" />{" "}
          <span className="text-gradient">I build things</span>{" "}
          <span className="text-gradient">for the web.</span>
        </h1>
      </div>

      <p className={`${styles.paragraph} max-w-[500px] mt-5`}>
        I’m a fullstack web developer specializing in building exceptional
        digital experiences. Here to turn your greatest ideas into reality.
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={logo}
        alt="hero"
        className="w-[100%] h-[100%] relative z-[5] hover:"
      />

      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
  </section>
);

export default Hero;
