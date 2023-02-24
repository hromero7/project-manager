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
  const props = {
    assignee: [
      {
        id: 1,
        username: "User0",
        _id: "12b0",
      },
      {
        id: 2,
        username: "User1",
        _id: "12b1",
      },
      {
        id: 3,
        username: "User3",
        _id: "12b2",
      },
    ],
    projectData: {
      date: "someDate",
      title: "Project Name",
      id: 0,
      members: [
        {
          id: 1,
          username: "User0",
        },
        {
          id: 2,
          username: "User1",
        },
        {
          id: 3,
          username: "User3",
        },
      ],
    },
    projectId: "7777",
    taskId: "9999",
  };

  it("renders a closed dropdown by default", () => {
    render(<TaskAssignee props={props} />);
    const dropdownMenu = screen.getByTestId(/taskAssigneeDropdown/);
    expect(dropdownMenu).toBeInTheDocument();
    const dropdownButton = screen.getByTitle("plusButton", {
      name: /dropdown button/i,
    });
    expect(dropdownButton).toBeInTheDocument();
  });

  it("opens the dropdown menu when the dropdown button is clicked", () => {
    render(
      <TaskAssignee
        projectId={props.projectData.id}
        projectData={props.projectData}
        taskId={props._id}
        assignee={props.assignee}
        getProjectData={props.getProjData}
      />
    );
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
