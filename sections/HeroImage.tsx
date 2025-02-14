import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { asset } from "$fresh/runtime.ts";

interface Props {
    image?: {
        image?: ImageWidget;
        alt?: string;
        width?: number;
        height?: number;
    }
}

function HeroImage({ image }: Props) {
    return (
        <div class="relative mt-10 lg:mt-16">
            <div class="container px-4 lg:pr-10">
                {image && (
                    <><Image
                        src={image.image || ""}
                        alt={"Explicativo das plantas"}
                        height={image.height || 796}
                        width={image.width || 1171}
                        class="hidden lg:block mx-auto" /><Image
                            src={image.image || ""}
                            alt={"Explicativo das plantas"}
                            height={image.height || 296}
                            width={image.width || 571}
                            class="lg:hidden" /></>

                )}
            </div>
            <img
                class="object-cover absolute left-0 top-5 hidden lg:block"
                src={asset("/folhas_esquerda.png")}
                width={216}
                height={1128}
                alt="Galho de folhas"
                loading="lazy"
            />
            <img
                class="object-cover absolute left-0 top-5 hidden"
                src={asset("/folhas_esquerda.png")}
                width={116}
                height={428}
                alt="Galho de folhas"
                loading="lazy"
            />
        </div>
    )
}

export default HeroImage