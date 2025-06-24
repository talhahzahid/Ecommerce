import { Form } from "react-router-dom";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";
import image5 from "../assets/5.jpg";
import image6 from "../assets/6.jpg";
import image7 from "../assets/7.jpg";
import image8 from "../assets/8.jpg";
import image9 from "../assets/8.jpg";
import a from "../assets/a.jpg";
import b from "../assets/b.jpg";
import c from "../assets/c.jpg";
import d from "../assets/d.jpg";
import e from "../assets/e.jpg";
import f from "../assets/f.jpg";
import g from "../assets/g.jpg";
import h from "../assets/h.jpg";
import i from "../assets/i.jpg";
import j from "../assets/j.jpg";
import k from "../assets/k.jpg";
import Men_1 from "../assets/Men_1.jpg";
import Men_2 from "../assets/Men_2.jpg";
import Men_3 from "../assets/Men_3.jpg";
import Men_4 from "../assets/Men_4.jpg";
import men_a1 from "../assets/5ASFW210-GYO_1.jpg";
import men_a2 from "../assets/5ASFW210-GYO_2.jpg";
import men_a3 from "../assets/5ASFW210-GYO_3.jpg";
import men_a4 from "../assets/5ASFW210-GYO_4.jpg";
import men_b1 from "../assets/5ASHW227-CHR_1.jpg";
import men_b2 from "../assets/5ASHW227-CHR_2.jpg";
import men_b3 from "../assets/5ASHW227-CHR_3.jpg";
import men_b4 from "../assets/5ASHW227-CHR_4.jpg";
import men_c1 from "../assets/5CSHT451-RTO_1.jpg";
import men_c2 from "../assets/5CSHT451-RTO_2.jpg";
import men_c3 from "../assets/5CSHT451-RTO_3.jpg";
import men_c4 from "../assets/5CSHT451-RTO_4.jpg";
import men_d1 from "../assets/5CSHT476-BRN_1_400a5612-2125-43aa-b0a0-cf733f568cd0.jpg";
import men_d2 from "../assets/5CSHT476-BRN_2_789efc8b-bc88-4474-a0af-325415c6ba5f.jpg";
import men_d3 from "../assets/5CSMS467-BRN_1.jpg";
import men_e1 from "../assets/5CSHP468-STN_3.jpg";
import men_e2 from "../assets/5CSHP468-STN_2.jpg";
import men_e3 from "../assets/5CSHP468-STN_5.jpg";
import men_e4 from "../assets/5CSHP468-STN_6.jpg";
import men_f1 from "../assets/5CSHP468-STN_6.jpg";
import men_f2 from "../assets/5CSHP468-STN_6.jpg";
import men_f3 from "../assets/5CSHP468-STN_6.jpg";
import men_f4 from "../assets/5CSHP468-STN_6.jpg";
import men_g1 from "../assets/5CSFW491-BRN_1.jpg";
import men_g2 from "../assets/5CSFW491-BRN_2.jpg";
import men_g3 from "../assets/5CSFW491-BRN_3.jpg";
import men_g4 from "../assets/5CSFW491-BRN_4.jpg";
import men_h1 from "../assets/5CSHP481-BLK_2_93ef1234-f503-4b69-860e-30cdb8f0ac89.jpg";
import men_h2 from "../assets/5CSHP481-BLK_3_377b7ab2-9b8f-459a-95f3-c2b11dbb1506.jpg";
import men_h3 from "../assets/5CSHP481-BLK_4_7b3694d5-d7aa-4b6c-ae89-66bebe27e09d.jpg";
import women_a1 from "../assets/U01-25067-07A-1.jpg";
import women_a2 from "../assets/U01-25067-07B-2.jpg";
import women_a3 from "../assets/U01-25067-07B-5.jpg";
import women_a4 from "../assets/U01-25067-07B-6_Thumbnail.jpg";
import women_b1 from "../assets/U01-25067-07A-1.jpg";
import women_b2 from "../assets/U01-25067-07A-6_Thumbnail.jpg";
import women_b3 from "../assets/U01-25067-07A-7.jpg";
import women_b4 from "../assets/U01-25067-07A-8.jpg";
import women_b5 from "../assets/U01-25067-07A-9.jpg";

export const products = [
  {
    id: 1,
    name: "SHIRT",
    description: "Bright and fun t-shirt for kids.",
    category: "Men",
    image: [Men_1, Men_2, Men_3, Men_4],
    size: ["XS", "S", "M"],
    subCategory: "T-Shirts",
    pif: false,
    bestseller: true,
    price: 100,
  },
  {
    id: 2,
    name: "Men's Hoodie",
    description: "Warm and stylish hoodie for men.",
    category: "Men",
    image: [men_a1, men_a2, men_a3, men_a4],
    size: ["M", "L", "XL"],
    subCategory: "T-Shirts",
    pif: false,
    bestseller: false,
    price: 100,
  },
  {
    id: 3,
    name: "Women's Jeans",
    description: "Comfortable and durable jeans for women.",
    category: "Women",
    image: image3,
    size: ["S", "M", "L"],
    subCategory: "Jeans",
    pif: true,
    bestseller: true,
    price: 100,
  },
  {
    id: 4,
    name: "Toddler Pajamas",
    description: "Soft pajamas set for toddlers.",
    category: "Men",
    image: [men_b1, men_b2, men_b3, men_b4],
    size: ["2T", "3T", "4T"],
    subCategory: "T-Shirts",
    pif: false,
    bestseller: false,
    price: 100,
  },
  {
    id: 5,
    name: "SHIRTS",
    description: "Trendy t-shirt with graphic print.",
    category: "Men",
    image: [men_c1, men_c2, men_c3, men_c4],
    size: ["S", "M", "L", "XL"],
    subCategory: "T-Shirts",
    pif: true,
    bestseller: true,
    price: 100,
  },
  {
    id: 6,
    name: "Sports Shorts",
    description: "Lightweight shorts for training.",
    category: "Men",
    image: [men_d1, men_d2, men_d3],
    size: ["M", "L", "XL"],
    subCategory: "Shorts",
    pif: false,
    bestseller: false,
    price: 100,
  },
  {
    id: 7,
    name: "Denim Jacket",
    description: "Classic denim jacket with a modern fit.",
    category: "Men",
    image: [men_e1, men_e2, men_e3, men_e4],
    size: ["S", "M", "L"],
    subCategory: "Jackets",
    pif: true,
    bestseller: true,
    price: 100,
  },
  {
    id: 8,
    name: "Baby Romper",
    description: "One-piece romper for babies.",
    category: "Men",
    image: [men_g1, men_g2, men_g3, men_g4],
    size: ["NB", "0-3M", "3-6M"],
    subCategory: "Babywear",
    pif: false,
    bestseller: true,
    price: 100,
  },
  {
    id: 9,
    name: "Summer Dress",
    description: "Light and breezy dress perfect for summer.",
    category: "Men",
    image: [men_f1, men_f2, men_f3, men_f4],
    size: ["S", "M", "L"],
    subCategory: "Dresses",
    pif: true,
    bestseller: false,
    price: 100,
  },
  {
    id: 10,
    name: "Lawn Suits A",
    description: "Multi-pocket pants for utility and style.",
    category: "Women",
    image: [women_a1, women_a2, women_a3, women_a4],
    size: ["M", "L", "XL", "XXL"],
    subCategory: "Pants",
    pif: false,
    bestseller: false,
    price: 100,
  },
  {
    id: 11,
    name: "Lawn Suits B",
    description: "Multi-pocket pants for utility and style.",
    category: "Women",
    image: [women_a1, women_a2, women_a3, women_a4],
    size: ["M", "L", "XL", "XXL"],
    subCategory: "Pants",
    pif: false,
    bestseller: false,
    price: 100,
  },
  {
    id: 12,
    name: "Lawn Suits C",
    description: "Multi-pocket pants for utility and style.",
    category: "Women",
    image: [women_b1, women_b2, women_b3, women_b4],
    size: ["M", "L", "XL", "XXL"],
    subCategory: "Pants",
    pif: false,
    bestseller: false,
    price: 100,
  },
  {
    id: 13,
    name: "Lawn Suits D",
    description: "Multi-pocket pants for utility and style.",
    category: "Women",
    image: d,
    size: ["M", "L", "XL", "XXL"],
    subCategory: "Pants",
    pif: false,
    bestseller: false,
    price: 100,
  },
  {
    id: 14,
    name: "Lawn Suits E",
    description: "Multi-pocket pants for utility and style.",
    category: "Women",
    image: e,
    size: ["M", "L", "XL", "XXL"],
    subCategory: "Pants",
    pif: false,
    bestseller: false,
    price: 100,
  },
  {
    id: 15,
    name: "Lawn Suits F",
    description: "Multi-pocket pants for utility and style.",
    category: "Women",
    image: f,
    size: ["M", "L", "XL", "XXL"],
    subCategory: "Pants",
    pif: false,
    bestseller: false,
    price: 100,
  },
  {
    id: 16,
    name: "Lawn Suits G",
    description: "Multi-pocket pants for utility and style.",
    category: "Women",
    image: g,
    size: ["M", "L", "XL", "XXL"],
    subCategory: "Pants",
    pif: false,
    bestseller: false,
    price: 100,
  },
  {
    id: 17,
    name: "Lawn Suits H",
    description: "Multi-pocket pants for utility and style.",
    category: "Women",
    image: h,
    size: ["M", "L", "XL", "XXL"],
    subCategory: "Pants",
    pif: false,
    bestseller: false,
    price: 100,
  },
  {
    id: 18,
    name: "Lawn Suits I",
    description: "Multi-pocket pants for utility and style.",
    category: "Women",
    image: i,
    size: ["M", "L", "XL", "XXL"],
    subCategory: "Pants",
    pif: false,
    bestseller: false,
    price: 100,
  },
  {
    id: 19,
    name: "Lawn Suits J",
    description: "Multi-pocket pants for utility and style.",
    category: "Women",
    image: j,
    size: ["M", "L", "XL", "XXL"],
    subCategory: "Pants",
    pif: false,
    bestseller: false,
    price: 100,
  },
  {
    id: 20,
    name: "Lawn Suits K",
    description: "Multi-pocket pants for utility and style.",
    category: "Women",
    image: image1,
    size: ["M", "L", "XL", "XXL"],
    subCategory: "Pants",
    pif: false,
    bestseller: false,
    price: 100,
  },
  {
    id: 21,
    name: "Lawn Suits K",
    description: "Multi-pocket pants for utility and style.",
    category: "Women",
    image: [men_h1, men_h2, men_h3],
    size: ["M", "L", "XL", "XXL"],
    subCategory: "Pants",
    pif: false,
    bestseller: false,
    price: 100,
  },
  {
    id: 22,
    name: "Graphic Tee",
    description: "Stylish printed t-shirt for casual wear.",
    category: "Men",
    image: [image4, image5],
    size: ["S", "M", "L"],
    subCategory: "T-Shirts",
    pif: false,
    bestseller: true,
    price: 120,
  },
  {
    id: 23,
    name: "Winter Hoodie",
    description: "Fleece-lined hoodie for winter warmth.",
    category: "Men",
    image: [image6, image7],
    size: ["M", "L", "XL"],
    subCategory: "Hoodies",
    pif: true,
    bestseller: false,
    price: 150,
  },
  {
    id: 24,
    name: "Casual Blouse",
    description: "Light blouse perfect for summer outings.",
    category: "Women",
    image: [image2],
    size: ["S", "M", "L"],
    subCategory: "Tops",
    pif: true,
    bestseller: true,
    price: 130,
  },
  {
    id: 25,
    name: "Jogger Pants",
    description: "Comfortable pants for everyday wear.",
    category: "Men",
    image: [image8],
    size: ["M", "L", "XL"],
    subCategory: "Pants",
    pif: false,
    bestseller: false,
    price: 140,
  },
  {
    id: 26,
    name: "Denim Shorts",
    description: "Trendy denim shorts for women.",
    category: "Women",
    image: [image9],
    size: ["S", "M", "L"],
    subCategory: "Shorts",
    pif: true,
    bestseller: true,
    price: 110,
  },
  {
    id: 27,
    name: "Plaid Shirt",
    description: "Classic plaid shirt with button-down collar.",
    category: "Men",
    image: [Men_2, Men_3],
    size: ["M", "L", "XL"],
    subCategory: "Shirts",
    pif: true,
    bestseller: false,
    price: 160,
  },
  {
    id: 28,
    name: "Formal Pants",
    description: "Office-ready slim fit pants.",
    category: "Men",
    image: [b],
    size: ["M", "L", "XL"],
    subCategory: "Pants",
    pif: false,
    bestseller: false,
    price: 180,
  },
  {
    id: 29,
    name: "Kurti Set",
    description: "Traditional kurti with embroidered details.",
    category: "Women",
    image: [k],
    size: ["M", "L", "XL"],
    subCategory: "Kurtis",
    pif: true,
    bestseller: true,
    price: 200,
  },
  {
    id: 30,
    name: "Oversized Tee",
    description: "Trendy oversized t-shirt for a comfy fit.",
    category: "Women",
    image: [c, d],
    size: ["M", "L"],
    subCategory: "T-Shirts",
    pif: true,
    bestseller: false,
    price: 115,
  },
  {
    id: 31,
    name: "Kids Printed T-Shirt",
    description: "Colorful t-shirt for playful days.",
    category: "Kids",
    image: [image3, image5],
    size: ["S", "M"],
    subCategory: "T-Shirts",
    pif: false,
    bestseller: true,
    price: 90,
  },
];
