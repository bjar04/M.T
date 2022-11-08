import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  datos: any =[
    {
      titulo:'Hamburguesa siempre sabrosa',
      subtitulo:'Elige y disfruta',
      imagen:'assets/img/banner/event_1.jpg',
      descripcion:'Hamburguesas a buen precio, ricas, y de buena calidad. Pide la tuya a domicilio y te estará llegando con descuento en el envío.'
    },

    {
      titulo:'Hamburguesa siempre sabrosa',
      subtitulo:'Elige y disfruta',
      imagen:'assets/img/banner/event_1.jpg',
      descripcion:'Hamburguesas a buen precio, ricas, y de buena calidad. Pide la tuya a domicilio y te estará llegando con descuento en el envío.'
    },

    {
      titulo:'Hamburguesa siempre sabrosa',
      subtitulo:'Elige y disfruta',
      imagen:'assets/img/banner/event_1.jpg',
      descripcion:'Hamburguesas a buen precio, ricas, y de buena calidad. Pide la tuya a domicilio y te estará llegando con descuento en el envío.'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
