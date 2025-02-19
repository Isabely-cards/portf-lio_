import { IoLogoGithub, IoLogoInstagram } from "react-icons/io";
import Button from "../../components/core/Button";

export default function Home() {

  const clickButton = () => {
    window.location.href = 'https://wa.me/5511986686027';
  };
  
  return (
    <section className="bg-background bg-cover bg-no-repeat w-full h-screen flex justify-center pl-5 pr-5 ">
      <div className="flex flex-col justify-center items-start text-white">
        <div className=" p-4 flex flex-col gap-6 smart:w-[80%]">
          <h2 className="font-bold text-lg">Oi, eu sou a Isabely Cardoso</h2>
          <div className="text-animate">
            <h3 className="">Desenvolvedora Front-end</h3>
            <span className="animate" style={{ "--i": 3 } as React.CSSProperties}></span>
            </div>
          <p>
          Sou uma desenvolvedora front-end apaixonada por criar interfaces dinâmicas, intuitivas e acessíveis. Estou sempre em busca de aprender e implementar as melhores práticas em desenvolvimento web. Meu objetivo é transformar ideias em experiências digitais que encantem os usuários e atendam às necessidades do projeto.
          </p>
          <div className="w-full smart:w-[15rem]">
            <Button onClick={clickButton} className="">
              Vamos conversar?
            </Button>
          </div>
          <div className="flex items-center bottom-[-7rem] relative">
            <a href="https://www.instagram.com/bel_cards/" target="_blank" rel="noopener noreferrer" className="mt-2 mr-4 border-2 p-2 rounded-full transition duration-500 border-white text-lg cursor-pointer hover:bg-primary hover:border-primary">
              <IoLogoInstagram size={30} />
            </a>
            <a href="https://github.com/Isabely-cards" target="_blank" rel="noopener noreferrer" className="mt-2 mr-4 border-2 p-2 rounded-full transition duration-500 border-white text-lg cursor-pointer hover:bg-primary hover:border-primary">
              <IoLogoGithub size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
