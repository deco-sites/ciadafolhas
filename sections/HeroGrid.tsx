import { ImageWidget, RichText } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
    images?: {
        text: RichText
        href?: string;
        image?: ImageWidget;
        alt?: string;
        width?: number;
        height?: number;
    }[]
}

function HeroGrid({ images }: Props) {
    return (
        <div class="container my-8 lg:mt-32 lg:mb-36">
            <div>
                <ul class="flex flex-wrap justify-center gap-[75px]">
                    {images?.map((img) => (
                        <li class="flex flex-col gap-7">
                            <Image
                                src={img.image || ""}
                                alt={"Banners"}
                                height={img.height || 347}
                                width={img.width || 305}
                            />
                            <span dangerouslySetInnerHTML={{ __html: img.text }} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default HeroGrid