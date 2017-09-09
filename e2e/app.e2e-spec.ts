import { Angular2TiendapcsPage } from './app.po';

describe('angular2-tiendapcs App', function() {
  let page: Angular2TiendapcsPage;

  beforeEach(() => {
    page = new Angular2TiendapcsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
