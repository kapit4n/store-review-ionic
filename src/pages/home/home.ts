import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: Array<{name: string, inStock: string, icon: string, description: string}>;
  selected: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selected = navParams.get('item');
  	this.items = [];
    let description = "Inventory is the raw materials, work-in-process products and finished goods that are considered to be the portion of a business's assets that are ready or will be ready for sale. Inventory represents one of the most important assets of a business because the turnover of inventory represents one of the primary sources of revenue generation and subsequent earnings for the company's shareholders."
    this.items.push({
        name: 'TV Samsung',
        inStock: '450',
        icon: "assets/img/tv_samsung.jpg",
        description: description
      });
    
    this.items.push({
        name: 'TV LG',
        inStock: '300',
        icon: "assets/img/tv_lg.jpg",
        description: description
      });
    
    this.items.push({
        name: 'Jeep',
        inStock: '5',
        icon: "assets/img/jeep.jpg",
        description: description
      });
    
    this.items.push({
        name: 'Imac',
        inStock: '5',
        icon: "assets/img/imac.jpg",
        description: description
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
