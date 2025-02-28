import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import SliderJS from "../islands/newSliderJS.tsx";
import Slider from "../components/SliderImages/Slider.tsx";
import { useId } from "../sdk/useId.ts";
import { asset } from "$fresh/runtime.ts";

interface Props {
    title?: string;
    tag?: string;
    images?: {
        src: ImageWidget;
        href?: string;
        alt?: string;
        width?: number;
        height?: number;
    }[]
    /**
 * @title Autoplay interval
 * @description time (in seconds) to start the carousel autoplay
 */
    interval?: number;
}

function Instagram({ title, tag, images, interval }: Props) {
    const id = useId();
    if (!images || images.length === 0) {
        return null;
    }
    const hasManyItems = images.length > 4;
    return (
        <div>
            <div class="flex flex-col py-8 lg:py-[46px] 2xl:pt-20 relative">
                <img
                    class="object-cover absolute left-0 top-[-140px] hidden lg:block 2xl:hidden z-10"
                    src={asset("/plant_inst.png")}
                    width={246}
                    height={500}
                    alt="Plantas"
                    loading="lazy"
                />
                <img
                    class="object-cover absolute left-0 top-[-190px] hidden 2xl:block z-10"
                    src={asset("/plant_inst_xl.png")}
                    width={415}
                    height={487}
                    alt="Plantas"
                    loading="lazy"
                />
                <h2 class="text-[#144A2C] font-bold text-2xl lg:text-[35px] lg:leading-[40px] text-center">{title}</h2>
                <a href={`https://www.instagram.com/${tag}`} target="_blank" class="mt-2 mb-9 lg:mb-12 text-center"><span class="text-[#144A2C] text-base lg:text-[20px] text-center underline ">@{tag}</span></a>
                <div id={id} class="relative max-w-[1440px] mx-auto"> <Slider
                    class="carousel carousel-center w-full col-span-full row-span-full scrollbar-none gap-0">
                    {images?.map((img, index) => (
                        <Slider.Item index={index} class="carousel-item">
                            <a href={img?.href}>   <Image
                                src={img?.src || ""}
                                alt={img?.alt || "Post Instagram"}
                                height={img?.height || 360}
                                width={img?.width || 360}
                                class=""
                            />
                            </a>
                        </Slider.Item>
                    ))}
                </Slider>
                    {hasManyItems && <div class="w-full absolute h-[50px] top-2/4">
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
                </div>
                <SliderJS rootId={id} interval={interval && interval * 1e3} infinite />
            </div>
        </div>
    )
}

export default Instagram