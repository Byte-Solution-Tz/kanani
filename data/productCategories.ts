import type { ProductCategoryId } from "@/data/products";

export type ProductCategoryItem = {
  key: ProductCategoryId;
  title: string;
  heroTitle: string;
  description: string;
  image: string;
};

export const productCategoryItems: ProductCategoryItem[] = [
  {
    key: "scrap",
    title: "Scrap Metal Services ",
    heroTitle: "Scrap Services",
    description:
      " Comprehensive scrap metal collection, processing, and recycling services for industrial reuse. ",
    image:
      "/images/products/scrap/scrap_metal_product.webp",
  },
  {
    key: "steel",
    title: "Steel Supply Services",
    heroTitle: "Steel Supply Services",
    description:
      "Reliable supply of high-quality steel products including rebar, structural steel, and custom fabrications for construction and industrial projects.",
    image:
      "/images/products/steel/structural_steel.jpeg",
  },
  {
    key: "cement",
    title: "Cement Supply Services",
    heroTitle: "Cement Supply Services",
    description:
      "Official distributor of Dangote Cement in Tanzania, providing premium cement products for construction and infrastructure projects with reliable delivery and competitive pricing.",
    image:
      "/images/products/cement/dangote_cement.webp",
  },
  {
    key: "hardware",
    title: "Hardware Supply Services",
    heroTitle: "Hardware Supply Services",
    description:
      "Complete range of construction and industrial hardware including fasteners, fittings, and essential site tools to support every project stage.",
    image:
      "/images/products/hardware/hardware_supply.png",
  },
  {
    key: "plastic",
    title: "Plastic Recycling Services",
    heroTitle: "Plastic Recycling Services",
    description:
      "Recycled PP and PE pellets supplied by polymer type or by color stream including black, yellow, and green.",
    image:
      "/images/products/plastic_recycling/plastic_recycling_pp.webp",
  },
];
