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
      "Reliable supply of steel products including reinforcement bars, wire rod, hollow sections, pipes, plates, and fabrication-ready materials.",
    image:
      "/images/products/steel/structural_steel.jpeg",
  },
  {
    key: "roofing",
    title: "Roofing Supply Services",
    heroTitle: "Roofing Supply Services",
    description:
      "Dependable roofing material supply including Aluzinki and rangi corrugated sheets, IT4 and IT5 profiles, and roofing tiles.",
    image:
      "/images/products/hardware/roofing_material.webp",
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
    title: "Plastic Product Supply",
    heroTitle: "Plastic Product Supply",
    description:
      "Plastic product supply including water tanks, UPVC borewell pipes, UPVC pipes, HDPE pipes, PPR pipes, and recycled pellets.",
    image:
      "/images/products/plastic_recycling/plastic_recycling_pp.webp",
  },
];
