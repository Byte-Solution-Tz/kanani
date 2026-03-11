export type ProductCategoryId = "scrap" | "steel" | "cement" | "hardware";

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

export const productCategoryIds: ProductCategoryId[] = ["scrap", "steel", "cement", "hardware"];

export function isProductCategory(value: string): value is ProductCategoryId {
  return productCategoryIds.includes(value as ProductCategoryId);
}

const imageScrapSteel =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBXCIN_i77zC2-U6_pSxIX_jIWnn5zQqABlqV7w_8UdcWw2HXLMDe2a73D8Or-2IRYkJRC6GHrUY4t-WFreb6bUseOi39Hr67iCRZcklQs2a9qmcTxvjqHCOWNE--m4YeRYtYclINCrZOgke0LkpP82FyVa-g4bIgCvUBnU8HWYCpnpIR5KV1OPfDeTxPMESDdq0t2KHFHyZfWwcqVbnKVte3zgl0ASGW_u-KQ5A7SHn5aGLsB5NePe93gP1aomVcVG4gbBizeHxnWI";
const imageScrapCast =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC3PZYE8vS1VsCZESjsBmRxj9AgcIH2WNiCgJJypcSY4xyw4sCwl3__lF3kQYXcBE4VOJZmN7FdR7vvfnSl2vsRbKOPYkt2xmmF5A7GaJajUGVSX_dZTZ1XwcqMTeS9sbE_RByQNREFn8s5Cej4AfEuVj795vrTvZLxbX0bCwk3bkrqu2C0prDiUf0hLValAGimB_jqWHXgzsadM-9Y8Y31N6oduqpxVPOc-ShM6oN_kDAPBiX6NliQphyhrnMD4KReh5bkaStNuY7N";
const imageScrapProcessing =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAsEtlepplJ6mw_D9ug1ecMZ0ky9FKF7P69nu6JCPeAsN0aWUCXe7C2jA_xpBll6ZQzmeNmBxFq7jGWSNTDuYY_SfhNMlqE6KtxLohM-1ulZKjgE4w6TWmtr6d5ePukAcIYpKI5h-NlNm2r-gZAy29QXuYoaup6Ie10Yb28RZYDewkQ1Qn7NkZm9FveGe4W-2jkVPnwg-ioRyA7nLlt5nA5UtT-btUOHWORQzMJRjd6VHDc4OfNd-tHzgVghVqRxVi2Ni71DU5KzSZt";
const imageSteel =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDjvAn9SbafEwGUsve5C8c_aSCYGWPeuQlttatT-Jm70yjBqxyk6MSUam91zGe5UNbgLKcVB4WbouGDjYjJyhCgllssvQC1H51yCqldsUcBug5pclS7JeIzAr7SOepz05taYzGpzP36-5uN8hSr40a-eCpS5e-ztiA6QspO9ntwFMYpgzPIwjS23VYcTvwx3e6NjQ_VTyqwaiOFKMpbUg7oyv23NotfSCXvQXJN2zo8Q00eS7S6jjHHolsU-RaCMXcwxtDvQd6cjuLj";
const imageCement =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD7ahCr8hFHGKBMe7VLmP2oKg7gBdEM1lo2fQr7FxD0WktDO9498N1xGRAMHbQb-rPAL0HzcZTCJ3d2PQzzz0qN1erPJh6bC608p2EPk0a3iNEd5wUEjaAu-S9bSExOktHSRo-6F1m9xuzgTewkO0u8e5b57vbI586oMpvbQLwep500w6PqG9aUdncCRf1mQrKf2kUp5uoQ9MZKGrpJh0L7CmvDjNzWjevJiHWsTYXk_wsXsarSmrhSxHLNux8PuHzzYmekvk9S9hao";
const imageHardware =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCz8Tddr83Lrz8iEd5qRFd_HPiHMLwGa1YXbt6vSCsjNZprNlJu_BVsZx1-DifX-q8OnrWJKJTg10yasEdoOam0siHjJO_s2XlPIwLZd6QGI4e3aG_yRWW2e0Il54UdTm-QZDClkx2yhv_Ais0NV-hTrSfUsu4hMift0OYNRRXJqdJvBYS-W5p7AeELYDpTHq0fGWSeVwnxwd5I2JlLm4TdF5M89VVjaeExcXg0k7UNVtVSMaSVi8Bf_D9hHKxhgUzEVitRNy3CW212";

export const products: CatalogProduct[] = [
  {
    id: "heavy-melting-scrap-hms",
    slug: "heavy-melting-scrap-hms",
    name: "Heavy Melting Scrap (HMS)",
    category: "scrap",
    image: imageScrapSteel,
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
    image: imageScrapCast,
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
    id: "reliable-scrap-metal-purchasing",
    slug: "reliable-scrap-metal-purchasing",
    name: "Reliable Scrap Metal Purchasing",
    category: "scrap",
    image: imageScrapSteel,
    description:
      "Professional scrap purchasing with transparent weighing, fair pricing, and prompt settlement.",
    spec: "Factory and site collection with verified weights",
    posterHighlights: [
      "Transparent weighing process",
      "Competitive market-based buying rates",
      "Pickup from industrial and project sites",
      "Long-term supplier partnerships",
    ],
  },
  {
    id: "efficient-scrap-processing",
    slug: "efficient-scrap-processing",
    name: "Efficient Scrap Processing",
    category: "scrap",
    image: imageScrapProcessing,
    description:
      "Sorting, cutting, and contaminant reduction services to prepare scrap for downstream processing.",
    spec: "Segregation, cutting, and clean dispatch preparation",
    posterHighlights: [
      "Efficient scrap processing workflows",
      "Contaminant and non-metal separation",
      "Grade-based sorting and preparation",
      "Ready-to-ship processed material",
    ],
  },
  {
    id: "tmt-bars-reinforcement-steel",
    slug: "tmt-bars-reinforcement-steel",
    name: "TMT Bars & Reinforcement Steel",
    category: "steel",
    image: imageSteel,
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
    image: imageSteel,
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
    image: imageSteel,
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
    image: imageCement,
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
    id: "bulk-bagged-cement-supply",
    slug: "bulk-bagged-cement-supply",
    name: "Bulk & Bagged Cement Supply",
    category: "cement",
    image: imageCement,
    description:
      "Flexible cement supply in bulk and bagged formats to fit project scale, timing, and logistics.",
    spec: "Bulk tanker and bagged pallet dispatch",
    posterHighlights: [
      "Bulk and bagged cement formats",
      "Scheduled supply for active sites",
      "Consistent stock planning support",
      "Suitable for small and mega projects",
    ],
  },
  {
    id: "secure-warehouse-cement-stock",
    slug: "secure-warehouse-cement-stock",
    name: "Large Inventory in Secure Warehouses",
    category: "cement",
    image: imageCement,
    description:
      "High-volume warehouse stocking to reduce shortages and maintain consistent project continuity.",
    spec: "Protected storage and inventory-controlled dispatch",
    posterHighlights: [
      "Large inventory in secure warehouses",
      "Moisture-protected storage management",
      "Fast allocation for urgent orders",
      "Reliable availability planning",
    ],
  },
  {
    id: "fast-reliable-cement-delivery",
    slug: "fast-reliable-cement-delivery",
    name: "Fast & Reliable Delivery",
    category: "cement",
    image: imageCement,
    description:
      "Dedicated cement logistics support for on-time site delivery across Dar es Salaam and nearby regions.",
    spec: "Planned dispatch windows and dependable logistics",
    posterHighlights: [
      "Fast and reliable delivery",
      "Route-planned distribution support",
      "Bulk and bagged shipment handling",
      "Project schedule alignment",
    ],
  },
  {
    id: "timber-construction-wood",
    slug: "timber-construction-wood",
    name: "Timber & Construction Wood",
    category: "hardware",
    image: imageHardware,
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
    id: "marine-gypsum-boards",
    slug: "marine-gypsum-boards",
    name: "Marine & Gypsum Boards",
    category: "hardware",
    image: imageHardware,
    description:
      "Quality boards for interior partitions, ceilings, and moisture-sensitive construction areas.",
    spec: "Marine board and gypsum board variants",
    posterHighlights: [
      "Marine & Gypsum Boards",
      "Interior and partition applications",
      "Ceiling and finishing suitability",
      "Project-ready board stock",
    ],
  },
  {
    id: "roofing-finishing-materials",
    slug: "roofing-finishing-materials",
    name: "Roofing & Finishing Materials",
    category: "hardware",
    image: imageHardware,
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
    id: "complete-range-building-hardware",
    slug: "complete-range-building-hardware",
    name: "Complete Range of Building Hardware",
    category: "hardware",
    image: imageHardware,
    description:
      "Comprehensive hardware range covering essential fasteners, tools, fittings, and construction accessories.",
    spec: "General building hardware supply",
    posterHighlights: [
      "Complete range of building hardware",
      "Reliable supply for structural works",
      "Materials for finishing works",
      "One-stop procurement support",
    ],
  },
];

export const categoryLabels: Record<ProductCategoryId, string> = {
  scrap: "Scrap Materials",
  steel: "Steel Products",
  cement: "Cement Supply",
  hardware: "Hardware Suppliers",
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
    `${item.name} is supplied by Kanani Services Limited to support contractors, developers, ` +
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
  heroImage: imageScrapSteel,
  summary:
    "Bulk heavy melting scrap supplied to foundries, recyclers, and manufacturing plants with consistent quality and efficient logistics support.",
  overview:
    "Kanani Services Limited provides reliable HMS supply alongside cast iron and structural scrap streams. From procurement to processing, our team supports industrial buyers with transparent sourcing, quality sorting, and dependable dispatch schedules.",
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
