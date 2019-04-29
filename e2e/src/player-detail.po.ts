import { browser, by, element } from 'protractor';

export class PlayerDetailPage {

  getPlayerName() {
    const item = element.all(by.css('td')).get(1);
    return item.getText();
  }

}
