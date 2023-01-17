import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";

//action types
const SORT_BY_PRICE = "SORT_BY_PRICE";
const FILTER_BY_PRICE = "FILTER_BY_PRICE";
const FILTER_BY_VALUE = "FILTER_BY_VALUE";
const LOAD_PRODUCTS = "LOAD_PRODUCTS";
const LOAD_NEW_PAGE = "LOAD_NEW_PAGE";
const LOAD_EXACT_PAGE = "LOAD_EXACT_PAGE";

//action creators
export const FilterProductAction = (payload) => async (dispatch) => {
  try {
    dispatch({ type: FILTER_BY_PRICE, payload });
    dispatch({ type: FILTER_BY_VALUE, payload });
    dispatch({ type: LOAD_NEW_PAGE, payload });
    dispatch({ type: LOAD_EXACT_PAGE, payload });
  } catch (error) {
    console.log(error);
  }
};
export const loadPrdoucts=()=>async(dispatch)=>{
    const { data } = await axios.get("/products");
    dispatch({ type: LOAD_PRODUCTS, payload:data });
}

export const sortByPrice=(direction)=>async(dispatch)=>{
    dispatch({ type: SORT_BY_PRICE, payload:direction });
}

//reducers
export const FilterProductReducer = (state = { appliedFilters: [],filteredProducts:[] },action) => {
  switch (action.type) {
    case SORT_BY_PRICE:
      let sortByPriceState = Object.assign({}, state);
      let sortedPriceArr =
        action.payload.direction === "asc"
          ? sortAsc(state.filteredProducts, "price")
          : sortDesc(state.filteredProducts, "price");
          sortByPriceState.filteredProducts=sortedPriceArr;
          sortByPriceState.appliedFilters = addFilterIfNotExists(
            SORT_BY_PRICE,
            sortByPriceState.appliedFilters
          );
          sortByPriceState.appliedFilters = removeFilter(
            SORT_BY_PRICE,
            sortByPriceState.appliedFilters
          );
          
          return sortByPriceState;
          case FILTER_BY_PRICE:
            return state;
          case FILTER_BY_VALUE:
                let newState = Object.assign({}, state);
                let value = action.payload.value;
                let filteredValues = state.products.filter(product => {
                    return product.title.toLowerCase().includes(value)
                });
    
                let appliedFilters = state.appliedFilters;
    
                if (value) {
                    appliedFilters = addFilterIfNotExists(FILTER_BY_VALUE, appliedFilters);
    
                    newState.filteredProducts = filteredValues;
                    newState.filteredCount = newState.filteredProducts.length;
                    newState.filteredPages = Math.ceil(newState.filteredCount / newState.countPerPage);
    
                } else {
                    appliedFilters = removeFilter(FILTER_BY_VALUE, appliedFilters);
    
                    if (appliedFilters.length === 0) {
                        newState.filteredProducts = newState.products;
                        newState.filteredCount = newState.filteredProducts.length;
                        newState.filteredPages = Math.ceil(newState.filteredCount / newState.countPerPage);
                    }
                }
                return newState;
          case LOAD_PRODUCTS:
                   // let count = action.payload.count;
                   let count=action.payload.length;
                    let countPerPage = action.payload.countPerPage || 20;
        
                    //round up
                    let totalPages = Math.ceil(count / countPerPage);
        
                    // let products = generate(count);
                    let products =action.payload;
                    return {
                        ...state,
                        products,
                        filteredProducts: products.slice(0, countPerPage),
                        currentCount: countPerPage,
                        countPerPage,
                        totalCount: count,
                        currentPage: 1,
                        totalPages: totalPages,
                        filteredPages: totalPages
                    };
                case LOAD_NEW_PAGE:
                    //Clone the previous state
                    let loadNewPageState = Object.assign({}, state);
                    //How many pages should be added. Will always be 1 or -1
                    let addPages = action.payload.page;
                    //add it to the current
                    loadNewPageState.currentPage += addPages;
        
                    let perPage = loadNewPageState.countPerPage; //20 by default
        
                    let nextProducts;
                    if (addPages === 1){
                        //Moving from page 1 to 2 will cause ‘upperCount’ to be 40
                        let upperCount = loadNewPageState.currentCount + perPage;
                        let lowerCount = loadNewPageState.currentCount; //This hasn’t been changed. It will remain 20.
        
                        loadNewPageState.currentCount += loadNewPageState.countPerPage;
                        nextProducts = loadNewPageState.products.slice(lowerCount, upperCount);
                    }
        
                    if (addPages ===-1){
                        let upperCount = loadNewPageState.currentCount; //40
                        let lowerCount = loadNewPageState.currentCount - perPage; //20
        
                        loadNewPageState.currentCount -= loadNewPageState.countPerPage;
                        nextProducts = loadNewPageState.products.slice(lowerCount - perPage, upperCount - perPage);
                    }
        
                    loadNewPageState.filteredProducts = nextProducts;
                    // Don't use window.history.pushState() here in production
                    // It's better to keep redirections predictable
                    window.history.pushState({page: 1}, "title 1", `?page=${loadNewPageState.currentPage}`);
                    return loadNewPageState;
                case LOAD_EXACT_PAGE:
                    const exactPageState = Object.assign({}, state);
                    const exactPage = action.payload.page;
                    let upperCountExact = exactPageState.countPerPage * exactPage;
                    let lowerCountExact = upperCountExact - exactPageState.countPerPage;
        
                    let exactProducts = exactPageState.products.slice(lowerCountExact, upperCountExact);
                    exactPageState.filteredProducts = exactProducts;
                    exactPageState.currentCount = upperCountExact;
                    exactPageState.currentPage = exactPage;
                    window.history.pushState({page: 1}, "title 1", `?page=${exactPageState.currentPage}`);
        
                    return exactPageState;
    default:
      return state;
  }
};

function sortAsc(arr, field) {
    return arr.sort(function (a, b) {
        if (a[field] > b[field]) return 1;

        if (b[field]> a[field]) return -1;

        return 0;
    })
}

function sortDesc(arr, field) {
    return arr.sort(function (a, b) {
        if (a[field] > b[field]) return -1;

        if (b[field]> a[field]) return 1;

        return 0;
    })
}

function addFilterIfNotExists(filter, appliedFilters) {
    let index = appliedFilters.indexOf(filter);
    if (index===-1) appliedFilters.push(filter);

    return appliedFilters;
}

function removeFilter(filter, appliedFilters) {
    let index = appliedFilters.indexOf(filter);
    appliedFilters.splice(index, 1);
    return appliedFilters;
}
