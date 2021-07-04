import { CashqWebPage } from "./app.po";

describe("cashq-web App", () => {
  let page: CashqWebPage;

  beforeEach(() => {
    page = new CashqWebPage();
  });

  it("should display welcome message", () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual("Welcome to app!!");
  });
});
