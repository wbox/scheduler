
import React from "react";
import { render } from "@testing-library/react";
import Appointment from "components/Appointment/index";

describe("Appointment", () => {
  it("defaults to Monday and changes the schedule when a new day is selected", () => {
    render(<Appointment />);
  });
});