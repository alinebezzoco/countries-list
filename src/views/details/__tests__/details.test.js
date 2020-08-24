import { renderWithRouterMatch } from "../../../utils/tests";
import Details from "../details";

describe("Details", () => {
  it("Should render without error", async () => {
    renderWithRouterMatch(Details, {
      route: "/details/661",
      path: "/details/:id",
    });
  });
});
