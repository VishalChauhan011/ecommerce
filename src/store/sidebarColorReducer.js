// sidebarColorReducer.js
const initialState = {
    backgroundColor: "#B4AFF0", 
  };
  
  const sidebarColorReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_SIDEBAR_COLOR":
        return { ...state, backgroundColor: action.payload };
      default:
        return state;
    }
  };
  
  export default sidebarColorReducer;
  