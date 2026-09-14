import { useState } from "react";

function App() {
  const [color, setColor] = useState("#1E293B");

  return (
    <div
      className="h-screen flex flex-col justify-evenly items-center duration-200"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-5xl font-bold underline text-white ">
        Background Changer
      </h1>
      <div
        className="flex justify-evenly items-center 
    flex-wrap gap-[20px] bg-white p-2 rounded-3xl"
      >

        <button
          onClick={() => setColor("#e7000b")}
          className="text-white text-2xl bg-red-600 outline-none 
      rounded-2xl shadow-md shadow-zinc-900 px-[20px]"
        >
          Red
        </button>
        <button
          onClick={() => setColor("#f54900")}
          className="text-white text-2xl bg-orange-600 outline-none 
      rounded-2xl shadow-md shadow-zinc-900 px-[20px]"
        >
          Orange
        </button>
        <button
          onClick={() => setColor("#d08700")}
          className="text-white text-2xl bg-yellow-600 outline-none 
      rounded-2xl shadow-md shadow-zinc-900 px-[20px]"
        >
          Yellow
        </button>
        <button
          onClick={() => setColor("#00a63e")}
          className="text-white text-2xl bg-green-600 outline-none 
      rounded-2xl shadow-md shadow-zinc-900 px-[20px]"
        >
          Green
        </button>
        <button
          onClick={() => setColor("#009689")}
          className="text-white text-2xl bg-teal-600 outline-none 
      rounded-2xl shadow-md shadow-zinc-900 px-[20px]"
        >
          Teal
        </button>
        <button
          onClick={() => setColor("#155dfc")}
          className="text-white text-2xl bg-blue-600 outline-none 
      rounded-2xl shadow-md shadow-zinc-900 px-[20px]"
        >
          Blue
        </button>
        <button
          onClick={() => setColor("#9810fa")}
          className="text-white text-2xl bg-purple-600 outline-none 
      rounded-2xl shadow-md shadow-zinc-900 px-[20px]"
        >
          Purple
        </button>
        <button
          onClick={() => setColor("#f6339a")}
          className="text-white text-2xl bg-pink-600 outline-none 
      rounded-2xl shadow-md shadow-zinc-900 px-[20px]"
        >
          Pink
        </button>
        <button
          onClick={() => setColor("#4a5565")}
          className="text-white text-2xl bg-gray-600 outline-none 
      rounded-2xl shadow-md shadow-zinc-900 px-[20px]"
        >
          Gray
        </button>
        <button
          onClick={() => setColor("#594c5b")}
          className="text-white text-2xl bg-mauve-600 outline-none 
      rounded-2xl shadow-md shadow-zinc-900 px-[20px]"
        >
          Mauve
        </button>
      </div>
    </div>
  );
}

export default App;
