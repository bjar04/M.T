import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-slider',
  templateUrl: './menu-slider.component.html',
  styleUrls: ['./menu-slider.component.css']
})
export class MenuSliderComponent implements OnInit {

  datos:any =[
      {
        nombre:"Hamburguesa Big",
        descripcion:'Hamburguesa doble carne, tocineta, queso americano, ketchup, jalapeño',
        imagen:"../../assets/img/menu-slider/menu_1.png",
        precio:"9800"
      },

    {
      nombre:"Hamburguesa medium",
      descripcion:"Hamburguesa de pollo, mayonesa y ketchup",
      imagen:"../../assets/img/menu-slider/menu_2.png",
      precio:"8900"
    },
    {
      nombre:"Hamburguesa mini",
      descripcion:"Hamburguesa doble carne, queso, bacon, cebolla",
      imagen:"../../assets/img/menu-slider/menu_3.png",
      precio:"7500"
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
