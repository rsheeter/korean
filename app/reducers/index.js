import { FONTS } from "../constants/defaults";

let initialState = {
  screenWidth: 1024,
  screenHeight: 768,
  headerCollapsedTop: 0,
  headerMode: "expanded", // expanded, collapsed, black
  animationIdx: 0,
  categoryDropdownOpened: false,
  descFontDropdownOpened: false,
  currentViewFont: null,
  currentDescFontSelected: "paragraph", // title, big, paragraph
  currentDescFont: {
    title: 1,
    big: 1,
    paragraph: 1
  }, 
  currentCategory: 1,
  newsFeeds: [],
  backgroundMode: "black",
  locale: "ko",
  headerHeight: 140
};

var reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'WINDOW_RESIZE':
      return {
        ...state,
        screenWidth: action.payload.screenWidth,
        screenHeight: action.payload.screenHeight
      };
    case 'CHANGE_ANIMATION_IDX': 
      return {
        ...state,
        animationIdx: action.payload.animationIdx
      };
    case 'CHANGE_CURRENT_DESC_FONT_SELECTED':
      return {
        ...state,
        currentDescFontSelected: action.payload.currentDescFontSelected
      };
    case 'CHANGE_HEADER_COLLAPSED_TOP':
      return {
        ...state,
        headerCollapsedTop: action.payload.headerCollapsedTop
      };
    case 'CHANGE_DESC_FONT_DROPDOWN_OPENED':
      return {
        ...state,
        descFontDropdownOpened: action.payload.descFontDropdownOpened
      };
    case 'CHANGE_CATEGORY_DROPDOWN_OPENED':
      return {
        ...state,
        categoryDropdownOpened: action.payload.categoryDropdownOpened
      };
    case 'CHANGE_BACKGROUND_MODE':
      return {
        ...state,
        backgroundMode: action.payload.backgroundMode
      }
    case 'CHANGE_LOCALE':
      return {
        ...state,
        locale: action.payload.locale
      }
    case 'CHANGE_CURRENT_CATEGORY':
      return {
        ...state,
        currentCategory: action.payload.currentCategory
      }
    case 'CHANGE_CURRENT_DESC_FONT': 
      return {
        ...state,
        currentDescFont: action.payload.currentDescFont
      }
    case 'CHANGE_CURRENT_VIEW_FONT':
      return {
        ...state, 
        currentViewFont: action.payload.currentViewFont
      }
    case 'CHANGE_HEADER_HEIGHT':
      return {
        ...state,
        headerHeight: action.payload.headerHeight
      }
    case 'CHANGE_HEADER_MODE': 
      return {
        ...state,
        headerMode: action.payload.headerMode
      }
    default:
      return state;
  }
};

export default reducer;