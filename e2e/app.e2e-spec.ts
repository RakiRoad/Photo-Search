import { PhotoSearchPage } from './app.po';

describe('photo-search App', () => {
  let page: PhotoSearchPage;

  beforeEach(() => {
    page = new PhotoSearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
