import React, { useState } from 'react'

export default function Staminaburner() {
    const [stamina,setStmina]=useState(100);
    const[ctr,setCtr]=useState(0);
    const[isDisabled,setIsDisabled]=useState(false);

    const HandleClick=()=>{
    
         if(stamina<=0){
                setIsDisabled(true);
                return;
         }

        if(ctr<5){
            setStmina(stamina-2);
            setCtr(ctr+1);
        }
        else{
            setStmina(stamina-15)
            setCtr(0);
        }

    }
  return (
    <>
     <div className="container mx-auto bg-gray-200 border-t border-gray-300 p-6">
  <h2 className="text-orange-600 text-center text-4xl mb-6">
    Stamina Burner
  </h2>

  <div className="flex flex-col items-center justify-center gap-6">
    <div className="text-4xl text-orange-500 font-bold">
      {stamina}
          
    </div>
      <div className={`${isDisabled ? "opacity-100" :"opacity-0"} text-lg text-red-600 font-bold`}> "Burnout! Rest Required".</div>
    <button
      className={`p-4 px-8 border rounded-lg border-gray-400 bg-orange-500 text-white hover:scale-105 transition-all duration-300 ${
        isDisabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={HandleClick}
      disabled={isDisabled}
    >
      Write-code
    </button>
  </div>
</div>

       
    </>
  )
}
