import { DojoAngular2Page } from './app.po';

describe('dojo-angular2 App', function() {
  let page: DojoAngular2Page;

  beforeEach(() => {
    page = new DojoAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
