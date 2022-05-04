import { createContext, useState, useEffect, useReducer } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/firebase/reducer/reducer.utils";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

const CATEGORIES_ACTION_TYPES = {
  SET_CATEGORIES_MAP: "SET_CATEGORIES_MAP",
};

const INITIAL_STATE = {
  categoriesMap: {},
};

const categoriesReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
      return { ...state, categoriesMap: payload };

    default:
      throw new Error(`unhandled type ${type} in categoriesReducer`);
  }
};

export const CategoriesProvider = ({ children }) => {
  // const [categoriesMap, setCategoriesMap] = useState({});

  const [{ categoriesMap }, dispatch] = useReducer(
    categoriesReducer,
    INITIAL_STATE
  );

  const setCategoriesMap = (categoriesMap) => {
    dispatch(
      createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap)
    );
  };

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      // console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
