import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import MemberAdd from "../Components/MemberAdd/MemberAdd";
import ProjectAPI from "../Utils/ProjectAPI";
import { wait } from "@testing-library/user-event/dist/utils";

jest.mock("../Utils/ProjectAPI");

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

  test("searches for members and displays them in dropdown", async () => {
    const mockGetProjectData = jest.fn();
    const res = [
      {
        email: "user0@email.com",
        firstname: "User1FN",
        lastname: "User1LN",
        id: 1,
        username: "User0",
        _id: "63d97b509daeb9531978777a",
      },
      {
        email: "user1@email.com",
        firstname: "User1FN",
        lastname: "User1LN",
        id: 2,
        username: "User1",
        _id: "63d97b509daeb9531978777b",
      },
      {
        email: "user2@email.com",
        firstname: "User2FN",
        lastname: "User2LN",
        id: 3,
        username: "User2",
        _id: "63d97b509daeb9531978777c",
      },
    ];

    ProjectAPI.findMember.mockResolvedValue(res);

    // act(() => {
    //   ReactDOM.createRoot().render(
    //     <MemberAdd
    //       getProjectData={mockGetProjectData}
    //       projectData={props.projectData}
    //     />
    //   );
    // });

    render(
      <MemberAdd
        getProjectData={mockGetProjectData}
        projectData={props.projectData}
      />
    );

    const dropdownButton = screen.getByTestId("dropdownToggle");
    fireEvent.click(dropdownButton);

    const searchInput = screen.getByTestId("searchForm");
    fireEvent.click(searchInput);

    await waitFor(async () => {
      await userEvent.type(searchInput, "user");
    });

    await new Promise((r) => {
      setTimeout(r, 1000);
    });

    const searchResult = screen.getByTestId("searchItem0");
    expect(searchResult).toBeInTheDocument();
  });
});
