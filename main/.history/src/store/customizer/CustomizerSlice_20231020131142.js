import { createSlice } from '@reduxjs/toolkit';
const initialState = {
 
  isSidebarHover: false,
  isMobileSidebar: false,

};

export const CustomizerSlice = createSlice({
  name: 'customizer',
  initialState,
  reducers: {
   
    toggleSidebar: (state) => {
      state.isCollapse = !state.isCollapse;
    },
    hoverSidebar: (state, action) => {
      state.isSidebarHover = action.payload;
    },
    toggleMobileSidebar: (state) => {
      state.isMobileSidebar = !state.isMobileSidebar;
    },
   
  },
});

export const {
  setTheme,
  setDarkMode,
  setDir,
  toggleSidebar,
  hoverSidebar,
  toggleMobileSidebar,
  toggleLayout,
  setBorderRadius,
  toggleHorizontal,
  setLanguage,
  setCardShadow,
} = CustomizerSlice.actions;

export default CustomizerSlice.reducer;
