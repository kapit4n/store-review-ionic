import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StockServiceProvider } from '../../providers/stock-service/stock-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //items: Array<{name: string, inStock: string, img: string, description: string}>;
  items:Array<any> = [];
  selected: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: StockServiceProvider) {
    this.selected = navParams.get('item');
  	this.items = [];
    let description = "Inventory is the raw materials, work-in-process products and finished goods that are considered to be the portion of a business's assets that are ready or will be ready for sale. Inventory represents one of the most important assets of a business because the turnover of inventory represents one of the primary sources of revenue generation and subsequent earnings for the company's shareholders."
    this.items.push({
        name: 'TV Samsung',
        inStock: '450',
        img: "assets/img/tv_samsung.jpg",
        description: description
      });
    
    this.items.push({
        name: 'TV LG',
        inStock: '300',
        img: "assets/img/tv_lg.jpg",
        description: description
      });
    
    this.items.push({
        name: 'Jeep',
        inStock: '5',
        img: "assets/img/jeep.jpg",
        description: description
      });
    
    this.items.push({
        name: 'Imac',
        inStock: '5',
        img: "assets/img/imac.jpg",
        description: description
      });
    this.load();
  }

  load() {
    this.dataService.load()
    .then(items => {
      this.items = items as Array<any>;
    }, function(error) {
      console.log("This is the error");
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
