import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white font-sans dark:bg-black">
      <header className="w-full bg-black border-b border-white p-7">
        <h1 className="text-2xl font-bold text-white ">Games Testing Dashboard</h1>
      </header>
      
       <div className="relative z-10 py-10 px-4 lg:px-20 lg:py-10 overflow-hidden">
  <video
    className="absolute inset-0 w-full h-full object-cover -z-10"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/game bg 2.mp4" type="video/mp4" />
  </video>

  <div className="absolute inset-0 bg-slate-950/70 -z-10"></div>

      
       <div className="flex flex-col-3 items-center justify-center gap-8 py-20 px-4 text-center">
       <button
          className="bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl text-white py-1 text-lg lg:text-lg lg:h-40 min-h-0 font-semibold px-20 shadow-xl hover:shadow-2xl hover:scale-120 transition-all duration-300"
        >
          Ludu Game
        </button>
         <button
          className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl text-white py-1 h-11 text-sm lg:text-base lg:h-40 min-h-0 font-semibold px-20 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          Ampe Game
        </button>
        <button
          className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl text-white py-1 h-11 text-sm lg:text-base lg:h-40 min-h-0 font-semibold px-20 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          Atlas Game
        </button>
        </div>
         <div className="flex flex-col-3 items-center justify-center gap-4 py-0 px-4 text-center">
       <button
          className="bg-indigo-600 rounded-lg text-white py-1 h-11 text-sm lg:text-base lg:h-40 min-h-0 font-semibold px-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          Game 01 FESUTJYGEFISGY
        </button>
         <button
          className="bg-indigo-600 rounded-lg text-white py-1 h-11 text-sm lg:text-base lg:h-40 min-h-0 font-semibold px-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          Game 01 FESUTJYGEFISGY
        </button>
        <button
          className="bg-indigo-600 rounded-lg text-white py-1 h-11 text-sm lg:text-base lg:h-40 min-h-0 font-semibold px-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          Game 01 FESUTJYGEFISGY
        </button>
        </div>
         <div className="flex flex-col-3 items-center justify-center gap-4 py-20 px-4 text-center">
       <button
          className="bg-indigo-600 rounded-lg text-white py-1 h-11 text-sm lg:text-base lg:h-40 min-h-0 font-semibold px-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          Game 01 FESUTJYGEFISGY
        </button>
         <button
          className="bg-indigo-600 rounded-lg text-white py-1 h-11 text-sm lg:text-base lg:h-40 min-h-0 font-semibold px-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          Game 01 FESUTJYGEFISGY
        </button>
        <button
          className="bg-indigo-600 rounded-lg text-white py-1 h-11 text-sm lg:text-base lg:h-40 min-h-0 font-semibold px-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          Game 01 FESUTJYGEFISGY
        </button>
        </div>
     </div>
    </div>
  );
}
