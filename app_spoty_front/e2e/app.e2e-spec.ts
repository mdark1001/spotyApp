import { BaseAngularBootstrapPage } from './app.po';

describe('base-angular-bootstrap App', () => {
  let page: BaseAngularBootstrapPage;

  beforeEach(() => {
    page = new BaseAngularBootstrapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
