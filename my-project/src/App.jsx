import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import RecipeList from "./components/RecipeList";

function App() {
  const faceRecipes = [
    {
      id: 1,
      title: "Hydrating Aloe Vera Mask",
      description:
        "A soothing and hydrating mask that calms irritated skin and adds a natural glow.",
      image:
        "https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/08/Aloe_Vera_1296x728-header-1-1-1296x728.jpg?w=1155&h=1528",
    },
    {
      id: 2,
      title: "Exfoliating Coffee Scrub",
      description:
        "An invigorating scrub that exfoliates dead skin cells and improves circulation.",
      image:
        "https://misswish.com/wp-content/uploads/2020/05/coffee-and-sugar-face-scrub-5.jpg",
    },
    {
      id: 3,
      title: "Brightening Turmeric Mask",
      description:
        "A brightening mask that reduces inflammation and evens skin tone.",
      image:
        "https://d1f34ajap1v5tm.cloudfront.net/image/7-Ways-To-Use-Turmeric-for-Glowing-Skin-Blog-Cover.jpg",
    },
    {
      id: 4,
      title: "Soothing Oatmeal Mask",
      description:
        "A calming mask that soothes irritated skin and provides gentle exfoliation.",
      image:
        "https://assets.vogue.in/photos/5d036afca9f58c7fdc1276a8/2:3/w_2560%2Cc_limit/oatmeal.jpg",
    },
    {
      id: 5,
      title: "Clarifying Green Tea Mask",
      description:
        "A detoxifying mask that provides antioxidants and reduces redness.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbnby6Dp9qAe509oVuK-kvkC3_CxCT6XuUtJOzoB9IUg&s",
    },
    {
      id: 6,
      title: "Moisturizing Avocado Mask",
      description:
        "A rich mask that deeply moisturizes and nourishes the skin.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRsisIRzXSjLJUQK2mnuUcc8h9LwRoFPkCl0aGDw4KRQ&s",
    },
    {
      id: 7,
      title: "Calming Cucumber Mask",
      description: "A refreshing mask that soothes and cools the skin.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr_gQp7yrNLVUWVy3xoYo8Qn4z-7sGx44cJEYBmI9lCg&s",
    },
    {
      id: 8,
      title: "Revitalizing Papaya Mask",
      description: "A rejuvenating mask that helps to revitalize dull skin.",
      image:
        "https://www.stylecraze.com/wp-content/uploads/2013/01/7-Papaya-Face-Packs-For-Glowing-Fair-And-Smooth-Skin-1.jpg",
    },
    {
      id: 9,
      title: "Detoxifying Charcoal Mask",
      description:
        "A purifying mask that helps to remove impurities and toxins.",
      image:
        "https://thecoconutmama.com/wp-content/uploads/2019/03/homemade-charcoal-mask-shut-scaled.webp",
    },
    {
      id: 10,
      title: "Anti-Aging Honey Mask",
      description: "A nourishing mask that helps to reduce the signs of aging.",
      image:
        "https://mindbodygreen-res.cloudinary.com/image/upload/c_fill,w_2000,h_1200,g_auto,fl_lossy,f_jpg/org/akeiercxcjr7ydfoe.jpg",
    },
  ];

  return (
    <>
      <Header />
      <Home />
      <RecipeList faceRecipes={faceRecipes} />
    </>
  );
}

export default App;
