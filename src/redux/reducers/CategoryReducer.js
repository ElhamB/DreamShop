export const CategoryListReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
      case "CATEGORY_LIST_REQUEST":
        return { categories: [] };
      case "CATEGORY_LIST_SUCCESS":
        return { categories: action.payload };
      default:
        return state;
    }
  };
  