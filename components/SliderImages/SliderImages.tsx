import Slider from "./Slider.tsx";
import SliderJS from "../../islands/newSliderJS.tsx";
import { Picture, Source } from "apps/website/components/Picture.tsx";
import { useId } from "preact/hooks";
import type { ImageWidget as LiveImage } from "apps/admin/widgets.ts";

/**
 * @titleBy alt
 */
export interface Banner {
    /** @description desktop otimized image */
    desktop: LiveImage;
    /** @description mobile otimized image */
    mobile: LiveImage;
    /** @description Image's alt text */
    alt: string;
    /** @description when user clicks on the image, go to this link */
    /** @description Image text title */
    href?: string;
}
export interface Props {
    /**
     * @description Check this option to turn all banners too width 100%
     */
    bannersFullWidth?: boolean;
    images: Banner[];
    /**
     * @description Check this option when this banner is the biggest image on the screen for image optimizations
     */
    preload?: boolean;
    /**
     * @title Autoplay interval
     * @description time (in seconds) to start the carousel autoplay
     */
    interval?: number;
}
function BannerItem({ image, lcp }: {
    image: Banner;
    lcp?: boolean;
}) {
    const { alt, mobile, desktop, href } = image;
    return (
        <a
            href={href ?? "#"}
            aria-label={alt}
            class="relative overflow-y-hidden w-full"
        >
            <Picture class="" preload={lcp}>
                <Source
                    media="(max-width: 767px)"
                    fetchPriority={lcp ? "high" : "auto"}
                    src={mobile}
                    width={365}
                    height={322}
                />
                <Source
                    media="(min-width: 768px)"
                    fetchPriority={lcp ? "high" : "auto"}
                    src={desktop}
                    width={1440}
                    height={659}
                />
                <img
                    class="object-cover w-full h-full min-h-[322px] lg:min-h-[659px] block"
                    loading={lcp ? "eager" : "lazy"}
                    src={desktop}
                    alt={alt}
                />
            </Picture>
        </a>
    );
}
export function Dots({ images, interval = 0 }: Props) {
    return (
        <>
            <ul class="carousel !absolute justify-center gap-3 lg:gap-2 z-10 bottom-4">
                {images?.map((_, index) => (
                    <li class="carousel-item">
                        <Slider.Dot index={index}>
                            <div class="flex">
                                <div
                                    class="w-[16px] h-[16px] lg:w-[13px] lg:h-[13px] rounded-full bg-[#bfbfbf] group-disabled:bg-[#f1cf00]"
                                    style={{ animationDuration: `${interval}s` }}
                                />
                            </div>
                        </Slider.Dot>
                    </li>
                ))}
            </ul>
        </>
    );
}
export function Buttons() {
    return (
        <>
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
        </>
    );
}

function BannerCarousel(
    { bannersFullWidth = false, images, preload, interval }: Props,
) {
    const id = useId();

    return !bannersFullWidth
        ? (
            <div class="px-[5px] lg:px-5">
                <div id={id} class="flex relative w-full items-center justify-center">
                    <Slider class="carousel carousel-center w-full col-span-full row-span-full scrollbar-none gap-6">
                        {images?.map((image, index) => (
                            <Slider.Item index={index} class="carousel-item w-full">
                                <BannerItem image={image} lcp={index === 0 && preload} />
                            </Slider.Item>
                        ))}
                    </Slider>

                    <Buttons />

                    {/* <Dots images={images} interval={interval} /> */}

                    <SliderJS
                        rootId={id}
                        interval={interval && interval * 1e3}
                        infinite
                    />
                </div>
            </div>
        )
        : (
            <div id={id} class="flex relative w-full items-center justify-center">
                <Slider class="carousel carousel-center w-full col-span-full row-span-full scrollbar-none gap-6">
                    {images?.map((image, index) => (
                        <Slider.Item index={index} class="carousel-item w-full">
                            <BannerItem image={image} lcp={index === 0 && preload} />
                        </Slider.Item>
                    ))}
                </Slider>

                <Buttons />

                {/* <Dots images={images} interval={interval} /> */}

                <SliderJS rootId={id} interval={interval && interval * 1e3} infinite />
            </div>
        );
}

export default BannerCarousel;
