import {
  CalendarIcon,
  MapPinIcon,
  CurrencyRupeeIcon,
  ClockIcon
} from "@heroicons/react/24/solid";

export const featuresData = [
  {
    color: "gray",
    title: "Date and Time",
    icon: CalendarIcon,
    description:
      "Monday, January 15 · 6 - 10pm EST",
  },
  {
    color: "blue",
    title: "Location",
    icon: MapPinIcon,
    description:
      "180 Orchard Street 15th Floor New York, NY 10002 United States",
  },
  {
    color: "orange",//or this can be a timing card
    title: "Timings",
    icon: ClockIcon,
    description:
      "4 hours",
  },
];

export default featuresData;
