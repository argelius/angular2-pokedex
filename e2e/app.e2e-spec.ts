import { PokedexPage } from './app.po';

describe('pokedex App', function() {
  let page: PokedexPage;

  beforeEach(() => {
    page = new PokedexPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
