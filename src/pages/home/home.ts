import { Component } from '@angular/core';
import { SideMenuComponent } from "../../components/side-menu/side-menu";
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
      this.navCtrl.setRoot(SideMenuComponent);
  }

}
