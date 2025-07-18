import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UserCard from "../../../components/UserCard";

describe("UserCard", () => {
  const mockUser = {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
  };

  const mockOnEdit = jest.fn();
  const mockOnDelete = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders user information correctly", () => {
    render(
      <UserCard user={mockUser} onEdit={mockOnEdit} onDelete={mockOnDelete} />
    );

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("john@example.com")).toBeInTheDocument();
  });

  it("calls onEdit when edit button is clicked", () => {
    render(
      <UserCard user={mockUser} onEdit={mockOnEdit} onDelete={mockOnDelete} />
    );

    fireEvent.click(screen.getByText("Edit"));
    expect(mockOnEdit).toHaveBeenCalledWith("1");
  });

  it("calls onDelete when delete button is clicked", () => {
    render(
      <UserCard user={mockUser} onEdit={mockOnEdit} onDelete={mockOnDelete} />
    );

    fireEvent.click(screen.getByText("Delete"));
    expect(mockOnDelete).toHaveBeenCalledWith("1");
  });

  it("renders no user data message when user is null", () => {
    render(
      <UserCard user={null} onEdit={mockOnEdit} onDelete={mockOnDelete} />
    );

    expect(screen.getByText("No user data")).toBeInTheDocument();
  });
});
