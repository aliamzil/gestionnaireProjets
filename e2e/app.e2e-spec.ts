import { GestionnaireProjetsPage } from './app.po';

describe('gestionnaire-projets App', function() {
  let page: GestionnaireProjetsPage;

  beforeEach(() => {
    page = new GestionnaireProjetsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
