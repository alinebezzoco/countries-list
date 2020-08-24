import { renderWithRouterMatch } from "../../../utils/tests";
import Home from "../home";

describe("Home", () => {
  it("Should render without error", async () => {
    renderWithRouterMatch(Home, {
      route: "/",
      path: "/",
    });
  });
});
