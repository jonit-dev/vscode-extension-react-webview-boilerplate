/* eslint-disable @typescript-eslint/naming-convention */
import '@testing-library/jest-dom';
import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';

declare global {
  namespace jest {
    interface Matchers<R> extends TestingLibraryMatchers<R, any> {}
  }
  var acquireVsCodeApi: () => {
    postMessage: jest.Mock;
    setState: jest.Mock;
    getState: jest.Mock;
  };
}

// Mock VSCode API
globalThis.acquireVsCodeApi = () => ({
  postMessage: jest.fn(),
  setState: jest.fn(),
  getState: jest.fn()
});
