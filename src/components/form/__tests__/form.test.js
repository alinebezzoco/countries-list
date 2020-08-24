import React from "react";
import { fireEvent, cleanup } from "@testing-library/react";
import { renderWithRouter } from "../../../utils/tests";
import { Form } from "../form";

const mock = {
  name: "Germany",
  capital: "Berlin",
  population: 81770900,
  area: 357114,
  topLevelDomains: [
    {
      name: ".de",
    },
  ],
};

describe("Form", () => {
  afterEach(cleanup);

  it("should have a country name", () => {
    const { getByLabelText } = renderWithRouter(
      <Form country={{ name: mock.name }} />
    );

    expect(getByLabelText("Name")).toHaveValue(mock.name);
  });

  it("should have a country capital", () => {
    const { getByLabelText } = renderWithRouter(
      <Form country={{ capital: mock.capital }} />
    );
    expect(getByLabelText("Capital")).toHaveValue(mock.capital);
  });

  it("should have a country population", () => {
    const { getByLabelText } = renderWithRouter(
      <Form country={{ population: mock.population }} />
    );
    expect(getByLabelText("Population")).toHaveValue(mock.population);
  });

  it("should can update country population", () => {
    const { getByLabelText } = renderWithRouter(
      <Form country={{ population: mock.population }} />
    );
    fireEvent.change(getByLabelText("Population"), {
      target: {
        value: 10,
      },
    });
    expect(getByLabelText("Population")).toHaveValue(10);
  });

  it("should have a country area", () => {
    const { getByLabelText } = renderWithRouter(
      <Form country={{ area: mock.area }} />
    );
    expect(getByLabelText("Area")).toHaveValue(mock.area);
  });

  it("should can update country population", () => {
    const { getByLabelText } = renderWithRouter(
      <Form country={{ area: mock.area }} />
    );
    fireEvent.change(getByLabelText("Area"), {
      target: {
        value: 20,
      },
    });
    expect(getByLabelText("Area")).toHaveValue(20);
  });

  it("should have a country top level domain", () => {
    const { getByLabelText } = renderWithRouter(
      <Form
        country={{
          topLevelDomains: [{ name: mock.topLevelDomains[0].name }],
        }}
      />
    );
    expect(getByLabelText("Top Level Domain")).toHaveValue(
      mock.topLevelDomains[0].name
    );
  });
});
