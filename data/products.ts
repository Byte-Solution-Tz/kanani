export type ProductCategoryId = "scrap" | "steel" | "cement" | "hardware" | "plastic";

export type ProductSpec = {
  property: string;
  value: string;
};

export type ProductFeature = {
  title: string;
  description: string;
  icon: "verified" | "eco";
};

export type ProductResource = {
  title: string;
  size: string;
  kind: "pdf" | "sheet" | "spec";
};

export type RelatedProduct = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
};

export type CatalogProduct = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategoryId;
  image: string;
  description: string;
  spec: string;
  posterHighlights: string[];
};

export type ProductDetailEntry = {
  slug: string;
  title: string;
  breadcrumbs: string[];
  badge: string;
  heroImage: string;
  summary: string;
  overview: string;
  features: ProductFeature[];
  applications: string[];
  specifications: ProductSpec[];
  resources: ProductResource[];
  relatedProducts: RelatedProduct[];
};

export const productCategoryIds: ProductCategoryId[] = ["scrap", "steel", "cement", "hardware", "plastic"];

export function isProductCategory(value: string): value is ProductCategoryId {
  return productCategoryIds.includes(value as ProductCategoryId);
}

const imageHeavyMeltingScrap = "/images/products/scrap/heavy_melting_scrap.webp";
const imageCastIronScrap = "/images/products/scrap/cast_iron_scrap.webp";
const imageSteelRebars = "/images/products/steel/steel_rebars.jpeg";
const imageSteelSheets = "/images/products/steel/steel_sheet.webp";
const imageSteelBeems = "/images/products/steel/steel_beem.webp";
const imageDangoteCement = "/images/products/cement/dangote_cement.webp";
const imageConstructionWood = "/images/products/hardware/construction_wood.jpg";
const imageMarineBoards = "/images/products/hardware/marine_boards.jpg";
const imageGypsumBoards = "/images/products/hardware/gypsum_boards.jpeg";
const imageRoofingMaterials = "/images/products/hardware/roofing_material.webp";
const imagePlasticRecyclingPP = "/images/products/plastic_recycling/plastic_recycling_pp.webp";
const imagePlasticRecyclingPE = "/images/products/plastic_recycling/plastic_recycling_pe.jpg";

export const products: CatalogProduct[] = [
  {
    id: "heavy-melting-scrap-hms",
    slug: "heavy-melting-scrap-hms",
    name: "Heavy Melting Scrap (HMS)",
    category: "scrap",
    image: imageHeavyMeltingScrap,
    description:
      "Bulk industrial ferrous scrap supplied to foundries, recyclers, and steel melting facilities.",
    spec: "HMS 1 & 2, sorted and furnace-ready",
    posterHighlights: [
      "Heavy Melting Scrap (HMS)",
      "Reliable Scrap Metal Purchasing",
      "Cast Iron & Structural Scrap",
      "Efficient Scrap Processing",
    ],
  },
  {
    id: "cast-iron-structural-scrap",
    slug: "cast-iron-structural-scrap",
    name: "Cast Iron & Structural Scrap",
    category: "scrap",
    image: imageCastIronScrap,
    description:
      "Consistent cast iron and structural cut-off scrap streams for industrial recycling operations.",
    spec: "Segregated cast iron and structural mixed loads",
    posterHighlights: [
      "Foundry-ready cast iron scrap",
      "Structural steel cut-off recovery",
      "Bulk loading and dispatch support",
      "Quality-sorted scrap streams",
    ],
  },
  {
    id: "tmt-bars-reinforcement-steel",
    slug: "tmt-bars-reinforcement-steel",
    name: "TMT Bars & Reinforcement Steel",
    category: "steel",
    image: imageSteelRebars,
    description:
      "High-strength steel bars for concrete reinforcement in residential, commercial, and civil works.",
    spec: "Reinforcement bars and rebar bundles",
    posterHighlights: [
      "TMT Bars & Reinforcement Steel",
      "High-strength steel solutions",
      "Construction and fabrication supply",
      "Bulk and project-based dispatch",
    ],
  },
  {
    id: "iron-sheets-mabati-roofing",
    slug: "iron-sheets-mabati-roofing-materials",
    name: "Iron Sheets (Mabati) & Roofing Materials",
    category: "steel",
    image: imageSteelSheets,
    description:
      "Durable iron sheets and roofing products for industrial, commercial, and residential developments.",
    spec: "Mabati sheets, roofing profiles, accessories",
    posterHighlights: [
      "Iron Sheets (Mabati)",
      "Roofing materials and accessories",
      "Multiple gauge and profile options",
      "Reliable stock availability",
    ],
  },
  {
    id: "structural-steel-beams-sections",
    slug: "structural-steel-beams-sections",
    name: "Structural Steel, Beams & Sections",
    category: "steel",
    image: imageSteelBeems,
    description:
      "Structural sections and steel beams for fabrication, frame works, and heavy load-bearing projects.",
    spec: "Beams, channels, angles, and sections",
    posterHighlights: [
      "Structural steel beams and sections",
      "Fabrication-ready steel lengths",
      "Suitable for industrial structures",
      "Project-scale supply capability",
    ],
  },
  {
    id: "dangote-cement-authorized-distributor",
    slug: "dangote-cement-authorized-distributor",
    name: "Dangote Cement (Authorized Distributor)",
    category: "cement",
    image: imageDangoteCement,
    description:
      "Authorized Dangote cement distribution for contractors, developers, and major construction projects.",
    spec: "Certified Dangote cement supply channel",
    posterHighlights: [
      "Authorized Distributor of Dangote Cement",
      "Bulk & Bagged Cement Supply",
      "Large Inventory in Secure Warehouses",
      "Fast & Reliable Delivery",
    ],
  },
  {
    id: "timber-construction-wood",
    slug: "timber-construction-wood",
    name: "Timber & Construction Wood",
    category: "hardware",
    image: imageConstructionWood,
    description:
      "Timber and construction wood products for formwork, finishing, and general site applications.",
    spec: "Construction wood and timber sections",
    posterHighlights: [
      "Timber & Construction Wood",
      "Formwork and framework support",
      "Reliable quality grading",
      "Consistent stock for active sites",
    ],
  },
  {
    id: "marine-boards",
    slug: "marine-boards",
    name: "Marine Boards",
    category: "hardware",
    image: imageMarineBoards,
    description:
      "Durable marine-grade boards suitable for interior applications, partitions, ceilings, and finishing works.",
    spec: "Marine board board variants",
    posterHighlights: [
      "Marine Boards",
      "Marine-grade durability",
      "Interior and finishing applications",
      "Project-ready board stock",

    ],
  },
  {
    id: "gypsum-boards",
    slug: "gypsum-boards",
    name: "Gypsum Boards",
    category: "hardware",
    image: imageGypsumBoards,
    description:
      "Quality gypsum boards for interior partitioning, ceiling applications, and finishing works in construction projects.",
    spec: "Gypsum board board variants",
    posterHighlights: [
      "Gypsum Boards",
      "Interior partitioning and ceiling solutions",
      "Reliable quality and stock availability",
      "Suitable for residential and commercial projects",
      "Project-ready board stock",

    ],
  },
  {
    id: "roofing-finishing-materials",
    slug: "roofing-finishing-materials",
    name: "Roofing & Finishing Materials",
    category: "hardware",
    image: imageRoofingMaterials,
    description:
      "Essential roofing and finishing products for structural completion and final project handover quality.",
    spec: "Roofing accessories and finishing materials",
    posterHighlights: [
      "Roofing & Finishing Materials",
      "Weatherproofing support products",
      "Final-stage construction supplies",
      "Site-ready quantities available",
    ],
  },
  {
    id: "plastic-recycling-pp",
    slug: "plastic-recycling-pp",
    name: "Plastic Recycling Polypropalane (PP) Pellets",
    category: "plastic",
    image: imagePlasticRecyclingPP,
    description:
      "Recycled polypropylene (PP) pellets supplied by polymer type or by color stream including black, yellow, and green.",
    spec: "Recycled polypropylene (PP) pellets",
    posterHighlights: [
      "Plastic Recycling - PP Pellets",
      "Color-Sorted Plastic Pellets",
      "Black, yellow, and green pellet supply",
      "PP grade-based dispatch",
    ],
  },
  {
    id: "plastic-recycling-pe",
    slug: "plastic-recycling-pe",
    name: "Plastic Recycling Polyethylene (PE) Pellets",
    category: "plastic",
    image: imagePlasticRecyclingPE,
    description:
      "Recycled polyethylene (PE) pellets supplied by polymer type or by color stream including black, yellow, and green.",
    spec: "Recycled polyethylene (PE) pellets",
    posterHighlights: [
      "Plastic Recycling - PE Pellets",
      "Color-Sorted Plastic Pellets",
      "Black, yellow, and green pellet supply",
      "PE grade-based dispatch",
    ],
  },
];

export const categoryLabels: Record<ProductCategoryId, string> = {
  scrap: "Scrap Materials",
  steel: "Steel Products",
  cement: "Cement Supply",
  hardware: "Hardware Suppliers",
  plastic: "Plastic Recycling",
};

const defaultFeatures: ProductFeature[] = [
  {
    title: "Quality Assurance",
    description: "Inspection-driven supply with quality checks before dispatch.",
    icon: "verified",
  },
  {
    title: "Sustainable Sourcing",
    description: "Responsible procurement and reliable long-term supplier networks.",
    icon: "eco",
  },
];

const defaultResources: ProductResource[] = [
  { title: "Product Catalog 2026", size: "PDF - 5.1 MB", kind: "pdf" },
  { title: "Supply Capability Sheet", size: "PDF - 1.4 MB", kind: "sheet" },
  { title: "Technical Data Summary", size: "PDF - 0.9 MB", kind: "spec" },
];

const categoryApplications: Record<ProductCategoryId, string[]> = {
  scrap: [
    "Heavy Melting Scrap (HMS)",
    "Reliable Scrap Metal Purchasing",
    "Cast Iron & Structural Scrap",
    "Efficient Scrap Processing",
  ],
  steel: [
    "TMT Bars & Reinforcement Steel",
    "Iron Sheets (Mabati) & Roofing Materials",
    "Structural Steel, Beams & Sections",
    "High-strength steel solutions for construction and fabrication",
  ],
  cement: [
    "Authorized Distributor of Dangote Cement",
    "Bulk & Bagged Cement Supply",
    "Large Inventory in Secure Warehouses",
    "Fast & Reliable Delivery",
  ],
  hardware: [
    "Timber & Construction Wood",
    "Marine & Gypsum Boards",
    "Roofing & Finishing Materials",
    "Complete Range of Building Hardware",
  ],
  plastic: [
    "Plastic Recycling - PP & PE Pellets",
    "Color-Sorted Plastic Pellets",
    "Black, yellow, and green pellet supply",
    "PP and PE grade-based dispatch",
  ],
};

const categorySpecs: Record<ProductCategoryId, ProductSpec[]> = {
  scrap: [
    { property: "Material Group", value: "Ferrous and structural scrap materials" },
    { property: "Supply Format", value: "Bulk truck load and containerized options" },
    { property: "Processing", value: "Segregation, cutting, and contaminant reduction" },
    { property: "Buyer Segments", value: "Foundries, recyclers, and manufacturing industries" },
  ],
  steel: [
    { property: "Core Products", value: "Rebar, beams, sections, and roofing-related steel" },
    { property: "Supply Model", value: "Project-based dispatch and rolling stock support" },
    { property: "Usage", value: "Construction, fabrication, and infrastructure projects" },
    { property: "Quality Control", value: "Dimensional and visual inspection before release" },
  ],
  cement: [
    { property: "Brand Support", value: "Dangote cement distribution and stock planning" },
    { property: "Delivery Formats", value: "Bulk and bagged cement supply" },
    { property: "Stock Position", value: "Large inventory held in secure warehouses" },
    { property: "Logistics", value: "Fast and reliable scheduled site delivery" },
  ],
  hardware: [
    { property: "Range", value: "Timber, boards, roofing, and general building hardware" },
    { property: "Supply Capacity", value: "Consistent stock for structural and finishing works" },
    { property: "Buyer Segments", value: "Contractors, developers, and industrial buyers" },
    { property: "Support", value: "One-stop project material consolidation" },
  ],
  plastic: [
    { property: "Materials", value: "Recycled polypropylene (PP) and polyethylene (PE) pellets" },
    { property: "Supply Options", value: "Sold by polymer type or by color stream" },
    { property: "Color Streams", value: "Black, yellow, and green" },
    { property: "Applications", value: "Extrusion, molding, and recycled industrial manufacturing" },
  ],
};

function toRelatedProduct(item: CatalogProduct): RelatedProduct {
  return {
    slug: item.slug,
    title: item.name,
    subtitle: item.spec,
    image: item.image,
  };
}

function getRelatedProducts(item: CatalogProduct): RelatedProduct[] {
  const sameCategory = products.filter(
    (product) => product.category === item.category && product.slug !== item.slug,
  );
  const otherProducts = products.filter(
    (product) => product.category !== item.category && product.slug !== item.slug,
  );
  return [...sameCategory, ...otherProducts].slice(0, 4).map(toRelatedProduct);
}

function buildOverview(item: CatalogProduct): string {
  const highlightLine = item.posterHighlights.slice(0, 4).join(", ");
  return (
    `${item.name} is supplied by Kanan Services Limited to support contractors, developers, ` +
    `and industrial buyers with reliable stock, fair pricing, and on-time delivery. ` +
    `Key supply focus includes ${highlightLine}.`
  );
}

function buildPlaceholderDetail(item: CatalogProduct): ProductDetailEntry {
  return {
    slug: item.slug,
    title: item.name,
    breadcrumbs: ["Catalog", categoryLabels[item.category], item.name],
    badge: item.category === "scrap" || item.category === "cement" ? "Featured" : "Ready Stock",
    heroImage: item.image,
    summary: item.description,
    overview: buildOverview(item),
    features: defaultFeatures,
    applications:
      item.posterHighlights.length > 0 ? item.posterHighlights : categoryApplications[item.category],
    specifications: [
      { property: "Primary Offer", value: item.spec },
      ...categorySpecs[item.category],
    ],
    resources: defaultResources,
    relatedProducts: getRelatedProducts(item),
  };
}

const heavyMeltingScrapDetail: ProductDetailEntry = {
  slug: "heavy-melting-scrap-hms",
  title: "Heavy Melting Scrap (HMS)",
  breadcrumbs: ["Catalog", "Scrap Materials", "Heavy Melting Scrap (HMS)"],
  badge: "Featured",
  heroImage: imageHeavyMeltingScrap,
  summary:
    "Bulk heavy melting scrap supplied to foundries, recyclers, and manufacturing plants with consistent quality and efficient logistics support.",
  overview:
    "Kanan Services Limited provides reliable HMS supply alongside cast iron and structural scrap streams. From procurement to processing, our team supports industrial buyers with transparent sourcing, quality sorting, and dependable dispatch schedules.",
  features: defaultFeatures,
  applications: categoryApplications.scrap,
  specifications: [
    { property: "Material Type", value: "Heavy Melting Scrap (HMS)" },
    { property: "Supporting Streams", value: "Cast iron and structural scrap" },
    { property: "Processing", value: "Efficient scrap processing and grading" },
    { property: "Supply Channel", value: "Reliable scrap metal purchasing and dispatch" },
    { property: "Buyer Segments", value: "Foundries, recyclers, and manufacturing industries" },
  ],
  resources: defaultResources,
  relatedProducts: getRelatedProducts(products[0]),
};

export const productDetailsBySlug: Record<string, ProductDetailEntry> = {
  "heavy-melting-scrap-hms": heavyMeltingScrapDetail,
  "industrial-scrap-steel": heavyMeltingScrapDetail,
  "scrap-metal": heavyMeltingScrapDetail,
};

export function getProductDetailBySlug(slug: string): ProductDetailEntry {
  const knownDetail = productDetailsBySlug[slug];
  if (knownDetail) {
    return knownDetail;
  }

  const catalogProduct = products.find((item) => item.slug === slug || item.id === slug);
  if (catalogProduct) {
    return buildPlaceholderDetail(catalogProduct);
  }

  return heavyMeltingScrapDetail;
}
