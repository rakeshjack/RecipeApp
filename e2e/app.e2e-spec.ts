import { ReceipeAPPPage } from './app.po';

describe('receipe-app App', () => {
  let page: ReceipeAPPPage;

  beforeEach(() => {
    page = new ReceipeAPPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
