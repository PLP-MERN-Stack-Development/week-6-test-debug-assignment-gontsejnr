import { renderHook, waitFor } from "@testing-library/react";
import useApi from "../../../hooks/useApi";

// Mock fetch
window.fetch = jest.fn();

describe("useApi", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it("should fetch data successfully", async () => {
    const mockData = { id: 1, name: "Test" };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const { result } = renderHook(() => useApi("/api/test"));

    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBe(null);
  });

  it("should handle fetch error", async () => {
    fetch.mockRejectedValueOnce(new Error("Network error"));

    const { result } = renderHook(() => useApi("/api/test"));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe("Network error");
  });
});
