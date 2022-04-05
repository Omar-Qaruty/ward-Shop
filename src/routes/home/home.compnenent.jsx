import CategoriesContainer from "../../components/categories-container/cataegories-container.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl:
        "https://bloodborne.wiki.fextralife.com/file/Bloodborne/hunter_hat.jpg",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl:
        "https://i2-prod.mirror.co.uk/incoming/article13164070.ece/ALTERNATES/s1200d/0_Joey-Trbbiani-Matt-Le-Blanc.jpg",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl:
        "https://ireckonthat.files.wordpress.com/2012/06/oddshoes-8.jpg",
    },
    {
      id: 4,
      title: "women",
      imageUrl:
        "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_401/MTc5NjkwNzQ5Mjc1Njc4Njgw/stupid-things-women-say.webp",
    },
    {
      id: 5,
      title: "men",
      imageUrl: "https://images.indianexpress.com/2014/12/stupid-main.jpg",
    },
  ];
  return <CategoriesContainer categories={categories} />;
};

export default Home;
