import { AngularFAQAppPage } from './app.po';

describe('angular-faqapp App', () => {
  let page: AngularFAQAppPage;

  beforeEach(() => {
    page = new AngularFAQAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
