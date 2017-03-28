import { EderProjectPage } from './app.po';

describe('eder-project App', () => {
  let page: EderProjectPage;

  beforeEach(() => {
    page = new EderProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
