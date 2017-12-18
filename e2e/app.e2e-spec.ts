import { NvcappPage } from './app.po';

describe('nvcapp App', () => {
  let page: NvcappPage;

  beforeEach(() => {
    page = new NvcappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
