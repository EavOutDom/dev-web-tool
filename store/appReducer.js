export const appReducer = (state, { type, payload }) => {
  switch (type) {
    case 'START_TRANSITION':
      return {
        ...state,
        start_tr: payload
      }
    case 'END_TRANSITION':
      return {
        ...state,
        end_tr: payload
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: payload
      }
    case 'SET_DARK':
      if (payload) {
        localStorage.setItem('darkMode', payload);
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.removeItem('darkMode');
      }
      return {
        ...state,
        dark: payload
      }
    default:
      return state;
  }
}