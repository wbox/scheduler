import React from "react";

import { render, cleanup, waitForElement, fireEvent, prettyDOM, getByText, getAllByTestId, getByAltText, getByPlaceholderText } from "@testing-library/react";

import Application from "components/Application";


afterEach(cleanup);




it("changes the schedule when a new day is selected", () => {
  const { getByText } = render(<Application />);

  return waitForElement(() => getByText("Monday")).then(() => {
    fireEvent.click(getByText("Tuesday"));

    expect(getByText("Leopold Silvers")).toBeInTheDocument();
  });
});


// it("changes the schedule when a new day is selected", async () => {
//   const { getByText } = render(<Application />);
//   await waitForElement(() => getByText("Monday"));
//   fireEvent.click(getByText("Tuesday"));
//   expect(getByText("Leopold Silvers")).toBeInTheDocument();
// });


it("loads data, books an interview and reduces the spots remaining for Monday by 1", async () => {
  const { container } = render(<Application />);
  await waitForElement(() => getByText(container, "Archie Cohen"));
  // console.log(prettyDOM(container));
  const appointment = getAllByTestId(container, "appointment")[0]
  // console.log(prettyDOM(appointment));

  fireEvent.click(getByAltText(appointment, "Add"));

  fireEvent.change(getByPlaceholderText(appointment, /Enter Student Name/i), {
    target: { value: "Lydia Miller-Jones" }
  });

  fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));

  fireEvent.click(getByText(appointment, "Save"));

});



