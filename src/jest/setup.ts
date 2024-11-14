import '@testing-library/jest-dom';

// Mock VSCode API
(global as any).acquireVsCodeApi = () => ({
  postMessage: jest.fn(),
  setState: jest.fn(),
  getState: jest.fn()
});
