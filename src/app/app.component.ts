import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(){}

  products = [
    {id: 1, title: 'product 1', description: 'this is a nice product 1', category: 'electronics', price: 100},
    {id: 2, title: 'product 2', description: 'this is a nice product 2', category: 'home decore', price: 1000},
    {id: 3, title: 'product 3', description: 'this is a nice product 3', category: 'computers', price: 10000}
  ]
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'newwebsite';
}
