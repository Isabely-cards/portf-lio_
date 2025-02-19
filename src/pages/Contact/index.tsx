import { useState } from "react";
import emailjs from 'emailjs-com';
import Button from "../../components/core/Button";
import { toast } from "react-toastify";
import InputMask from 'react-input-mask'; // Importa a biblioteca

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '', number: '', assunto: '' });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('form', form)

        // emailjs
        //     .send(
        //         'gmailMessage',
        //         'template_k18a98k',
        //         form,
        //         '7FbrkQJYwx7P8Zl1K'
        //     )
        //     .then(
        //         (result) => {
        //             toast.success("E-mail enviado com sucesso!", {
        //                 position: "top-right",
        //             });
        //         },
        //         (error) => {
        //             toast.error("Falha ao enviar e-mail.", {
        //                 position: "top-right",
        //             });
        //         }
        //     );
    };
    return (
        <div className="flex w-full h-screen backgroundLinear">
            <div className="flex justify-center w-full">

                <div className="w-[80%] flex justify-center flex-col md:w-[40rem] ">
                    <h2 className="font-bold mt-[2rem] text-black text-center relative top-[-8rem] ">Entre em contato <span className="text-prominence">comigo</span></h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-[2rem]  md:justify-center ">
                        <div className="flex flex-col gap-4 md:justify-between md:flex-row">
                            <div className="flex flex-col gap-4 md:w-full">
                                <input name="name"
                                    required
                                    value={form.name}
                                    onChange={handleChange} className="border-black placeholder:text-gray-600 border-2 rounded-md bg-transparent w-full p-2 focus:border-prominence" type="text" placeholder="Seu nome" />
                                 <InputMask
                                    name="number"
                                    required
                                    mask="(99) 99999-9999"
                                    value={form.number}
                                    onChange={handleChange}
                                    className="border-black placeholder:text-gray-600 border-2 rounded-md bg-transparent w-full p-2 focus:border-prominence"
                                    placeholder="Seu número" 
                                />
                            </div>
                            <div className="flex flex-col gap-4 md:w-full">
                                <input 
                                    name="email"
                                    required
                                    value={form.email}
                                    onChange={handleChange} className="border-black placeholder:text-gray-600 border-2 rounded-md bg-transparent w-full p-2 focus:border-prominence" type='email' placeholder="Seu e-mail" />
                                <input name="assunto"
                                    required
                                    value={form.assunto}
                                    onChange={handleChange} className="border-black placeholder:text-gray-600 border-2 rounded-md bg-transparent w-full p-2 focus:border-prominence" type="text" placeholder="Assunto do email" />
                            </div>
                        </div>
                        <div>
                            <input name="message"
                                required
                                value={form.message}
                                onChange={handleChange} className="border-black placeholder:text-gray-600 border-2 rounded-md bg-transparent w-full pl-2 h-[10rem] flex justify-center placeholder:flex-wrap focus:border-prominence" type="text" placeholder="Sua mensagem" />
                        </div>
                        <div className="w-full flex justify-center">
                            <div className="w-full smart:w-[15rem]">
                                <Button type="submit" className="">
                                    Enviar
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}