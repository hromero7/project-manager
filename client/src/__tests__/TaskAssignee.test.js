import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskAssignee from "../Components/TaskAssignee/TaskAssignee";

describe("DropdownComponent within TaskAssignee.js", () => {
  const props = {
    assignee: [
      {
        id: 1,
        username: "User0",
        _id: "12b0",
        email: "user0@mail.com",
      },
      {
        id: 2,
        username: "User1",
        _id: "12b1",
        email: "user1@mail.com",
      },
      {
        id: 3,
        username: "User3",
        _id: "12b2",
        email: "user2@mail.com",
      },
    ],
    projectData: {
      date: "someDate",
      title: "Project Name",
      id: "0s0",
      members: [
        {
          email: "user0@email.com",
          id: 1,
          username: "User0",
          _id: "63d97b509daeb9531978777a",
        },
        {
          email: "user1@email.com",
          id: 2,
          username: "User1",
          _id: "63d97b509daeb9531978777b",
        },
        {
          email: "user2@email.com",
          id: 3,
          username: "User2",
          _id: "63d97b509daeb9531978777c",
        },
      ],
    },
    projectId: "7s777",
    taskId: "012f1ssmp09",
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

  it("opens the dropdown menu when the dropdown button is clicked and for users 0 1 2 to be in document", () => {
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
    expect(screen.getByText(/User0/i)).toBeInTheDocument();
    expect(screen.getByText(/User1/i)).toBeInTheDocument();
    expect(screen.getByText(/User2/i)).toBeInTheDocument();
  });

  it("checks props 'checked' exists", () => {
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
    expect(screen.getByTestId(/checkbox0/i)).toHaveAttribute("checked");
    expect(screen.getByTestId(/checkbox1/i)).toHaveAttribute("checked");
    expect(screen.getByTestId(/checkbox2/i)).toHaveAttribute("checked");
  });

  it("checks props 'isActive' exists", () => {
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
    const memberListItems = screen.queryAllByRole(".assignTaskNames");
    memberListItems.forEach((item) => {
      expect(item).toHaveAttribute("isActive", "");
    });
  });
});
