import { ImageWidget, RichText } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { useId } from "preact/hooks";
import SliderJS from "../islands/newSliderJS.tsx";
import Slider from "../components/SliderImages/Slider.tsx";

interface Props {
    interval?: number;
    textContent?: RichText[];
    image?: {
        image?: ImageWidget;
        alt?: string;
        width?: number;
        height?: number;
    }
}

function AboutUs({ interval, textContent, image }: Props) {
    const id = useId();

    const containerPaddings = 789;

    return (
        <div style={{
            height: `${containerPaddings}px`
        }} class="relative px-5 2xl:px-0">
            <Image
                src={image?.image || ""}
                alt={image?.alt || ""}
                height={image?.height || 703}
                width={image?.width || 677}
                class="hidden lg:block absolute right-0 object-contain w-auto z-20 max-h-[703px]"
            />
            <span class="text-[#E6EDCE4D] text-[130px] lg:text-[400px] xl:text-[500px] absolute left-0 lg:left-[-120px] bottom-0 z-10 h-fit lg:top-0">Sobre</span>
            <div id={id} class="container relative">
                <Slider
                    style={{
                        height: `${containerPaddings}px`
                    }}
                    class="carousel carousel-center w-full col-span-full row-span-full scrollbar-none gap-6 xl:items-center heightUnset">
                    {textContent?.map((text, index) => (
                        <Slider.Item index={index} class="carousel-item w-full">
                            <span dangerouslySetInnerHTML={{ __html: text ?? '' }} />
                        </Slider.Item>
                    ))}
                    <>
                        <ul class="carousel !absolute left-2/4 lg:top-2/4 h-fit justify-center gap-3 lg:gap-2 z-10 bottom-0 lg:bottom-4 flex lg:flex-col">
                            {textContent?.map((_, index) => (
                                <li class="carousel-item">
                                    <Slider.Dot index={index}>
                                        <div class="flex flex-col">
                                            <div
                                                class="w-[12px] h-[12px] lg:w-[12px] lg:h-[12px] rounded-full bg-[#D2DEDC] group-disabled:bg-[#395143]"
                                                style={{ animationDuration: `${interval}s` }}
                                            />
                                        </div>
                                    </Slider.Dot>
                                </li>
                            ))}
                        </ul>
                    </>
                </Slider>
                <SliderJS rootId={id} interval={interval && interval * 1e3} infinite />
            </div>
        </div>
    )
}

export default AboutUs