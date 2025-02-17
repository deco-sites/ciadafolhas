import { ImageWidget, RichText } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { asset } from "$fresh/runtime.ts";

interface Props {
    textContent?: RichText;
    image?: {
        src?: ImageWidget;
        alt?: string;
        width?: number;
        height?: number;
    }
    imageUnder?: {
        src?: ImageWidget;
        alt?: string;
        width?: number;
        height?: number;
    }
}

function HeroManyBanners({ textContent, image, imageUnder }: Props) {

    const containerPaddings = 722
    return (
        <div style={{
            minHeight: `${containerPaddings}px`
        }}
            class="relative bg-[#fefcf2e5] py-16">
            <img
                class="hidden absolute left-0 object-contain w-auto max-h-[654px]"
                src={asset("/hero-many-banners.svg")}
                width={623}
                height={654}
                alt="Vaso decorativo"
                loading="lazy"
            />
            <div class="xl:absolute right-0 flex flex-col xl:flex-row gap-5 xl:w-[956px] xl:h-[614px]">
                <Image
                    style={{
                        minWidth: `${image?.width ? image?.width : '478'}px`,
                        minHeight: `${image?.height ? image?.height : '614'}px`,
                        maxHeight: `${image?.height ? image?.height : '614'}px`
                    }}
                    src={image?.src ?? ''}
                    alt={image?.alt}
                    width={image?.width || 478}
                    height={image?.height || 614}
                    loading="lazy"
                    decoding="async"
                    class="w-auto xl:absolute right-[25%] maxWidth z-20"
                />
                <Image
                    style={{
                        minWidth: `${imageUnder?.width ? imageUnder?.width : '478'}px`,
                        minHeight: `${imageUnder?.height ? imageUnder?.height : '614'}px`,
                        maxHeight: `${imageUnder?.height ? imageUnder?.height : '614'}px`
                    }}
                    src={imageUnder?.src ?? ''}
                    alt={imageUnder?.alt}
                    width={imageUnder?.width || 478}
                    height={imageUnder?.height || 614}
                    loading="lazy"
                    decoding="async"
                    class="w-auto top-[-51px] xl:absolute right-0 maxWidth"
                />
            </div>
            <div class="container mt-7 xl:mt-0">
                <div class="flex gap-5 justify-center xl:justify-normal px-5 xl:px-0" >
                    <span dangerouslySetInnerHTML={{ __html: textContent ?? '' }} />
                </div>
            </div>
        </div>
    )
}

export default HeroManyBanners