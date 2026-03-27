export type ProductMenuItem = {
  label: string;
  href: string;
};

export type ProductMenuSection = {
  title: string;
  href: string;
  items: ProductMenuItem[];
};

export const productMenu: ProductMenuSection[] = [
  {
    title: "Scrap Materials",
    href: "/products?category=scrap",
    items: [
      { label: "Heavy Melting Scrap (HMS)", href: "/products/heavy-melting-scrap-hms" },
      { label: "Cast Iron & Structural Scrap", href: "/products/cast-iron-structural-scrap" },
      {
        label: "Reliable Scrap Metal Purchasing",
        href: "/products/reliable-scrap-metal-purchasing",
      },
      { label: "Efficient Scrap Processing", href: "/products/efficient-scrap-processing" },
    ],
  },
  {
    title: "Steel Products",
    href: "/products?category=steel",
    items: [
      {
        label: "TMT Bars & Reinforcement Steel",
        href: "/products/tmt-bars-reinforcement-steel",
      },
      {
        label: "Iron Sheets (Mabati) & Roofing Materials",
        href: "/products/iron-sheets-mabati-roofing-materials",
      },
      {
        label: "Structural Steel, Beams & Sections",
        href: "/products/structural-steel-beams-sections",
      },
      { label: "TMT B500 Steel Bars", href: "/products/tmt-b500-steel-bars" },
      { label: "Wire Rod", href: "/products/wire-rod" },
      { label: "Hollow Sections", href: "/products/hollow-sections" },
      { label: "Black Pipes", href: "/products/black-pipes" },
      { label: "Angle Iron", href: "/products/angle-iron" },
      { label: "Flat Bars", href: "/products/flat-bars" },
      { label: "HR Plates", href: "/products/hr-plates" },
      { label: "Z-Purlins", href: "/products/z-purlins" },
      { label: "Chequered Plates", href: "/products/chequered-plates" },
    ],
  },
  {
    title: "Roofing Materials",
    href: "/products?category=roofing",
    items: [
      { label: "Aluzinki Corrugated Sheets", href: "/products/aluzinki-corrugated-sheets" },
      { label: "Rangi Corrugated Sheets", href: "/products/rangi-corrugated-sheets" },
      { label: "IT4 and IT5", href: "/products/it4-it5-roofing-sheets" },
      { label: "Tiles", href: "/products/roofing-tiles" },
    ],
  },
  {
    title: "Cement Supply",
    href: "/products?category=cement",
    items: [
      {
        label: "Dangote Cement (Authorized Distributor)",
        href: "/products/dangote-cement-authorized-distributor",
      },
      { label: "Bulk & Bagged Cement Supply", href: "/products/bulk-bagged-cement-supply" },
      {
        label: "Large Inventory in Secure Warehouses",
        href: "/products/secure-warehouse-cement-stock",
      },
      { label: "Fast & Reliable Delivery", href: "/products/fast-reliable-cement-delivery" },
    ],
  },
  {
    title: "Hardware Suppliers",
    href: "/products?category=hardware",
    items: [
      { label: "Timber & Construction Wood", href: "/products/timber-construction-wood" },
      { label: "Marine & Gypsum Boards", href: "/products/marine-gypsum-boards" },
      { label: "Roofing & Finishing Materials", href: "/products/roofing-finishing-materials" },
      {
        label: "Complete Range of Building Hardware",
        href: "/products/complete-range-building-hardware",
      },
    ],
  },
  {
    title: "Plastic Products",
    href: "/products?category=plastic",
    items: [
      { label: "Water Tank - TriTank", href: "/products/water-tank-tritank" },
      { label: "UPVC Borewell Pipes", href: "/products/upvc-borewell-pipes" },
      { label: "UPVC Pipes", href: "/products/upvc-pipes" },
      { label: "HDPE Pipes", href: "/products/hdpe-pipes" },
      { label: "PPR Pipes", href: "/products/ppr-pipes" },
      {
        label: "Plastic Recycling - PP & PE Pellets",
        href: "/products/plastic-recycling-pp-pe-pellets",
      },
      {
        label: "Color-Sorted Plastic Pellets",
        href: "/products/colored-plastic-pellets",
      },
      { label: "Black, Yellow & Green Streams", href: "/products?category=plastic" },
      { label: "PP and PE Grade Supply", href: "/products?category=plastic" },
    ],
  },
];
