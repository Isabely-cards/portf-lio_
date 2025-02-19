import { Modal } from "@mui/material";
import Button from "../../components/core/Button";
import { useState } from "react";

export default function About() {
    const [openModal, setOpenModal] = useState(false)
    return (
        <div className="w-full h-screen bg-purple-50 flex justify-center">
            <div className="flex flex-col justify-center items-center text-center gap-4 w-[80%]">
                <h2 className="text-center relative">Sobre <span className="text-primary">mim</span></h2>
                <div className="about-img">
                    <img className="w-[10rem]" alt="imagem de um avatar fazendo o sinal de ok" src="/public/img/desenho.png" />
                    <span className="circle-spin"></span>
                    <span className="animate"  style={{ "--i": 3 } as React.CSSProperties}></span>
                </div>
                <h3 className="font-bold">Desenvolvedora Front-end!</h3>
                <p className="text-center">
                    Desde pequena, sempre fui a pessoa da família a quem recorriam para criar banners, mexer com design ou resolver questões no computador...</p>
                <div className="w-[50%] mb-10 smart:w-[10rem]">
                    <Button className="button2" onClick={() => setOpenModal(!openModal)}>
                        Leia mais
                    </Button>
                </div>
            </div>
            <Modal className="flex justify-center items-center flex-col" open={openModal} onClose={() => setOpenModal(!openModal)}>
                <div className=" p-4 w-[80%] bg-white rounded-md flex flex-row-reverse justify-center items-center">
                    {/* <span onClick={() => setOpenModal(!openModal)} className="relative top-[-220px] text-[2rem] cursor-pointer">x</span> */}
                    <p className="text-center mt-6">
                    Meu interesse pela área começou cedo, e, ao completar 18 anos, decidi transformá-lo em uma carreira ao ingressar no curso de Sistemas de Informação. Desde então, tenho buscado constantemente evoluir e aprimorar minhas habilidades. Já concluí cursos na plataforma Alura em React, Tailwind, JavaScript e outras tecnologias. Estou sempre disposta a aprender, enfrentar novos desafios e crescer tanto profissionalmente quanto pessoalmente.                    </p>
                </div>
            </Modal>
        </div>
    )
}