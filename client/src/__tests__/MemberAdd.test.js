import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import MemberAdd from "../Components/MemberAdd/MemberAdd";

describe("MemberAdd component", () => {
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

  it("renders the memberAdd component", async () => {
    render(<MemberAdd projectData={props.projectData} />);

    const dropdownButton = screen.getByTestId("dropdownToggle");
    fireEvent.click(dropdownButton);
    const searchInput = screen.getByPlaceholderText(/Search by username/i);
    fireEvent.change(searchInput, { target: { value: "User1" } });
    // need to be able to target search list output.
  });
});
