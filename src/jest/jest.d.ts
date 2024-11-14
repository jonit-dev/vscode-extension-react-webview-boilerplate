/* eslint-disable @typescript-eslint/naming-convention */
import '@testing-library/jest-dom';

declare global {
  namespace jest {
    interface Matchers<R> extends jest.Matchers<R>, Testing.Matchers {}
  }
}
