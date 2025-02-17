import type { ImageWidget, RichText } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
    title?: string;
    image?: {
        src: ImageWidget;
        alt: string;
        width?: number;
        height?: number;
    }
    leftTextItems?: RichText[];
    rightTextItems?: RichText[];
}

function HeroMidBanner({ title, image, leftTextItems, rightTextItems }: Props) {
    return (
        <div class="bg-[#fefcf2e5] pt-[128px]">
            <div class="container">
                <span class="text-[35px] text-center block w-full text-[#144A2C]" dangerouslySetInnerHTML={{ __html: title ?? '' }} />
                <div class="flex flex-col lg:flex-row items-center justify-center gap-[50px] mt-[60px]">
                    <ul class="flex flex-col gap-[70px]">
                        {leftTextItems?.map((left) => (
                            <li><span dangerouslySetInnerHTML={{ __html: left ?? '' }} /></li>
                        ))}
                    </ul>
                    <Image
                        src={image?.src ?? ''}
                        alt={image?.alt}
                        width={image?.width || 498}
                        height={image?.height || 677}
                        loading="lazy"
                        decoding="async"
                        class=""
                    />
                    <ul class="flex flex-col gap-[70px]">
                        {rightTextItems?.map((right) => (
                            <li><span dangerouslySetInnerHTML={{ __html: right ?? '' }} /></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HeroMidBanner