export interface CarouselSlide {
  id: number;
  url: string;
  title: string;
  subtitle: string;
  alt: string;
}

export interface ServiceCard {
  id: number;
  title: string;
  description: string;
  iconName: "Hammer" | "Briefcase" | "Truck" | "Ruler";
  detailText: string;
  image: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: number;
  url: string;
  alt: string;
  caption?: string;
}

export type Language = "LV" | "RU";
