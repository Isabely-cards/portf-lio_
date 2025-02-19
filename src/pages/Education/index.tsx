import { FaRegCalendarAlt } from "react-icons/fa";

export default function Education() {
    return (
        <div className="w-full h-full flex justify-center bg-black text-white">
            <div className="flex flex-col justify-center items-center text-center gap-4 w-[80%]">
                <h2 className="text-center relative mt-[4rem]">Minha <span className="text-prominence">Jornada</span></h2>
                <div className="flex mt-12 mb-8 justify-start text-start items-start flex-col p-4 md:justify-evenly md:items-center md:flex-row md:gap-[10%]">
                    <div >
                        <h3 className="mb-4">Experiências</h3>
                        <div className="flex flex-col gap-4 border-l-2 relative before:content-normal before:absolute before:top-0 before:left-[-1.1rem] before:w-[2rem] before:h-[2rem] before:bg-white before:rounded-[50%]">
                            <div className="pl-5">
                                <div className="border-2 rounded-md p-4 flex flex-col gap-4 hover:bg-[#80008042] transition duration-500">
                                    <span className="flex items-center gap-4 text-prominence"><FaRegCalendarAlt /> 02/24 - atual</span>
                                    <h3 className="font-bold">Desenvolvedora front-end - Estágio na SQAD</h3>
                                    <p>Atuo como desenvolvedora front-end, sendo responsável por criar e manter interfaces de usuário eficientes, responsivas e intuitivas. Trabalho diretamente com tecnologias como React, JavaScript, Tailwind, TypeScript e MUI</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" mt-4 md:mt-0">
                        <h3 className="mb-4">Educação</h3>
                        <div className="flex flex-col gap-4 border-l-2 relative before:content-normal before:absolute before:top-0 before:left-[-1.1rem] before:w-[2rem] before:h-[2rem] before:bg-white before:rounded-[50%]">
                            <div className="pl-5">
                                <div className="border-2 rounded-md p-4 flex flex-col gap-4 hover:bg-[#80008042] transition duration-500">
                                    <span className="flex items-center gap-4 text-prominence"><FaRegCalendarAlt /> 01/2022 - 12/2025</span>
                                    <h3 className="font-bold">Sistemas de informação - Faculdade Eniac</h3>
                                    <p>Graduação focada em desenvolvimento de software, banco de dados, redes e segurança da informação.</p>
                                </div>
                            </div>
                            <div className="pl-5">
                                <div className="border-2 rounded-md p-4 flex flex-col gap-4 hover:bg-[#80008042] transition duration-500">
                                    <span className="flex items-center gap-4 text-prominence"><FaRegCalendarAlt /> 01/2024 - 10/2024</span>
                                    <h3 className="font-bold">Formação: Gerencie aplicações React com Typescript - Alura</h3>
                                    <p>Curso que abrange conceitos fundamentais do React e TypeScript, incluindo a construção de componentes com TypeScript, utilização do React Router para navegação, integração de APIs, gerenciamento de estado com Recoil, otimização de performance e práticas de teste de componentes. A formação proporciona uma compreensão abrangente da criação de aplicações web robustas e escaláveis, capacitando o desenvolvedor a aplicar conhecimentos de forma eficaz em projetos reais.</p>
                                </div>
                            </div>
                            <div className="pl-5">
                                <div className="border-2 rounded-md p-4 flex flex-col gap-4 hover:bg-[#80008042] transition duration-500">
                                    <span className="flex items-center gap-4 text-prominence"><FaRegCalendarAlt /> 10/2024 - 11/2024</span>
                                    <h3 className="font-bold">
                                        UI para Devs: construa interfaces atraentes com fundamentos do designr - Alura
                                    </h3>
                                    <p>Neste curso, aprendi a iniciar o planejamento de projetos, reunir referências visuais e inserir elementos externos em aplicações. Comecei a codificar, posicionando elementos de forma eficaz e implementando melhorias para otimizar a experiência do usuário e a performance do projeto.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}