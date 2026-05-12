import React from 'react'


export default function Hero() {
      const internName = import.meta.env.VITE_INTERN_NAME;
      const hours = new Date().getHours();

      let greeting;

      if(hours >=1 && hours <12){
        greeting = "Good Morning";

      }
      else if(hours >=12 && hours <17){
        greeting ="Good Afternoon";
      }
      else if (hours >=17 && hours <21){
        greeting ="Good Evening";
    }
      else {
         greeting =" Good Night ";
      }

  return (
    <>
     <section className="py-16 px-6 flex flex-col items-center justify-center text-center bg-gray-50 min-h-[300px] rounded-3xl mx-4">
  <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
    {greeting}, {internName}
  </h1>
  <div className="bg-white/80 backdrop-blur-sm border border-orange-100 px-6 py-2 rounded-lg shadow-sm">
    <small className="text-orange-700 font-bold uppercase tracking-widest text-sm ">
      Current Hour • {hours}:00
    </small>
  </div>
</section>

    </>
  )
}
