import type { ImageWidget, RichText } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
    textContent?: RichText;
    image?: {
        src: ImageWidget;
        alt: string;
        width?: number;
        height?: number;
    };
    itemImages?: {
        src: ImageWidget;
        alt: string;
        width?: number;
        height?: number;
    }[]
}

function HeroBText({ image, textContent, itemImages }: Props) {
    return (
        <div id="vasos" class="relative xl:h-[581px] bg-[#fefcf2e5] 2xl:flex 2xl:h-[unset] 2xl:container 2xl:mx-auto">
            <Image
                src={image?.src ?? ''}
                alt={image?.alt}
                width={image?.width || 831}
                height={image?.height || 540}
                loading="lazy"
                decoding="async"
                class="xl:absolute 2xl:static left-0 top-[-80px] mx-auto rounded-tr-[20px] rounded-tl-[20px]"
            />
            <div class="container px-5 xl:px-0 h-full flex flex-col justify-end items-center xl:items-end mt-10 xl:mt-0 gap-8">
                <div class="flex flex-col align-baseline gap-7 xl:h-[581px] justify-end">
                    <span dangerouslySetInnerHTML={{ __html: textContent ?? '' }} />
                    <ul class="flex gap-2 items-end">    {itemImages?.map((item) => (
                        <li>  <Image
                            src={item?.src ?? ''}
                            alt={item?.alt}
                            width={item?.width || 150}
                            height={item?.height || 150}
                            loading="lazy"
                            decoding="async"
                            class=""
                        />
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HeroBText