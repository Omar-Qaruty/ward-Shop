import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

// Memoization
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

// As long as the categories array does not change, don't run the "reduce method".
// after the first run, it will give back the previous value as long its not changing

export const selectCategoriesMap = createSelector(
  [selectCategories],

  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
