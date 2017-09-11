import { Component, ViewChild } from '@angular/core';
import { NavController, Nav} from 'ionic-angular';
import { DuaListComponent } from "../dua-list/dua-list";
import { SettingComponent } from "../setting/setting";
import { AboutComponent } from "../about/about";
import { FavoriteComponent } from "../favorite/favorite";
/**
 * Generated class for the SideMenuComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'side-menu',
  templateUrl: 'side-menu.html'
})
export class SideMenuComponent {
  @ViewChild(Nav) nav: Nav;
  text: string;
  rootPage: any = DuaListComponent;

  constructor(navCtrl: NavController) {
    console.log('Hello SideMenuComponent Component');
    this.text = 'Hello World';
    //this.nav.setRoot(DuaListComponent);
  }

openPage(page) {
  if(page == 'duaList'){
      this.nav.setRoot(DuaListComponent);
  }
  else if (page == 'setting'){
    this.nav.setRoot(SettingComponent);
  }
  else if (page == 'about'){
    this.nav.setRoot(AboutComponent);
  }
  else if (page == 'favorite'){
    this.nav.setRoot(FavoriteComponent);
  }


}


}
