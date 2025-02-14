import { asset } from "$fresh/runtime.ts";

export interface Props {
    phone?: number;
}

function WhatsApp({ phone }: Props) {
    if (!phone) {
        return null;
    }

    return (
        <a
            href={`https://api.whatsapp.com/send/?phone=${phone}&text&type=phone_number&app_absent=0`}
            class="fixed bottom-14 right-0 z-30"
            aria-label="Chat on WhatsApp"
            target="_blank"
        >
            <img
                class="object-cover"
                src={asset("/logo_whatsapp.png")}
                width={56}
                height={69}
                alt="Logo do Whatsapp"
                loading="lazy"
            />
        </a>
    );
}

export default WhatsApp;
