import { useState } from 'react';
import type { NextPage } from "next";

const Home: NextPage = () => {
  const [stories, setStories] = useState('');
  const [viewStories, setViewStories] = useState(false);

  return (
    <div className="dark:bg-dark flex justify-center items-center">
      <div className="w-[700px] h-[100vh]">
        <div className="text-center pt-10">
          <h1 className="font-light text-white text-2xl">Gerador de <b className="font-bold">Stories.com</b></h1>
        </div>

        <form className="p-6 border-white/10 m-5 rounded-xl border-[0.05rem]">
          <div className="flex flex-col gap-5">
            <span className="text-white ml-2">Escreva o texto </span>
            <textarea className="rounded-md" />
            <button className="bg-white hover:bg-slate-100 text-black font-bold p-2 rounded-full">Gerar Stories</button>
          </div>
        </form>

        <div className="p-6 border-white/10 m-5 rounded-xl border-[0.05rem] text-center flex flex-col items-center gap-3">
          <span className="text-white ml-2 ">Escreva o texto </span>
          <img src="/image.png" />
        </div>
      </div>
    </div>
  );
};

export default Home;
