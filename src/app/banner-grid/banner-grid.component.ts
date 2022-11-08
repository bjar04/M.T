import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-grid',
  templateUrl: './banner-grid.component.html',
  styleUrls: ['./banner-grid.component.css']
})
export class BannerGridComponent implements OnInit {

  public datos_big: any =[
    {
      nombre:"Hamburguesa Big Mac",
      descripcion:"Hamburguesa doble carne, doble queso con papas fritas",
      imagen:"assets/img/banner/b1 (1).png",
      precio:"9800"
    }
  ];

    public datos_small: any =[
    {
      nombre:"Hamburguesa Mac Mini",
      subtitulo:"",
      imagen:"assets/img/banner-grid/s2.png",
      precio:"7800"
    },
    {
      nombre:"Fresca y jugosa",
      subtitulo:"Explora más delicias",
      imagen:"assets/img/banner-grid/s1.png",
      precio:""
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
