import { useState } from 'react';
import { useForm } from "react-hook-form";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const [stories, setStories] = useState(`/api/stories?title=Eu vendo os filhos da visita mexendo nas minhas coisas&image=https://cdn.cgn.inf.br/cgn-cdn/fotos-cgn/2021/12/22154638/Chloe.jpg`);
  const [viewStories, setViewStories] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function handleGerateStories(data: any) {

    if (!data.title) return;
    if (!data.capa) return;

    setStories(`/api/stories?title=${data.title}&image=${data.capa}`);
    setViewStories(true)
  }

  return (
    <div className="dark:bg-dark flex justify-center items-center pb-40">
      <div className="w-[700px] h-[100%]">
        <div className="text-center pt-10">
          <h1 className="font-light text-white text-2xl">Gerar <b className="font-bold">Stories.com.br</b></h1>
        </div>

        <form onSubmit={handleSubmit(handleGerateStories)} className="p-6 border-white/10 m-5 rounded-xl border-[0.05rem]">
          <div className="flex flex-col gap-5">
            <span className="text-white ml-2">Escreva o texto </span>
            <textarea  {...register("title", { required: true })} className="rounded-md text-black" />
            <input type="text"  {...register("capa", { required: true })} value="https://cdn.cgn.inf.br/cgn-cdn/fotos-cgn/2021/12/22154638/Chloe.jpg" hidden />
            {errors.exampleRequired && <span>This field is required</span>}
            <button type="submit" className="bg-white hover:bg-slate-100 text-black font-bold p-2 rounded-full">Gerar Stories</button>
          </div>
        </form>

        <div className="p-6 border-white/10 m-5 rounded-xl border-[0.05rem] text-center flex flex-col items-center gap-3">
          <span className="text-white ml-2 "> Modelo de Stories </span>
          <img src={stories} className="h-[500px] rounded-md" />
          <a href={stories} download className="bg-white w-[250px] hover:bg-slate-100 text-black font-bold p-2 rounded-full">Baixar</a>
        </div>

        <div className="text-center text-white"><p>Projeto desenvolvido por <b>Emerson Garrido</b></p></div>
      </div>
    </div>
  );
};

export default Home;
