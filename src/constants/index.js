import { toilet, kitchen, sofa, dalton_bathroom_1, dalton_kitchen, barrow_living_room } from "../assets";

export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "properties",
        title: "Properties",
    },
    {
        id: "about",
        title: "About",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

export const features = [
  {
    id: "feature-1",
    icon: toilet,
    title: "En-Suite Bathrooms",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat",
  },
  {
    id: "feature-2",
    icon: kitchen,
    title: "Modern Kitchens",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat",
  },
  {
    id: "feature-3",
    icon: sofa,
    title: "Cosy Living Rooms",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat",
  },
];

export const property_slides = [
  {
    id: "en-suite bathroom",
    image: dalton_bathroom_1,
  },
  {
    id: "kitchen",
    image: dalton_kitchen,
  },
  {
    id: "living room",
    image: barrow_living_room,
  }
];