import { MdAnalytics, MdSafetyCheck, MdBook } from "react-icons/md";

const ourServices = [
  {
    icon: <MdSafetyCheck />,
    heading: "Security",
    detail:
      "Maintain your data with high security, and privacy, Because we are using JWT and bcrypt",
  },
  {
    icon: <MdAnalytics />,
    heading: "Comparison Tool",
    detail: "Compare Prices and Ratings of different products and services",
  },
  {
    icon: <MdBook />,
    heading: "Community Forum",
    detail: "Join our community forum to discuss your problems and solutions",
  },
];

export default ourServices;