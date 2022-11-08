import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  datos:any =[
    {
      nombre:'Bic Mac',
      descripcion:'Hamburguesa grande con papas',
      imagen:'assets/img/banner/1.png',
      descuento:'30'
    },

    {
      nombre:'Mac-Donal-M',
      descripcion:'Hamburguesa mediana con papas',
      imagen:'assets/img/banner/1.png',
      descuento:'20'
    },

    {
      nombre:'Mini burger',
      descripcion:'Hamburguesa pequeña',
      imagen:'assets/img/banner/1.png',
      descuento:'10'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
