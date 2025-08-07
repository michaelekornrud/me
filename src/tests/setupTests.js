// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Simple and effective IntersectionObserver mock
global.IntersectionObserver = class IntersectionObserver {
  constructor(callback, options) {
    this.callback = callback;
    this.options = options;
  }

  observe() {
    // Trigger callback immediately to simulate intersection
    setTimeout(() => {
      this.callback([{ isIntersecting: true }]);
    }, 0);
  }

  unobserve() {}
  disconnect() {}
};

// Also ensure window has it
window.IntersectionObserver = global.IntersectionObserver;

// Mock window.scrollTo
window.scrollTo = jest.fn();

// Mock smooth scroll behavior
Element.prototype.scrollIntoView = jest.fn();

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
    removeItem: (key) => {
      delete store[key];
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

// Reset mocks before each test
beforeEach(() => {
  window.scrollTo.mockClear();
  Element.prototype.scrollIntoView.mockClear();
  window.localStorage.clear();
});
