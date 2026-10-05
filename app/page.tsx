import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white font-sans dark:bg-black">
      <header className="w-full bg-slate-900 px-8 py-5 text-white shadow-lg">
  <div className="flex items-center justify-between">

    {/* Left Side */}
    <div>
      <h1 className="text-xl bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent ">
        Game Testing Dashboard
      </h1>

     
    </div>

    {/* Right Side */}
    <div className="flex items-center gap-6">

      {/* Games */}
      <div className="text-center">
        <p className="text-xs text-slate-400">Games</p>
        <p className="text-lg font-bold">06</p>
      </div>

      

      {/* Status */}
      <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 px-4 py-1 rounded-full">
        <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
        <span className="text-sm text-green-400 font-medium">
          Live Games Testing
        </span>
      </div>

      {/* User */}
      <div className="flex items-center gap-3 border-l border-slate-700 pl-6">
        <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-bold">
          C
        </div>

        <div>
          <p className="text-sm font-semibold">Creator</p>
          <p className="text-xs text-slate-400">Oppong-Bio</p>
        </div>
      </div>

    </div>
  </div>
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

  <div className="absolute inset-0 bg-black/60 -z-10"></div>

      
<div className="flex flex-col-3 items-center justify-center gap-8 py-20 px-4 text-center">
  <button
    className="group relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-purple-600 rounded-3xl text-white h-40 w-full max-w-sm font-bold shadow-2xl hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300"
  >
    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

    <div className="relative flex flex-col items-center justify-center h-full gap-2">
      <div className="text-4xl">🎲</div>
      <span className="text-xl">Ludu</span>
      <span className="text-xs uppercase tracking-[0.25em] opacity-80">
        Play Now
      </span>
    </div>
  </button>

  <button
    className="group relative overflow-hidden bg-gradient-to-br from-green-500 via-green-600 to-blue-600 rounded-3xl text-white h-40 w-full max-w-sm font-bold shadow-2xl hover:shadow-green-500/40 hover:scale-105 transition-all duration-300"
  >
    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

    <div className="relative flex flex-col items-center justify-center h-full gap-2">
      <div className="text-4xl">🪙</div>
      <span className="text-xl">Ampe</span>
      <span className="text-xs uppercase tracking-[0.25em] opacity-80">
        Play Now
      </span>
    </div>
  </button>

  <button
    className="group relative overflow-hidden bg-gradient-to-br from-purple-500 via-purple-600 to-pink-600 rounded-3xl text-white h-40 w-full max-w-sm font-bold shadow-2xl hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300"
  >
    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

    <div className="relative flex flex-col items-center justify-center h-full gap-2">
      <div className="text-4xl">🏍️</div>
      <span className="text-xl">Okada Rush</span>
      <span className="text-xs uppercase tracking-[0.25em] opacity-80">
        Play Now
      </span>
    </div>
  </button>
</div>

<div className="flex flex-col-3 items-center justify-center gap-8 py-4 px-4 text-center">
  <button
    className="group relative overflow-hidden bg-gradient-to-br from-yellow-500 to-indigo-800 rounded-3xl text-white h-40 w-full max-w-sm font-bold shadow-xl hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300"
  >
    <div className="relative flex flex-col items-center justify-center h-full gap-2">
      <div className="text-4xl">🚵🏽‍♂️</div>
      <span className="text-xl">Okada Rush River</span>
  
      <span className="text-xs uppercase tracking-[0.2em] mt-1">
        Play Now
      </span>
    </div>
  </button>

  <button
    className="group relative overflow-hidden bg-gradient-to-br from-indigo-500 to-indigo-800 rounded-3xl text-white h-40 w-full max-w-sm font-bold shadow-xl hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300"
  >
    <div className="relative flex flex-col items-center justify-center h-full gap-2">
      <div className="text-4xl">⚽️</div>
      <span className="text-xl">African Steet League</span>
     
      <span className="text-xs uppercase tracking-[0.2em] mt-1">
        Play Now
      </span>
    </div>
  </button>

  <button
    className="group relative overflow-hidden bg-gradient-to-br from-indigo-500 to-indigo-800 rounded-3xl text-white h-40 w-full max-w-sm font-bold shadow-xl hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300"
  >
    <div className="relative flex flex-col items-center justify-center h-full gap-2">
      <div className="text-4xl">🏀</div>
      <span className="text-xl">African Steet Hoops</span>
     
      <span className="text-xs uppercase tracking-[0.2em] mt-1">
        Play Now
      </span>
    </div>
  </button>
</div>

<div className="flex flex-col-3 items-center justify-center gap-8 py-20 px-4 text-center">
  <button
    className="group relative overflow-hidden bg-gradient-to-br from-indigo-500 to-indigo-800 rounded-3xl text-white h-40 w-full max-w-sm font-bold shadow-xl hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300"
  >
    <div className="relative flex flex-col items-center justify-center h-full gap-2">
      <div className="text-4xl">⏱️</div>
      <span className="text-xl">Makola Chrono</span>
      <span className="text-xs uppercase tracking-[0.2em] mt-1">
        Play Now
      </span>
    </div>
  </button>


   
</div>

     </div>
    </div>
  );
}
