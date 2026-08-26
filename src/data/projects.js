export const projects = [
  {
    id: 1,
    title: "Smart Estate",
    description:
      "An intelligent real estate platform that revolutionizes property investment through cutting-edge machine learning. Features advanced price prediction algorithms, automated sentiment analysis of community reviews, AI-powered property verification through image recognition, and dynamic bidding systems that adapt to market conditions in real-time.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Flask",
      "TailwindCSS",
      "Machine Learning",
      "Python",
    ],
    deployment: "https://smartestate-fe.vercel.app/",
    iconKey: "brain",
    gradient: "from-blue-500 to-purple-600",
    features: [
      "ML Price Prediction",
      "Sentiment Analysis",
      "Image Verification",
      "Dynamic Bidding",
    ],
    images: [
      "/images/smart-estate-main.png",
      "/images/smart-estate-2.png",
      "/images/smart-estate-3.png",
    ],
  },
  {
    id: 2,
    title: "Workforce Management System",
    description:
      "A comprehensive cloud-based solution designed specifically for restaurant operations. This GPS-enabled system streamlines employee management by automatically tracking attendance, calculating work hours, and processing payroll with precision. The intuitive dashboard provides real-time insights into workforce productivity and operational efficiency.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "TailwindCSS",
      "GPS Integration",
      "AWS Cloud Services",
    ],
    deployment: "https://wms-frontend-omega.vercel.app/",
    iconKey: "clock",
    gradient: "from-green-500 to-teal-600",
    features: [
      "GPS Tracking",
      "Attendance Management",
      "Payroll Automation",
      "Cloud-based",
    ],
    images: [
      "/images/wms-main.png",
      "/images/wms-2.png",
      "/images/wms-3.png",
    ],
  },
  {
    id: 3,
    title: "PaddleHub",
    description:
      "PaddleHub is a comprehensive digital court booking system and management platform designed to streamline operations for paddle facilities with multiple courts. This intuitive platform simplifies the booking process for players while providing facility managers with powerful tools for court scheduling, user management, and real-time availability tracking. The system enhances the overall player experience with instant booking confirmations and seamless payment processing.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "TailwindCSS",
      "Framer Motion",
      "Cloudinary",
    ],
    deployment: "https://paddlehub-fe.vercel.app/",
    iconKey: "paddle",
    gradient: "from-cyan-500 to-blue-600",
    features: [
      "Real-time Court Booking",
      "Availability Tracking",
      "Multi-court Management",
      "User Authentication",
    ],
    images: [
      "/images/paddlehub-main.png",
      "/images/paddlehub-2.png",
      "/images/paddlehub-3.png",
    ],
  },
  {
    id: 4,
    title: "Fork & Flame",
    description:
      "A stunning restaurant website that combines elegant design with smooth functionality. Built with carefully crafted custom animations and intuitive user interactions, this platform showcases modern web development techniques while providing an exceptional dining experience online. The responsive design ensures seamless navigation across all devices.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "Custom CSS",
      "Animations",
      "JavaScript",
    ],
    deployment: "https://fork-flame-five.vercel.app/",
    iconKey: "utensils",
    gradient: "from-orange-500 to-red-600",
    features: [
      "Custom Animations",
      "Restaurant Management",
      "Interactive UI",
      "Responsive Design",
    ],
    images: ["/images/fork-flame-main.png"],
  },
  {
    id: 5,
    title: "Luxora Limos",
    description:
      "A modern, responsive limousine service website built with React and Vite, designed to deliver a premium user experience. It features an interactive booking form with validation and EmailJS integration for instant confirmations. Users can explore a luxury fleet with zoomable images, read testimonials, and find answers in the FAQ section. The clean design and smooth UI reflect the elegance and professionalism of a high-end transport service.",
    technologies: ["React", "Tailwind", "EmailJs", "Responsive Design"],
    deployment: "https://luxoralimos.com/",
    iconKey: "car",
    gradient: "from-slate-600 to-gray-800",
    features: [
      "EmailJS integration for booking confirmations",
      "Interactive booking with validation",
      "Responsive Design",
      "Luxury fleet display",
    ],
    images: ["/images/luxora-limos-main.png", "/images/luxora-limos-2.png"],
  },
];

export const getWebPPath = (pngPath) => {
  const fileName = pngPath.split("/").pop().replace(".png", ".webp");
  return `/images/compressed-images/${fileName}`;
};
