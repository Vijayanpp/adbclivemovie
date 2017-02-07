import { AdbcdlivemediaPage } from './app.po';

describe('adbcdlivemedia App', function() {
  let page: AdbcdlivemediaPage;

  beforeEach(() => {
    page = new AdbcdlivemediaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
