import { ImageWidget, RichText } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Slider from "../components/SliderImages/Slider.tsx";
import SliderJS from "../islands/newSliderJS.tsx";
import { useId } from "../sdk/useId.ts";
import { asset } from "$fresh/runtime.ts";

interface Props {
    textContent?: RichText;
    images?: {
        href?: string;
        image?: ImageWidget;
        alt?: string;
        width?: number;
        height?: number;
    }[]
    colorsImages?: ImageWidget[];
    /**
* @title Autoplay interval
* @description time (in seconds) to start the carousel autoplay
*/
    interval?: number;
}

function HeroColors({ textContent, images, colorsImages, interval }: Props) {
    const id = useId();
    const containerPaddings = 642 + 74;
    if (!images || images.length === 0) {
        return null;
    }
    const hasManyItems = images.length > 1;
    return (
        <div style={{
            height: `${containerPaddings}px`
        }} class="relative px-4 xl:px-0 mt-10 xl:mt-[74px] flex flex-col justify-center items-center heightUnset xl:block">
            <div id={id} class="flex items-center justify-center xl:absolute right-0 top-0 w-fit">
                <Slider class="carousel carousel-center w-full col-span-full row-span-full scrollbar-none gap-6">
                    {images?.map((image, index) => (
                        <Slider.Item index={index} class="carousel-item w-full justify-end">
                            <Image
                                src={image.image || ""}
                                alt={image.alt || ""}
                                height={image.height || 642}
                                width={image.width || 963}
                            />
                        </Slider.Item>
                    ))}
                </Slider>

                {hasManyItems && <div class="max-w-[963px] ml-auto w-full absolute h-[50px] right-0">
                    <div class="absolute flex items-center justify-center z-10 left-7 w-[50px] h-[50px]">
                        <Slider.PrevButton class="text-white text-[30px]">
                            ❮
                        </Slider.PrevButton>
                    </div>
                    <div class="absolute flex items-center justify-center z-10 right-7 w-[50px] h-[50px]">
                        <Slider.NextButton class="text-white text-[30px]">
                            ❯
                        </Slider.NextButton>
                    </div>
                </div>}

                <SliderJS rootId={id} interval={interval && interval * 1e3} infinite />
            </div>
            <img
                class="object-cover absolute top-2/4 xl:top-[unset] right-0 bottom-0 hidden lg:block"
                src={asset("/planta-deitada.svg")}
                width={636}
                height={166}
                alt="Plantas"
                loading="lazy"
            />
            <div class="container h-full relative">
                <ul class="flex my-8 xl:my-0 items-center gap-[9px] container xl:!max-w-fit xl:absolute bottom-[5%] left-[20%] xl:left-0 2xl:left-[20%]">
                    {colorsImages?.map((color) => (
                        <li>        <Image
                            src={color || ""}
                            alt={"Cor"}
                            height={112}
                            width={112}
                        /></li>
                    ))}
                </ul>
                <div class="flex items-center justify-center xl:justify-normal gap-10 h-full">
                    <span dangerouslySetInnerHTML={{ __html: textContent ?? '' }} />
                </div>
            </div>
        </div>
    )
}

export default HeroColors