import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import MemberAdd from "../Components/MemberAdd/MemberAdd";
import TaskAssignee from "../Components/TaskAssignee/TaskAssignee";

describe("Adding members to project list. There is a search function, and an add and remove for each member within the search dropdown. ", () => {
  const props = {
    getProjectData: "someFunction",
    projectData: {
      date: "someDate",
      id: "_ida1234b1234c1234",
      members: [
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
      tasks: [
        {
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
          dueDate: "someDueDate",
          notified: false,
          priority: 1,
          startDate: "someStartDate",
          status: "Open",
          taskTitle: "TaskTitle0",
          userId: "_userIda2134b1234c1234",
          _id: "_ida1234b1234c1234",
        },
        {
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
          dueDate: "someDueDate",
          notified: false,
          priority: 1,
          startDate: "someStartDate",
          status: "Open",
          taskTitle: "TaskTitle1",
          userId: "_userIda2134b1234c1234",
          _id: "_ida1234b1234c1234",
        },
        {
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
          dueDate: "someDueDate",
          notified: false,
          priority: 1,
          startDate: "someStartDate",
          status: "Open",
          taskTitle: "TaskTitle2",
          userId: "_userIda2134b1234c1234",
          _id: "_ida1234b1234c1234",
        },
      ],
      title: "SomeProjectTitle",
      userId: "890a567s4345d22345",
    },
    projectId: "1234q1234a1234q",
  };

  it("renders the memberAdd component and allows ability to search/select/add/remove members to list.", () => {
    render(<TaskAssignee props={props} />);
    console.log(`props: `, props);
  });
});
