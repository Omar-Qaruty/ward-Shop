import CategoryItem from "../category-item/category-item.component";
import "./categaries.styles.scss";

const CategoriesContainer = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default CategoriesContainer;
