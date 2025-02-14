import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  image?: {
    href?: string;
    image?: ImageWidget;
    alt?: string;
    width?: number;
    height?: number;
    text?: string;
  }
  items?: {
    link?: string;
    text?: string;
    /**
 * @default false
 */
    highlight?: boolean;
  }[]
  socialIcons?: {
    image?: ImageWidget;
    link?: string;
  }[]
}

function Footer({
  image,
  items,
  socialIcons
}: Props) {
  return (
    <div class="bg-[#144A2C33]">
      <div class="container pt-12 pb-[85px]">
        <div class="flex justify-between flex-wrap gap-7 px-4 lg:px-0 lg:gap-0">
          <a
            href={image?.href}
            class="flex flex-row gap-1 items-center justify-center text-xs"
            target="_blank"
          >
            {image && (
              <Image
                src={image.image || ""}
                alt={image.alt || ""}
                height={image.height || 59}
                width={image.width || 85}
              />
            )}
          </a>
          <ul class="flex items-center gap-6 flex-wrap lg:flex-nowrap">
            {items?.map((item) => (
              <li>
                <a
                  href={item.link}
                  class={`text-[15px] ${item.highlight ? 'font-bold' : 'font-normal'} text-[#364C3F] relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-[#364C3F] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left`}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
          <ul class="flex items-center gap-4">
            {socialIcons?.map((icons) => (
              <li> <a href={icons.link}>        <Image
                src={icons.image || ""}
                alt={"Icon rede social"}
                height={31}
                width={31}
              /></a></li>
            ))}
          </ul>
          <span class="flex items-center font-light text-[#144A2C] text-base">Copyright © 2024 Cia. das Folhas </span>
        </div>
      </div>
      <div class="py-6 border-t-[1px] border-white border-solid">
        <div class="container px-4 lg:px-0">
          <span class="text-[#144A2C] text-sm font-light">Todos os direitos desse site estão reservado para Companhia das Folhas LTDA.<br />
            CNPJ: 00.265.572/0001-00 Rua Baumann, 925 - Vila Leopoldina, São Paulo</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
