import React from "react";
//becase you're importing react apps, duh.
import "@testing-library/jest-dom";
//@jest-dom:this is responsible for getting the functions like "toBeInTheDocument()"  https://testing-library.com/docs/
import { render, screen } from "@testing-library/react";
//@react: sets the testing library.
import TestA from "../Components/TestComp/TestA/TestA";
// this is the component that is being tested. ITS FORMATTED in a way that is recognizable by the testing library.
// in order to test properly functions have to be named exports vs default exports.

//vv this section is quotes is just output text for the test.
test("checking react boiler plate component for testing", () => {
  render(<TestA />);
  const pageElement = screen.getByTestId(/testA/i);
  //by my understanding, screen is the equivellant of window, getByTestId is similar to getByDocumentId in jQuery.
  expect(pageElement).toBeInTheDocument();
  //to read like english: I expect this page element to be in this document.
});

test("looking for text with quotes", () => {
  render(<TestA />);
  const pageElement = screen.getByTestId("testA");
  //   alternatively quotes work as a query for items
  expect(pageElement).toBeInTheDocument();
});

test("get by text of the div", () => {
  render(<TestA />);
  const pageElement = screen.getByText("TestA");
  expect(pageElement).toBeInTheDocument();
});
