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
        icon: "http://www.lg.com/us/images/tvs/md05791090/thumb-350x350c.jpg"
      });
    
    this.items.push({
        name: 'TV LG',
        inStock: '300',
        icon: "http://brain-images.cdn.dixons.com/8/4/10141248/l_10141248_001.jpg"
      });

  }

}
