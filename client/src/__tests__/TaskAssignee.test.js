import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskAssignee from "../Components/TaskAssignee/TaskAssignee";

test("checking if TaskAssignee renders", () => {
  render(<TaskAssignee />);
});

test("taskAssigneeDropdown renders within the document.", () => {
  render(<TaskAssignee />);
  const pageElement = screen.getByTestId(/taskAssigneeDropdown/);
  expect(pageElement).toBeInTheDocument();
});

describe("DropdownComponent", () => {
  it("renders a closed dropdown by default", () => {
    render(<TaskAssignee />);
    const dropdownMenu = screen.getByTestId(/taskAssigneeDropdown/);
    expect(dropdownMenu).toBeInTheDocument();
    const dropdownButton = screen.getByTitle("plusButton", {
      name: /dropdown button/i,
    });
    expect(dropdownButton).toBeInTheDocument();
  });

  it("opens the dropdown menu when the dropdown button is clicked", () => {
    render(<TaskAssignee />);
    const dropdownButton = screen.getByTitle("plusButton", {
      name: /dropdown button/i,
    });
    fireEvent.click(dropdownButton);
    const dropdownMenu = screen.getByTestId(/taskAssigneeDropdown/);
    expect(dropdownMenu).toBeInTheDocument();
    // expect(screen.getByText(/action/i)).toBeInTheDocument();
    // expect(screen.getByText(/another action/i)).toBeInTheDocument();
    // expect(screen.getByText(/something else/i)).toBeInTheDocument();
  });
});
