import { render } from "@testing-library/react";
import { App } from "../App";

// Mock the useVSCodeElements hook since it likely depends on VSCode's webview API
jest.mock("@hooks/useVSCodeElements", () => ({
  useVSCodeElements: jest.fn(),
}));

describe("App", () => {
  it("renders without crashing", () => {
    expect(() => render(<App />)).not.toThrow();
  });
});
