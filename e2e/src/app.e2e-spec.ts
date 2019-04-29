import { AppPage } from './app.po';

describe('Application workspace', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('List of hockey players!');
  });
});
