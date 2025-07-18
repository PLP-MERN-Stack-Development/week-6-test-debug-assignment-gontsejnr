import "@testing-library/jest-dom";
import { server } from "./mocks/server";
import { beforeAll, afterEach, afterAll } from "@jest/globals";

// Establish API mocking before all tests
beforeAll(() => server.listen());

// Reset any request handlers that are declared as a test runs
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished
afterAll(() => server.close());
