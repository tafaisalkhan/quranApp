import { Component, ViewChild } from '@angular/core';
import { NavController, Nav} from 'ionic-angular';
import { DuaListComponent } from "../dua-list/dua-list";
import { SettingComponent } from "../setting/setting";
import { AboutComponent } from "../about/about";
import { FavoriteComponent } from "../favorite/favorite";

@Component({
  selector: 'side-menu',
  templateUrl: 'side-menu.html'
})
export class SideMenuComponent {
  @ViewChild(Nav) nav: Nav;
  
  rootPage: any = DuaListComponent;

  constructor(navCtrl: NavController) {
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
