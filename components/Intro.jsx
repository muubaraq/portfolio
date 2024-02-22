import Image from "next/image";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const greetings = {
  en: 'Hi',
  fr: 'Bonjour',
  es: 'Hola',
  de: 'Hallo',
  ja: 'こんにちは',
  pid: 'How far',
  zh: '你好',
  ha: 'Sannu',
  yo: 'Bawo',
  ig: 'Ndewo'
};

const Intro = () => {
    const router = useRouter();
  const [currentGreeting, setCurrentGreeting] = useState(greetings.en);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Generate a random language code
      const languages = Object.keys(greetings);
      const randomLanguage = languages[Math.floor(Math.random() * languages.length)];
      // Update the greeting message with the randomly selected language
      setCurrentGreeting(greetings[randomLanguage]);
    }, 2000);

    return () => clearInterval(intervalId); // Cleanup function to clear the interval
  }, []); // Empty dependency array to run the effect only once
    return (
        <div className="w-full flex flex-col gap-6 lg:gap-12">
            <div className="flex flex-col gap-10 font-montserrat text-[rgb(250,250,250)]">
                <h1 className="text-[36px] md:text-[50px] font-bold leading-[110%]">
                    {currentGreeting}, I&apos;m <span className="text-red">Mubaraq A.</span>
                </h1>
                <p className="font-poppins font-normal text-sm lg:text-lg leading-[150%] tracking-normal">
                    {/* A.K.A. <span className="text-red text-base lg:text-xl font-semibold"> </span> */}
                    I am passionate about crafting visually stunning, engaging, and interactive creations through coding. My focus is on creating solutions that harness cutting-edge technologies to provide exceptional user experiences.
                </p>
            </div>
            <div className="flex gap-8">
                <a href="https://twitter.com/muubaraq">
                    <div className="relative w-[22px] lg:w-[30px] aspect-square">
                        <Image src={"/images/twitter.svg"} alt="twitter" fill loading="eager" />
                    </div>
                </a>
                <a href="https://github.com/muubaraq">
                    <div className="relative w-[22px] lg:w-[30px] aspect-square">
                        <Image src={"/images/github.svg"} alt="github" fill loading="eager" />
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/mubaraq-a-a20b1518b/">
                    <div className="relative w-[22px] lg:w-[30px] aspect-square">
                        <Image src={"/images/linkedin.svg"} alt="linkedin" fill loading="eager" />
                    </div>
                </a>
                {/* <a href="https://wa.me/message/7QB2Q45GBV7AG1">
                    <div className="relative w-[22px] lg:w-[30px] aspect-square">
                        <Image src={"/images/whatsapp.svg"} alt="whatsapp" fill loading="eager" />
                    </div>
                </a> */}
            </div>
        </div>
    )
}

export default Intro