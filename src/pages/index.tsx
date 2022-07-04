import { useState } from "react";
import { useForm } from "react-hook-form";
import type { NextPage } from "next";

const memes = [
  {
    id: 1,
    url: 'https://static.wikia.nocookie.net/meme/images/d/d5/Swag_Cat.jpg',
  },
  {
    id: 2,
    url: 'https://i.pinimg.com/originals/f1/23/05/f1230501d33cb2c6055b2d6ea221a22d.jpg',
  },
  {
    id: 3,
    url: 'https://i.pinimg.com/736x/67/f8/53/67f8532cdd1e3a69c5efa4f1aebf9336.jpg',
  },
  {
    id: 4,
    url: 'https://imgflip.com/s/meme/Cute-Cat.jpg',
  },
  {
    id: 5,
    url: 'https://cdn.cgn.inf.br/cgn-cdn/fotos-cgn/2021/12/22154638/Chloe.jpg'
  }
]

const Home: NextPage = () => {
  const [stories, setStories] = useState(
    `/api/stories?title=Eu vendo os filhos da visita mexendo nas minhas coisas&image=https://cdn.cgn.inf.br/cgn-cdn/fotos-cgn/2021/12/22154638/Chloe.jpg`
  );
  const [capa, setCapa] = useState('https://cdn.cgn.inf.br/cgn-cdn/fotos-cgn/2021/12/22154638/Chloe.jpg')
  const [viewStories, setViewStories] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function handleGerateStories(data: any) {
    if (!data.title) return;
    if (!data.capa) return;

    setStories(`/api/stories?title=${data.title}&image=${capa}`);
    setViewStories(true);
  }

  return (
    <div className="dark:bg-[#1A1D1E] flex flex-col justify-center items-center pb-40">
      <div className="p-[1.25rem] w-full flex gap-3 justify-center items-center border-b-2 border-[#2B2F31]">
        <img src="/favicon.png" alt="" className="w-[1.5rem]" />
        <img src="/logo.png" alt="" className="w-[12rem]" />
      </div>
      <div className="md:w-[1000px] gap-2 h-[100%] md:flex mt-5">
        <form
          onSubmit={handleSubmit(handleGerateStories)}
          className="p-6 md:w-full border-[#2B2F31] m-2 rounded-md bg-[#202425] border-[0.05rem]"
        >
          <div className="flex flex-col gap-5">
            <span className="text-[#9BA1A6] ml-2">Escreva o texto da imagem </span>
            <textarea
              {...register("title", { required: true })}
              className="rounded-md bg-transparent border-[#313538] text-[#ECEDEE]"
            />
            <input
              type="text"
              {...register("capa", { required: true })}
              value="https://cdn.cgn.inf.br/cgn-cdn/fotos-cgn/2021/12/22154638/Chloe.jpg"
              hidden
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <span className="text-[#9BA1A6] ml-2">Seleciona uma imagem abaixo</span>
            <div className="flex gap-3">
              {
                memes.map((meme: any) => {
                  return (
                    <button key={meme.id} onClick={() => setCapa(meme.url)}>
                      <img src={meme.url} className="w-[100px] h-[70px] md:h-[100px]" />
                    </button>
                  )
                })
              }
            </div>
            <button
              type="submit"
              className="bg-[#0091FF] hover:bg-[#0091FF]/80 text-white font-bold p-2 rounded-md"
            >
              Gerar Stories
            </button>
          </div>
        </form>

        <div className="p-6 md:w-[450px] border-[#2B2F31] m-2 rounded-md  bg-[#202425] border-[0.05rem] text-center flex flex-col items-center gap-4">
          <span className="text-[#9BA1A6] ml-2 "> Modelo de Stories </span>
          <img src={stories} className="h-[500px] rounded-sm" />
          <a
            href={stories}
            download
            className="bg-[#0091FF] w-full hover:bg-[#0091FF]/80 text-white font-bold p-2 rounded-md"
          >
            Baixar
          </a>
        </div>
      </div>
      <div className="text-center text-[#9BA1A6]">
        <p>
          Projeto desenvolvido por
          <a href="https://www.linkedin.com/in/emersongarrido/">
            <b>Emerson Garrido</b>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
