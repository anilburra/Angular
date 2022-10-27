import { Component } from '@angular/core';
import { MenuItem } from './models/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menu';
  menu:MenuItem[]=[
    {
      item:"Chicken Wings",
      category:"Sides",
      price: 7.99
    },
    {
      item:"Caesar Salad",
      category:"Salad",
      price: 6.99
    },
    {
      item:"Pizza",
      category:"Lunch",
      price: 5.99
    },
    {
      item:"Diet Coke",
      category:"Drinks",
      price: 2.99
    },
    {
      item:"Bread Sticks",
      category:"Sides",
      price: 3.99
    },
    {
      item:"Chocolate Cake",
      category:"Dessert",
      price: 4.99
    }

  ];
}
