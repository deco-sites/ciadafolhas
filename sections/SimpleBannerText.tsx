import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { asset } from "$fresh/runtime.ts";

interface Props {
    image?: {
        href?: string;
        image?: ImageWidget;
        alt?: string;
        width?: number;
        height?: number;
    }
    secondImage?: {
        image?: ImageWidget;
        alt?: string;
        width?: number;
        height?: number;
    }
    title?: string;
    textContent?: string;
}

function SimpleBannerText({ image, secondImage, title, textContent }: Props) {
    return (
        <div class="flex flex-col lg:flex-row gap-7 2xl:gap-16 relative">
            <img
                class="object-cover absolute right-0 hidden 2xl:block top-[-120px] z-10"
                src={asset("/plant-simple.png")}
                width={297}
                height={764}
                alt="Planta"
                loading="lazy"
            />
            <img
                class="object-cover absolute right-0 hidden lg:block 2xl:hidden top-5 z-10"
                src={asset("/plant-simple.png")}
                width={253}
                height={651}
                alt="Planta"
                loading="lazy"
            />
            <div class="relative w-fit">
                {image && (
                    <Image
                        src={image.image || ""}
                        alt={"Fundo de madeira listrado"}
                        height={image.height || 174}
                        width={image.width || 792}
                        class="rounded-br-[20px]"
                    />
                )}

                {secondImage && (
                    <><Image
                        src={secondImage.image || ""}
                        alt={"Folhas"}
                        height={secondImage.height || 406}
                        width={secondImage.width || 240}
                        class="absolute right-0 lg:right-[-50px] top-[-80px] z-10 hidden lg:block" /><Image
                            src={secondImage.image || ""}
                            alt={"Folhas"}
                            height={secondImage.height || 206}
                            width={secondImage.width || 140}
                            class="absolute right-0 lg:right-[-50px] top-0 z-10 lg:hidden" /></>
                )}
            </div>
            <div class="flex flex-col text-left text-[#144A2C] gap-2 px-4 lg:pl-0 2xl:pr-20 lg:justify-end">
                <h2 class="font-bold text-2xl lg:text-[35px] " dangerouslySetInnerHTML={{ __html: title ?? '' }}></h2>
                <span class="text-sm lg:text-[15px] font-normal" dangerouslySetInnerHTML={{ __html: textContent ?? '' }}></span>
            </div>
        </div>
    )
}

export default SimpleBannerText