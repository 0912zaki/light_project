import lightON from "../assets/Nal.png"
import lightOff from "../assets/Laamp.png"
import { useState } from "react";

const Light = () => {
    
  const [isOn, setIsOn] = useState(true); //  (On/Off)

  return (
    <div className="flex justify-center items-center h-screen bg-black">
        {/*image*/}
        <div className="flex justify-center">
            {isOn ? (
              <img src={lightON} alt="On" width="200px" />
        ): (
             <img src={lightOff} alt="Off" width="180px" />
        )}
      </div>

        {/*bottones*/}
        <div className="flex justify-center pt-20 gap-4">
            <button
            className={`bg-white text-red-600 py-5 px-10 ${
                isOn ? "hidden" : ""
            }`}
            onClick={() => setIsOn(false)}
            >
            On
            </button>
            <button
            className={`bg-white text-blue-700 py-5 px-10 ${
                !isOn ? "hidden" : ""
            }`}
            onClick={() => setIsOn(true)}
            >
            Off
            </button>
        </div>
    </div>
  );
};


export default Light

