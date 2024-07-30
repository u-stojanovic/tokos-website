import {
  CakeIcon,
  CookieIcon,
  CandyIcon,
  PieChartIcon,
  UtensilsCrossedIcon,
} from "lucide-react";

export const CategoriesData = [
  {
    title: "Svi Proizvodi",
    description: "Pregledajte sve naše ukusne ponude.",
    image:
      "https://images.unsplash.com/photo-1447078806655-40579c2520d6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    count: 120,
    icon: <PieChartIcon className="w-8 h-8" />,
    link: "/products/category/svi-proizvodi",
  },
  {
    title: "Torte",
    categoryTitle: "cakes",
    description: "Uživajte u našim prelepim tortama.",
    image:
      "https://images.unsplash.com/photo-1655411880489-2f0d18785863?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    count: 50,
    icon: <CakeIcon className="w-8 h-8" />,
    link: "/products/category/torte",
  },
  {
    title: "Kolači",
    categoryTitle: "cookies",
    description: "Uživajte u našem asortimanu kolačića.",
    image:
      "https://images.unsplash.com/photo-1560910615-9eaa2e704e63?q=80&w=2525&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    count: 70,
    icon: <CookieIcon className="w-8 h-8" />,
    link: "/products/category/kolaci",
  },
  {
    title: "Poslastice",
    categoryTitle: "treats",
    description: "Pocastite se našim slatkim poslasticama.",
    image:
      "https://images.unsplash.com/photo-1499195333224-3ce974eecb47?q=80&w=2851&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    count: 40,
    icon: <CandyIcon className="w-8 h-8" />,
    link: "/products/category/poslastice",
  },
  {
    title: "Slani Ketering",
    categoryTitle: "saltyCatering",
    description: "Istražite naše slane ketering opcije.",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    count: 30,
    icon: <UtensilsCrossedIcon className="w-8 h-8" />,
    link: "/products/category/slani-ketering",
  },
];
