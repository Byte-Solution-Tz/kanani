export type ContactLocation = {
  city: string;
  title: string;
  intro: string;
  image: string;
  branches: string[];
  mapHref: string;
  isHeadOffice?: boolean;
};

export const contactHighlights = [
  {
    label: "Main Office",
    value: "Mivumoni, Madale",
    detail: "Dar es Salaam, Tanzania",
  },
  {
    label: "Weekdays",
    value: "08:00 - 17:00",
    detail: "Standard office hours",
  },
  {
    label: "Weekend",
    value: "09:00 - 12:00",
    detail: "Half-day support",
  },
  {
    label: "Coverage",
    value: "4 Cities",
    detail: "Approx. 3 service points in each city",
  },
] as const;

export const contactLocations: ContactLocation[] = [
  {
    city: "Dar es Salaam",
    title: "Dar es Salaam Branches",
    intro: "Current listed branch locations in Dar es Salaam.",
    image: "/images/products/steel/steel_rebars.jpeg",
    branches: [
      "Mivumoni, Madale",
      "Kariakoo",
      "Mbezi Beach",
    ],
    mapHref: "https://www.google.com/maps/search/?api=1&query=Mivumoni+Madale+Dar+es+Salaam+Tanzania",
    isHeadOffice: true,
  },
  {
    city: "Dodoma",
    title: "Dodoma Branches",
    intro: "Current listed branch locations in Dodoma.",
    image: "/images/products/cement/dangote_cement.webp",
    branches: [
      "Area C",
      "Nzuguni",
      "Kisasa",
    ],
    mapHref: "https://www.google.com/maps/search/?api=1&query=Dodoma+Tanzania",
  },
  {
    city: "Moshi",
    title: "Moshi Branches",
    intro: "Current listed branch locations in Moshi.",
    image: "/images/products/hardware/roofing_material.webp",
    branches: [
      "Majengo",
      "Pasua",
      "Soweto",
    ],
    mapHref: "https://www.google.com/maps/search/?api=1&query=Moshi+Tanzania",
  },
  {
    city: "Bagamoyo",
    title: "Bagamoyo Branches",
    intro: "Current listed branch locations in Bagamoyo.",
    image: "/images/products/plastic_recycling/plastic_recycling_pe.jpg",
    branches: [
      "Dunda",
      "Kaole",
      "Mlandizi",
    ],
    mapHref: "https://www.google.com/maps/search/?api=1&query=Bagamoyo+Tanzania",
  },
];

export const contactCityOptions = contactLocations.map((location) => ({
  city: location.city,
  branches: location.branches,
  isHeadOffice: location.isHeadOffice ?? false,
}));

export const contactInquiryOptions = [
  "General Inquiry",
  "Request a Quote",
  "Bulk Supply Support",
  "Project Delivery Planning",
  "Careers",
] as const;
