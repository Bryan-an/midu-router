import { EVENTS } from '../constants';

export function navigate(href) {
  window.history.pushState({}, '', href);
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
}

export function getCurrentPath() {
  return window.location.pathname;
}
