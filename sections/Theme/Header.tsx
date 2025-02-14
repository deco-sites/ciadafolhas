import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
    items?: {
        text?: string;
        link?: string;
        highlight?: boolean;
    }[];
    image: {
        url: ImageWidget;
        alt: string;
        width?: number;
        height?: number;
    };
}

function Header({ items, image }: Props) {
    return (
        <div class="navbar lg:!p-0 fixed top-6 w-full z-10">
            {/* Mobile View */}
            <div class="lg:hidden w-full">
                <div class="flex justify-between items-start w-full">
                    <Image
                        src={image.url}
                        alt={image.alt}
                        width={150}
                        height={150}
                        loading="eager"
                        decoding="async"
                        class="pl-2"
                    />
                    <div class="dropdown dropdown-end text-white bg-black">
                        <label tabIndex={0} class="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} class="dropdown-content menu p-4 shadow bg-[#F6F0D2E5] rounded-box w-52">
                            {items?.map((item) => (
                                <li>
                                    <a
                                        href={item.link}
                                        class={`text-[15px] ${item.highlight ? 'font-bold' : 'font-normal'} text-[#364C3F]`}
                                    >
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Desktop View */}
            <div class="hidden lg:flex w-full justify-between items-start">
                <Image
                    style={{
                        minHeight: image.height ? `${image.height}px` : "133px",
                    }}
                    src={image.url}
                    alt={image.alt}
                    width={image.width ?? 196}
                    height={image.height ?? 133}
                    loading="eager"
                    decoding="async"
                    class="pl-20"
                />
                <ul class="bg-[#F6F0D2E5] rounded-tl-[50px] rounded-bl-[50px] w-full max-w-[827px] flex items-center gap-6 h-fit py-3 px-11">
                    {items?.map((item) => (
                        <li>
                            <a
                                href={item.link}
                                class={`text-[15px] ${item.highlight ? 'font-bold' : 'font-normal'} text-[#364C3F] relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-[#364C3F] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left`}
                            >
                                {item.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Header;