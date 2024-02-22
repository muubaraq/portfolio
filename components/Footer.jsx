import { useEffect, useState } from 'react';
import { FaCode } from "react-icons/fa6";
import { TiCode } from "react-icons/ti";
const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the current year when the component mounts
    setCurrentYear(new Date().getFullYear());
  }, []); // Empty dependency array to run the effect only once
    return (
        <div className="flex justify-between items-baseline py-2 bg-darkBg">
            <div className="">
                <p className="text-white flex items-center text-[20px] font-semibold font-lobster">
                <TiCode />
                    <span className="text-[32px]">M</span>
                    uuba
                    <span className="text-red">raq</span>
                    <FaCode />
                </p>
            </div>
            <div className="">
            <p className="text-ash">Copyright &copy; {currentYear}</p>
            </div>
        </div>
    )
}

export default Footer