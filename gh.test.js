let page;

describe("Github page tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/team");
  });

  afterEach(() => {
    page.close();
  });

  test("The h1 header content", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1'), {timeout: 60000};
    const title1 = await page.title();
    expect(title1).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  });

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content"), {timeout: 60000};
  });

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
      timeout: 60000,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team······")
  });
}); 

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/marketplace");
});

afterEach(() => {
  page.close();
});

test("The h1 header contant2", async () => {
  const title2 = await page.$("h1 mb-2 lh-condensed-ultra");
  expect(title2).toEqual("Extend GitHub"), {timeout: 60000};
  }); 

  test("The page list attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content"), {timeout: 60000};
  });

  test("The page contains Sign in button2", async () => {
    const btnSelector2 = "btn btn-large mr-2";
    await page.waitForSelector(btnSelector2, {
      visible: true,
      timeout: 10000000,
    });
    const actual = await page.$eval(btnSelector2, link => link.textContent);
    expect(actual).toContain("Explore free apps");
  });  