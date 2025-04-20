import { facebook, instagram, support, twitter, youtube } from "../assets/icons";
import {  customer1, customer2, modeldashtest, shoe4,flightdashboard,trafficdashboard,trafficmapdashboard } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Services" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: flightdashboard,
        bigShoe: flightdashboard,
    },
    {
        thumbnail: trafficdashboard,
        bigShoe: trafficdashboard,
    },
    {
        thumbnail: trafficmapdashboard,
        bigShoe: trafficmapdashboard,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
      imgURL: shoe4,
      name: "Real Estate & Property Management",
      rating: "4.1",
      price: "MRP: ₹16,670.65",
      keywords: ["sales tracking", "property availability", "occupancy rates", "ROI analysis", "agent performance"]
    },
    {
      imgURL: modeldashtest,
      name: "Smart City & Security / Surveillance",
      rating: "4.8",
      price: "MRP: ₹17,504.03",
      keywords: ["traffic monitoring", "surveillance", "public safety", "IoT sensors"]
    },
    {
      imgURL: modeldashtest,
      name: "Tourism & Hospitality",
      rating: "3.8",
      price: "MRP: ₹18,336.76",
      keywords: ["hotel occupancy", "tourist demographics", "customer satisfaction", "demand prediction"]
    },
    {
      imgURL: modeldashtest,
      name: "Healthcare & Clinics",
      rating: "3.4",
      price: "MRP: ₹19,169.49",
      keywords: ["patient tracking", "resource monitoring", "staff performance", "health KPIs"]
    },
  ];

export const services = [
    {
        imgURL: support,
        label: "Data Security",
        subtext: "Your information is protected with enterprise-grade security measures."
    },
    {
        imgURL: support,
        label: "Custom Integration",
        subtext: "Seamlessly connect with your existing systems and workflows."
    },
    {
        imgURL: support,
        label: "24/7 Expert Support",
        subtext: "Our team of dashboard specialists is always ready to assist you."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Fqsdqdsdsq1", link: "https://www.nike.com/in/w?q=air%20force%201&vst=air%20force%201" },
            { name: "Air Max 1", link: "https://www.nike.com/in/w?q=Air%20Max%201&vst=Air%20Max%201" },
            { name: "Air Jordan 1", link: "https://www.nike.com/in/w?q=Air%20Jordan%201&vst=Air%20Jordan%201" },
            { name: "Air Force 2", link: "https://www.nike.com/in/w?q=Air%20Force%202&vst=Air%20Force%202" },
            { name: "Nike Waffle Racer", link: "https://www.nike.com/in/w?q=Nike%20Waffle%20Racer&vst=Nike%20Waffle%20Racer" },
            { name: "Nike Cortez", link: "https://www.nike.com/in/w?q=Nike%20Cortez&vst=Nike%20Cortez" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "https://about.nike.com/en" },
            { name: "Delivery", link: "https://www.nike.com/in/help/a/shipping-delivery-gs" },
            { name: "Returns", link: "https://www.nike.com/in/help/a/returns-policy-gs" },
            { name: "Payment Options", link: "https://www.nike.com/in/help/a/payment-options-gs" },
            { name: "Contact Us On Nike.com Inquiries", link: "https://www.nike.com/in/help/#contact" },
            { name: "Contact Us On All Other Inquiries", link: "https://www.nike.com/in/help/a/india-consumer-care-policy" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "000 800 919 0566", link: "tel:000 800 919 0566" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo", link: "https://www.facebook.com/nike", color: "bg-blue" },
    { src: youtube, alt: "youtube logo", link: "https://www.youtube.com/user/nike", color: "bg-red-600" },
    { src: twitter, alt: "twitter logo", link: "https://twitter.com/Nike", color: "bg-slate-gray" },
    { src: instagram, alt: "instagram logo", link: "https://www.instagram.com/nike", color: "bg-coral-red" },
];
