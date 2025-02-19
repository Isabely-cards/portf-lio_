export default function Skills() {
    return (
        <div className="w-full h-full flex flex-col items-center md:justify-center bg-purple-50">
            <div className="top-[1rem] mt-[1rem] relative">
                <h2 className="text-center p-6">Minhas <span className="text-primary">Habilidades</span></h2>
            </div>
            <div className="w-[80%] mt-14 mb-12 flex flex-col justify-center md:justify-around md:flex-row md:gap-[20%] md:items-center">
                <div className="w-full">
                    <h3 className="uppercase font-bold">Habilidades de codificação</h3>
                    <div className="border-2 p-4 rounded-md flex flex-col gap-10">
                        <div>
                            <p className="flex justify-between">
                                HTML
                                <span>90%</span>
                            </p>
                            <div className="flex items-center w-full h-[2rem] border-2 border-primary p-1 rounded-xl">
                                <div className="w-[90%] h-[1rem] bg-primary rounded-xl"></div>
                            </div>
                        </div>
                        <div>
                            <p className="flex justify-between">
                                CSS
                                <span>85%</span>
                            </p>
                            <div className="flex items-center w-full h-[2rem] border-2 border-primary p-1 rounded-xl">
                                <div className="w-[85%] h-[1rem] bg-primary rounded-xl"></div>
                            </div>
                        </div>
                        <div>
                            <p className="flex justify-between">
                                JavaScript
                                <span>80%</span>
                            </p>
                            <div className="flex items-center w-full h-[2rem] border-2 border-primary p-1 rounded-xl">
                                <div className="w-[80%] h-[1rem] bg-primary rounded-xl"></div>
                            </div>
                        </div>
                        <div>
                            <p className="flex justify-between">
                                TypeScript
                                <span>75%</span>
                            </p>
                            <div className="flex items-center w-full h-[2rem] border-2 border-primary p-1 rounded-xl">
                                <div className="w-[75%] h-[1rem] bg-primary rounded-xl"></div>
                            </div>
                        </div>
                        <div>
                            <p className="flex justify-between">
                                React
                                <span>80%</span>
                            </p>
                            <div className="flex items-center w-full h-[2rem] border-2 border-primary p-1 rounded-xl">
                                <div className="w-[80%] h-[1rem] bg-primary rounded-xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 md:mt-0 w-full">
                    <h3 className="uppercase font-bold">Competências profissionais</h3>
                    <div className="border-2 p-4 rounded-md flex flex-col gap-10">
                        <div>
                            <p className="flex justify-between">
                                Trabalho em equipe
                                <span>90%</span>
                            </p>
                            <div className="flex items-center w-full h-[2rem] border-2 border-primary p-1 rounded-xl">
                                <div className="w-[90%] h-[1rem] bg-primary rounded-xl"></div>
                            </div>
                        </div>
                        <div>
                            <p className="flex justify-between">
                                Resolução de problemas
                                <span>85%</span>
                            </p>
                            <div className="flex items-center w-full h-[2rem] border-2 border-primary p-1 rounded-xl">
                                <div className="w-[85%] h-[1rem] bg-primary rounded-xl"></div>
                            </div>
                        </div>
                        <div>
                            <p className="flex justify-between">
                                Comunicação
                                <span>80%</span>
                            </p>
                            <div className="flex items-center w-full h-[2rem] border-2 border-primary p-1 rounded-xl">
                                <div className="w-[80%] h-[1rem] bg-primary rounded-xl"></div>
                            </div>
                        </div>
                        <div>
                            <p className="flex justify-between">
                                Gerenciamento de tempo
                                <span>75%</span>
                            </p>
                            <div className="flex items-center w-full h-[2rem] border-2 border-primary p-1 rounded-xl">
                                <div className="w-[75%] h-[1rem] bg-primary rounded-xl"></div>
                            </div>
                        </div>
                        <div>
                            <p className="flex justify-between">
                                Adaptabilidade
                                <span>80%</span>
                            </p>
                            <div className="flex items-center w-full h-[2rem] border-2 border-primary p-1 rounded-xl">
                                <div className="w-[80%] h-[1rem] bg-primary rounded-xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
