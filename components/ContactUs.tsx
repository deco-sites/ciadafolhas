import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { useRef, useState } from 'preact/hooks';

interface Props {
    image?: {
        image?: ImageWidget;
        alt?: string;
        width?: number;
        height?: number;
    }
    contact?: {
        icon?: ImageWidget;
        width?: number;
        height?: number;
        text?: string;
    }[]
}

function ContactUs({ image, contact }: Props) {
    const form = useRef<HTMLFormElement | null>(null);
    const [success, setSuccess] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: name,
            email: email,
            message: message
        };

        // @ts-ignore
        window.emailjs
            .send('service_ojtnecf', 'template_rp5mhgq', templateParams, "NGHDDaHUxSaMidKvD")
            .then(
                () => {
                    setName('');
                    setEmail('');
                    setMessage('');
                    setSuccess(true)
                },
                () => {
                    console.log('FAILED...');
                },
            );
    };
    return (
        <div id="contactus" class="flex flex-col sm:flex-row mb-28 mt-10 sm:mt-32">
            {image && <Image
                src={image.image || ""}
                alt={"Telefone"}
                height={image.height || 365}
                width={image.width || 445}
                class="mr-[60px]"
            />
            }
            <div class="flex items-center justify-center w-full lg:gap-2 xl:gap-12 2xl:gap-28 flex-wrap">
                <div className="flex flex-col gap-[10px] p-6 w-full max-w-[413px]">
                    <h2 className="text-2xl lg:text-[35px] font-bold text-[#144A2C] mb-[18px]">Fale com<br /> a gente</h2>
                    <form className="flex flex-col gap-[10px]" ref={form} onSubmit={sendEmail}>
                        <input
                            type="text"
                            placeholder="Nome"
                            className="w-full p-4 bg-[#EFF4DCB2] text-[#144A2C] text-base rounded-md border border-transparent focus:border-green-400 focus:ring focus:ring-green-200"
                            value={name}
                            onChange={(e) => setName((e.target as HTMLInputElement).value)}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-4 bg-[#EFF4DCB2] text-[#144A2C] text-base rounded-md border border-transparent focus:border-green-400 focus:ring focus:ring-green-200"
                            value={email}
                            onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
                        />
                        <textarea
                            placeholder="Escreva sua mensagem"
                            className="w-full p-4 bg-[#EFF4DCB2] text-[#144A2C] text-base rounded-md border border-transparent focus:border-green-400 focus:ring focus:ring-green-200 h-32"
                            value={message}
                            onChange={(e) => setMessage((e.target as HTMLInputElement).value)}
                        ></textarea>
                        <button
                            className="w-full p-3 rounded-bl-[20px] rounded-tr-[20px] text-white font-medium transition
                           bg-gradient-to-r from-[#AFC1AB] to-[#658F47] 
                           shadow-[1px_2px_5px_rgba(174,192,171,0.67),5px_8px_9px_rgba(174,192,171,0.58)]
                           hover:brightness-110 mt-3 max-w-[181px] ml-auto"
                            type="submit"
                        >
                            Enviar
                        </button>
                        {success && <span className="text-right text-[#144A2C]">Enviado com sucesso</span>}
                    </form>
                </div>
                <ul class="flex flex-col justify-center gap-6">
                    {contact?.map((cont) => (
                        <li class="flex items-center gap-3">
                            {cont && <Image
                                src={cont.icon || ""}
                                alt={cont.text}
                                height={cont.height || 37}
                                width={cont.width || 38}
                                class=""
                            />
                            }
                            <span class="text-[#144A2C] text-sm lg:text-base xl:text-[22px] font-normal" dangerouslySetInnerHTML={{ __html: cont.text ?? '' }}></span></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ContactUs;
