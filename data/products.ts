export type ProductCategoryId = "scrap" | "steel" | "cement" | "hardware";

export const productCategoryIds: ProductCategoryId[] = ["scrap", "steel", "cement", "hardware"];

export function isProductCategory(value: string): value is ProductCategoryId {
  return productCategoryIds.includes(value as ProductCategoryId);
}

export type CatalogProduct = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategoryId;
  image: string;
  description: string;
  spec: string;
};

const imageScrapSteel =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBXCIN_i77zC2-U6_pSxIX_jIWnn5zQqABlqV7w_8UdcWw2HXLMDe2a73D8Or-2IRYkJRC6GHrUY4t-WFreb6bUseOi39Hr67iCRZcklQs2a9qmcTxvjqHCOWNE--m4YeRYtYclINCrZOgke0LkpP82FyVa-g4bIgCvUBnU8HWYCpnpIR5KV1OPfDeTxPMESDdq0t2KHFHyZfWwcqVbnKVte3zgl0ASGW_u-KQ5A7SHn5aGLsB5NePe93gP1aomVcVG4gbBizeHxnWI";
const imageCopper =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBBYGgS7IHnns73HovOAIIreLoPP0-iALDX9IwU0plMYSIDFeleBYJhnalsYekqczYFbbvlV71qqPrvM9cvaGfwe75Q4ORdo53xEz4Zl3vCvgboCkjeEQCc9l5M9FTJNcli1xT8aH7duj9IoQNeSZG1G4I6NDX5-piux-gTLi9vXpoHZOBizxui-b2f-9un7CRXADiqfVX602mnKfcB76GIpSFrO7RFaHu8cKalsVq5gYVODolNhwWtIgUcdyReexN4xHV_DqF8saY_";
const imageAluminum =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAsEtlepplJ6mw_D9ug1ecMZ0ky9FKF7P69nu6JCPeAsN0aWUCXe7C2jA_xpBll6ZQzmeNmBxFq7jGWSNTDuYY_SfhNMlqE6KtxLohM-1ulZKjgE4w6TWmtr6d5ePukAcIYpKI5h-NlNm2r-gZAy29QXuYoaup6Ie10Yb28RZYDewkQ1Qn7NkZm9FveGe4W-2jkVPnwg-ioRyA7nLlt5nA5UtT-btUOHWORQzMJRjd6VHDc4OfNd-tHzgVghVqRxVi2Ni71DU5KzSZt";
const imageStainless =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC3PZYE8vS1VsCZESjsBmRxj9AgcIH2WNiCgJJypcSY4xyw4sCwl3__lF3kQYXcBE4VOJZmN7FdR7vvfnSl2vsRbKOPYkt2xmmF5A7GaJajUGVSX_dZTZ1XwcqMTeS9sbE_RByQNREFn8s5Cej4AfEuVj795vrTvZLxbX0bCwk3bkrqu2C0prDiUf0hLValAGimB_jqWHXgzsadM-9Y8Y31N6oduqpxVPOc-ShM6oN_kDAPBiX6NliQphyhrnMD4KReh5bkaStNuY7N";
const imageBrass =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB7yQoqgH5zL4bk4YXEemv_vcahMjk-13nDPAdlWkqv9uo83__PEafSr2rwAmXlWkdXA9uemN0sEkygNQUeHwpxjqs324A9teY1C8YYS4n5VuKhqiAG2XpNJqt6XPe9xbR-lB3QdyF2R3utdGaVJo-6iZ6vxq5M4nuyevllE_x-iqcZUQ8hGDK-TBvGN_Tszzx1iY0dgGDgsGZTKq7ngY0bZJcb7-SYOg-_PeK-fB3M-iaj_e-y3QLLGij7LSNUPtpmpKCiQCyuJmSr";
const imageSteel =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDjvAn9SbafEwGUsve5C8c_aSCYGWPeuQlttatT-Jm70yjBqxyk6MSUam91zGe5UNbgLKcVB4WbouGDjYjJyhCgllssvQC1H51yCqldsUcBug5pclS7JeIzAr7SOepz05taYzGpzP36-5uN8hSr40a-eCpS5e-ztiA6QspO9ntwFMYpgzPIwjS23VYcTvwx3e6NjQ_VTyqwaiOFKMpbUg7oyv23NotfSCXvQXJN2zo8Q00eS7S6jjHHolsU-RaCMXcwxtDvQd6cjuLj";
const imageCement =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD7ahCr8hFHGKBMe7VLmP2oKg7gBdEM1lo2fQr7FxD0WktDO9498N1xGRAMHbQb-rPAL0HzcZTCJ3d2PQzzz0qN1erPJh6bC608p2EPk0a3iNEd5wUEjaAu-S9bSExOktHSRo-6F1m9xuzgTewkO0u8e5b57vbI586oMpvbQLwep500w6PqG9aUdncCRf1mQrKf2kUp5uoQ9MZKGrpJh0L7CmvDjNzWjevJiHWsTYXk_wsXsarSmrhSxHLNux8PuHzzYmekvk9S9hao";
const imageHardware =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCz8Tddr83Lrz8iEd5qRFd_HPiHMLwGa1YXbt6vSCsjNZprNlJu_BVsZx1-DifX-q8OnrWJKJTg10yasEdoOam0siHjJO_s2XlPIwLZd6QGI4e3aG_yRWW2e0Il54UdTm-QZDClkx2yhv_Ais0NV-hTrSfUsu4hMift0OYNRRXJqdJvBYS-W5p7AeELYDpTHq0fGWSeVwnxwd5I2JlLm4TdF5M89VVjaeExcXg0k7UNVtVSMaSVi8Bf_D9hHKxhgUzEVitRNy3CW212";

export const products: CatalogProduct[] = [
  {
    id: "scrap-metal",
    slug: "industrial-scrap-steel",
    name: "Industrial Scrap Steel",
    category: "scrap",
    image: imageScrapSteel,
    description:
      "High-grade processed steel scrap optimized for global manufacturing and efficient recycling streams.",
    spec: "ISRI 200-206, furnace-ready",
  },
  {
    id: "grade-a-copper",
    slug: "grade-a-copper-scrap",
    name: "Grade A Copper Scrap",
    category: "scrap",
    image: imageCopper,
    description:
      "Clean bright copper wire bundles for precision recycling, smelting, and electrical-grade recovery.",
    spec: "Bright wire, high purity",
  },
  {
    id: "aluminum-6063",
    slug: "aluminum-6063-scrap",
    name: "Aluminum 6063 Scrap",
    category: "scrap",
    image: imageAluminum,
    description:
      "Sorted 6063 extrusion off-cuts for downstream remelt operations and fabrication supply chains.",
    spec: "Extrusion cut-offs, low contamination",
  },
  {
    id: "stainless-steel-304-316",
    slug: "stainless-steel-304-316",
    name: "Stainless Steel (304/316)",
    category: "scrap",
    image: imageStainless,
    description:
      "Marine-grade stainless scrap blends suitable for corrosion-resistant steel production batches.",
    spec: "304/316 mixed scrap streams",
  },
  {
    id: "mixed-brass",
    slug: "mixed-brass-scrap",
    name: "Mixed Brass Scrap",
    category: "scrap",
    image: imageBrass,
    description:
      "Mixed brass grades sorted for alloy balancing and component remanufacturing requirements.",
    spec: "Honey and ebony grades",
  },
  {
    id: "tmt-bars",
    slug: "tmt-rebar-grade-500",
    name: "TMT Rebar Grade 500",
    category: "steel",
    image: imageSteel,
    description:
      "High-strength reinforcement bars for residential, commercial, and civil infrastructure projects.",
    spec: "Grade 500, high tensile",
  },
  {
    id: "structural-beams",
    slug: "structural-h-beams",
    name: "Structural H-Beams",
    category: "steel",
    image: imageSteel,
    description:
      "Fabrication-ready H-beams designed for large-span structures and industrial load-bearing frames.",
    spec: "Wide flange sections, mill-certified",
  },
  {
    id: "steel-plates",
    slug: "mild-steel-plates",
    name: "Mild Steel Plates",
    category: "steel",
    image: imageSteel,
    description:
      "Versatile plate stock for construction, equipment fabrication, and custom metal works.",
    spec: "Multiple thickness options",
  },
  {
    id: "opc-cement",
    slug: "ordinary-portland-cement-42-5",
    name: "Ordinary Portland Cement 42.5",
    category: "cement",
    image: imageCement,
    description:
      "Reliable OPC for concrete works, structural casting, and high-volume building developments.",
    spec: "42.5 strength class",
  },
  {
    id: "rapid-set-cement",
    slug: "rapid-set-cement",
    name: "Rapid Set Cement",
    category: "cement",
    image: imageCement,
    description:
      "Fast-curing cement blend engineered for repair works, precast elements, and quick turnarounds.",
    spec: "Quick-setting formulation",
  },
  {
    id: "high-tensile-bolts",
    slug: "high-tensile-bolts",
    name: "High Tensile Bolts",
    category: "hardware",
    image: imageHardware,
    description:
      "Industrial fastening solutions for steel frames, equipment assembly, and site installations.",
    spec: "Galvanized and black finish",
  },
  {
    id: "industrial-pipe-fittings",
    slug: "industrial-pipe-fittings",
    name: "Industrial Pipe Fittings",
    category: "hardware",
    image: imageHardware,
    description:
      "Durable elbows, couplings, and connectors for water, process, and compressed air networks.",
    spec: "Threaded and welded options",
  },
];

export const categoryLabels: Record<ProductCategoryId, string> = {
  scrap: "Scrap Materials",
  steel: "Steel Products",
  cement: "Cement Supply",
  hardware: "Hardware Supplies",
};

export type ProductResource = {
  title: string;
  size: string;
  kind: "pdf" | "sheet" | "spec";
};

export type ProductSpec = {
  property: string;
  value: string;
};

export type ProductFeature = {
  title: string;
  description: string;
  icon: "verified" | "eco";
};

export type RelatedProduct = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
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

const defaultFeatures: ProductFeature[] = [
  {
    title: "Quality Assurance",
    description: "Rigorous inspection and sorting process.",
    icon: "verified",
  },
  {
    title: "Sustainable Sourcing",
    description: "Responsible procurement and verified material origin.",
    icon: "eco",
  },
];

const defaultResources: ProductResource[] = [
  { title: "Product Catalog 2024", size: "PDF - 4.2 MB", kind: "pdf" },
  { title: "Safety Data Sheet (SDS)", size: "PDF - 1.1 MB", kind: "sheet" },
  { title: "Technical Data Spec", size: "PDF - 0.8 MB", kind: "spec" },
];

const categoryApplications: Record<ProductCategoryId, string[]> = {
  scrap: [
    "Electric Arc Furnaces (EAF)",
    "Scrap Processing Plants",
    "Structural Steel Manufacturing",
    "Automotive Component Recycling",
  ],
  steel: [
    "High-rise Building Reinforcement",
    "Bridge and Flyover Fabrication",
    "Industrial Plant Structures",
    "Heavy Equipment Frames",
  ],
  cement: [
    "Foundation and Slab Casting",
    "Block and Precast Production",
    "Road and Pavement Works",
    "Repair and Rehabilitation Projects",
  ],
  hardware: [
    "Site Assembly and Fastening",
    "Mechanical and Plumbing Works",
    "Equipment Installation",
    "General Construction Support",
  ],
};

const categorySpecs: Record<ProductCategoryId, ProductSpec[]> = {
  scrap: [
    { property: "Material Class", value: "Ferrous and non-ferrous sorted scrap" },
    { property: "Processing", value: "Cut, cleaned, and grade-separated" },
    { property: "Supply Mode", value: "Bulk load or containerized dispatch" },
    { property: "Inspection", value: "Visual and magnet test before loading" },
    { property: "Traceability", value: "Batch-level dispatch records" },
  ],
  steel: [
    { property: "Standard", value: "Mill-certified to common ASTM/BS ranges" },
    { property: "Surface", value: "As-rolled or coated depending on item" },
    { property: "Length / Size", value: "Custom-cut or stock lengths available" },
    { property: "Supply Mode", value: "Bundle, pallet, or truck load" },
    { property: "Quality Check", value: "Heat number and dimensional verification" },
  ],
  cement: [
    { property: "Cement Type", value: "OPC and performance blended cements" },
    { property: "Packaging", value: "Bagged and bulk tanker delivery" },
    { property: "Strength Class", value: "42.5 and equivalent regional grades" },
    { property: "Storage Guidance", value: "Dry, covered, moisture-protected" },
    { property: "Quality Check", value: "Factory test certificates on request" },
  ],
  hardware: [
    { property: "Material", value: "Carbon steel, stainless, and brass variants" },
    { property: "Finish", value: "Galvanized, zinc-coated, or plain" },
    { property: "Standard", value: "Common metric and imperial sizes" },
    { property: "Supply Mode", value: "Boxed sets, cartons, or palletized" },
    { property: "Quality Check", value: "Thread and dimensional fit verification" },
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

function buildPlaceholderDetail(item: CatalogProduct): ProductDetailEntry {
  return {
    slug: item.slug,
    title: item.name,
    breadcrumbs: ["Catalog", categoryLabels[item.category], item.name],
    badge: item.category === "scrap" ? "Premium Grade" : "Ready Stock",
    heroImage: item.image,
    summary:
      `${item.description} This page uses working placeholder content until final product ` +
      "technical sheets are uploaded.",
    overview:
      `${item.name} is supplied by Kanani Services Limited with dependable lead times and ` +
      "quality-first inspection. Specifications shown here are indicative placeholder values and " +
      "will be refined to exact manufacturer data during catalog finalization.",
    features: defaultFeatures,
    applications: categoryApplications[item.category],
    specifications: categorySpecs[item.category],
    resources: defaultResources,
    relatedProducts: getRelatedProducts(item),
  };
}

const industrialScrapSteel: ProductDetailEntry = {
  slug: "industrial-scrap-steel",
  title: "Industrial Scrap Steel",
  breadcrumbs: ["Catalog", "Metals", "Industrial Scrap Steel"],
  badge: "Premium Grade",
  heroImage: imageScrapSteel,
  summary:
    "High-grade processed steel scrap optimized for global manufacturing. Our premium selection supports efficient recycling streams and high-yield smelting operations.",
  overview:
    "Kanani Services Limited provides consistent, high-purity industrial scrap steel sourced from primary manufacturing and demolition projects. Our processing facility ensures that contaminants are removed, offering a furnace-ready product that minimizes slag and energy consumption during melting.",
  features: defaultFeatures,
  applications: categoryApplications.scrap,
  specifications: [
    { property: "ISRI Grade", value: "200-206 (Heavy Melting Steel)" },
    { property: "Iron (Fe) Content", value: "98.5% Minimum" },
    { property: "Bulk Density", value: "75 - 100 lb/ft^3" },
    { property: "Dimensions", value: "Max 5ft x 1.5ft" },
    { property: "Origin", value: "Industrial Cut-offs / Structural" },
  ],
  resources: defaultResources,
  relatedProducts: getRelatedProducts(products[0]),
};

export const productDetailsBySlug: Record<string, ProductDetailEntry> = {
  "industrial-scrap-steel": industrialScrapSteel,
  "scrap-metal": industrialScrapSteel,
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

  return industrialScrapSteel;
}
