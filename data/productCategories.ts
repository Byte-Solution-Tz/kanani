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
    title: "Scrap Materials",
    heroTitle: "Scrap Materials",
    description:
      "High-quality recycled metals sorted for foundries, fabricators, and industrial reuse. Consistent grading and dependable logistics for bulk orders.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBL3XeE0oMhxaJHoPJNqEDXc6X7_lKUT7_qz9eUtXpoXo-FMoovrQ6S7frdIuJjB0EqbhuKlaoxRwEoAo9t5VkBF538aNVgKUQ9MSXjqH9SmqqRRQEiMRkbyhFNTmGzyAJc7JIW3Q0yqtWoEkFOeOpzYzO89uYYI2smjQ51CQQQPXflZvmwfWS-ACIVnIN4rcj7-j6unph18hInngIhgvwlvQsMk3KKmLwfYpJKrrLNpWm2KxTFhQi_IC8SPKVEqaYb2DokfDUSaS2z",
  },
  {
    key: "steel",
    title: "Steel Products",
    heroTitle: "Steel Products",
    description:
      "Structural steel, rebars, and beams for high-strength projects. Designed for contractors and developers requiring quality-controlled material supply.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDjvAn9SbafEwGUsve5C8c_aSCYGWPeuQlttatT-Jm70yjBqxyk6MSUam91zGe5UNbgLKcVB4WbouGDjYjJyhCgllssvQC1H51yCqldsUcBug5pclS7JeIzAr7SOepz05taYzGpzP36-5uN8hSr40a-eCpS5e-ztiA6QspO9ntwFMYpgzPIwjS23VYcTvwx3e6NjQ_VTyqwaiOFKMpbUg7oyv23NotfSCXvQXJN2zo8Q00eS7S6jjHHolsU-RaCMXcwxtDvQd6cjuLj",
  },
  {
    key: "cement",
    title: "Cement Supply",
    heroTitle: "Cement Supply",
    description:
      "Premium Portland cement and specialized blends for foundation, structural, and finishing works. Available for both bulk and bagged requirements.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7ahCr8hFHGKBMe7VLmP2oKg7gBdEM1lo2fQr7FxD0WktDO9498N1xGRAMHbQb-rPAL0HzcZTCJ3d2PQzzz0qN1erPJh6bC608p2EPk0a3iNEd5wUEjaAu-S9bSExOktHSRo-6F1m9xuzgTewkO0u8e5b57vbI586oMpvbQLwep500w6PqG9aUdncCRf1mQrKf2kUp5uoQ9MZKGrpJh0L7CmvDjNzWjevJiHWsTYXk_wsXsarSmrhSxHLNux8PuHzzYmekvk9S9hao",
  },
  {
    key: "hardware",
    title: "Hardware Supplies",
    heroTitle: "Hardware Supplies",
    description:
      "Complete range of construction and industrial hardware including fasteners, fittings, and essential site tools to support every project stage.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCz8Tddr83Lrz8iEd5qRFd_HPiHMLwGa1YXbt6vSCsjNZprNlJu_BVsZx1-DifX-q8OnrWJKJTg10yasEdoOam0siHjJO_s2XlPIwLZd6QGI4e3aG_yRWW2e0Il54UdTm-QZDClkx2yhv_Ais0NV-hTrSfUsu4hMift0OYNRRXJqdJvBYS-W5p7AeELYDpTHq0fGWSeVwnxwd5I2JlLm4TdF5M89VVjaeExcXg0k7UNVtVSMaSVi8Bf_D9hHKxhgUzEVitRNy3CW212",
  },
  {
    key: "plastic",
    title: "Plastic Recycling",
    heroTitle: "Plastic Recycling",
    description:
      "Recycled PP and PE pellets supplied by polymer type or by color stream including black, yellow, and green.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsEtlepplJ6mw_D9ug1ecMZ0ky9FKF7P69nu6JCPeAsN0aWUCXe7C2jA_xpBll6ZQzmeNmBxFq7jGWSNTDuYY_SfhNMlqE6KtxLohM-1ulZKjgE4w6TWmtr6d5ePukAcIYpKI5h-NlNm2r-gZAy29QXuYoaup6Ie10Yb28RZYDewkQ1Qn7NkZm9FveGe4W-2jkVPnwg-ioRyA7nLlt5nA5UtT-btUOHWORQzMJRjd6VHDc4OfNd-tHzgVghVqRxVi2Ni71DU5KzSZt",
  },
];
