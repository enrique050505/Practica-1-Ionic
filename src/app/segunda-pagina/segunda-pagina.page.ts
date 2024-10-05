import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segunda-pagina',
  templateUrl: './segunda-pagina.page.html',
  styleUrls: ['./segunda-pagina.page.scss'],
})
export class SegundaPaginaPage implements OnInit {

  constructor() { }

  iconoCasa = "home-outline";

  imgLogo ="../../assets/logo.jpg";

  descripcion: string = "Bienvenido a PlayVibe, tu tienda online de videojuegos. Aquí encontrarás los últimos videojuegos del mercado por precios asequibles y las últimas noticias sobre los videojuegos más populares. Fundada por Rubén y Enrique en 2024, nuestra aplicación está diseñada para brindarte una experiencia de compra fácil y entretenida. Únete a nosotros y disfruta de un mundo lleno de diversión y aventuras digitales.";

  ngOnInit() {
  }

}
