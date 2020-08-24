import React from "react";
import { renderWithRouter } from "../../../utils/tests";
import { Card } from "../card";

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
  flag: { svgFile: "https://restcountries.eu/data/deu.svg" },
};

describe("Card", () => {
  it("should component render a country name", () => {
    const { getByText } = renderWithRouter(<Card name={mock.name} />);
    expect(getByText(mock.name)).toBeInTheDocument();
  });

  it("should component render a country capital name", () => {
    const { getByText } = renderWithRouter(<Card capital={mock.capital} />);
    expect(getByText(mock.capital)).toBeInTheDocument();
  });

  it("should component render a country flag image", () => {
    const { getByTestId } = renderWithRouter(<Card flag={mock.flag.svgFile} />);
    expect(getByTestId("card-img")).toBeInTheDocument();
  });

  it("should component render with a button to see more about the selected country", () => {
    const { getByTestId } = renderWithRouter(
      <Card
        name={mock.name}
        capital={mock.capital}
        id={mock._id}
        flag={mock.flag.svgFile}
      />
    );
    expect(getByTestId("card-more")).toHaveTextContent("More +");
  });
});
