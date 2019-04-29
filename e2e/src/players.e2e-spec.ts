import { PlayersPage } from './players.po';
import { browser } from 'protractor';

describe('Players page', () => {
  let page: PlayersPage;

  beforeEach(() => {
    page = new PlayersPage();
  });

  it('should display section title', () => {
    page.navigateTo();
    expect(page.getSectionText()).toEqual('Montreal Canadiens');
  });

  it('should find Max Domi', () => {
    page.navigateTo();
    const playerDetailPage = page.clickOnPlayer(5);
    browser.waitForAngular(); // Wait for the page to load completely
    playerDetailPage.getPlayerName().then(result => {
      expect(result).toEqual('Max Domi');
    });
  });

});
