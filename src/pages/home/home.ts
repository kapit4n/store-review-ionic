import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: Array<{name: string, inStock: string, icon: string}>;
  constructor(public navCtrl: NavController) {
  	this.items = [];
    this.items.push({
        name: 'TV Samsung',
        inStock: '450',
        icon: "assets/img/tv_samsung.jpg"
      });
    
    this.items.push({
        name: 'TV LG',
        inStock: '300',
        icon: "assets/img/tv_lg.jpg"
      });

  }

}
