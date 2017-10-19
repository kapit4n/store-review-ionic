import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: Array<{name: string, inStock: string, icon: string}>;
  selected: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selected = navParams.get('item');
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

  itemSelected(event, item) {
    this.navCtrl.push(HomePage, {
      item: item
    });
  }
  unselectItem(event) {
   this.navCtrl.push(HomePage, {
      item: false
    }); 
  }
}
