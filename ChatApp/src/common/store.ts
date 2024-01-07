import { Listener, StoreState, Subscription } from "./utils/types";

let state: StoreState = {
  isFetchingContacts: true,
  isFetchingUser: true,
  contacts: [],
  user: {},
  error: false,
  isLoggedIn: false
};

const listeners: Listener[] = [];

export default {
  getState(): StoreState {
    return state;
  },
  setState(newState: Partial<StoreState>) {
    state = { ...state, ...newState };
    listeners.forEach(listener => listener());
  },
  onChange(newListener: Listener): Subscription {
    listeners.push(newListener);
  // Return a function to unsubscribe
    return () => listeners.filter(listener => listener !== newListener);
  },
  notifyLoginChange(isLoggedIn: boolean) {
    this.setState({ isLoggedIn });
  },
};