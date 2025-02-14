import { useEffect, useRef } from "preact/hooks";

declare global {
    interface Window {
        google: any;
    }
}

interface Props {
    title?: string;
    /** @description Insert your google maps API KEY */
    apiKey?: string;
}

const Maps = ({ title, apiKey }: Props) => {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const loadGoogleMaps = async () => {
            if (!window.google) {
                const script = document.createElement("script");
                script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
                script.async = true;
                script.defer = true;
                script.onload = initMap;
                document.head.appendChild(script);
            } else {
                initMap();
            }
        };

        const initMap = () => {
            if (window.google && mapRef.current) {
                new window.google.maps.Map(mapRef.current, {
                    center: { lat: -23.55052, lng: -46.633308 },
                    zoom: 14,
                });
            }
        };

        loadGoogleMaps();
    }, []);

    return <div class="flex flex-col h-[850px] lg:h-[1186px] relative px-4 2xl:px-0">
        <span class="w-full max-w-[1180px] mx-auto text-[#144A2C] text-[35px] font-bold mb-6">{title}</span>
        <div class="relative z-20 w-full max-w-[1280px] h-[638px] 2xl:max-w-[1400px] 2xl:h-[700px] border-[1px] border-solid border-[#47721999] rounded-[20px] mx-auto" ref={mapRef} />
        <span class="text-[#E6EDCE4D] text-[150px] lg:text-[500px] absolute right-0 bottom-0 z-10">Maps</span>
    </div>
        ;
};

export default Maps;
