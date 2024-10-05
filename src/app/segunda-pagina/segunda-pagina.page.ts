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

  descripcion: string = "Bienvenido a PlayVibe, tu tienda online de videojuegos. Aquí encontrarás los últimos videojuegos del mercado por precios asequibles y las últimas noticias sobre los videojuegos más populares. Fundada por Rubén y Enrique a principios de 2021, nuestra aplicación está diseñada para brindarte una experiencia de compra fácil y entretenida. Únete a nosotros y disfruta de un mundo lleno de diversión y aventuras digitales.";

  estadisticas = [
    {nombre: "Número Total de Videojuegos", valor:10, icono:"game-controller-outline"},
    {nombre: "Usuarios Registrados", valor: 50, icono:"people-outline"},
    {nombre: "Ventas Mensuales", valor: 1500, icono:"cash-outline"},
    {nombre: "Reseñas Videojuegos",  valor: 4.6, icono:"star-outline"},
    {nombre: "Promedio de Calificación de Videojuegos", valor:4.4, icono:"thumbs-up-outline"},
    {nombre: "Juego Más Vendido", valor: "FC 25", icono:"trophy-outline"},
    {nombre: "Premios Ganados por la Tienda", valor: 4, icono:"medal-outline"}
  ];

  ngOnInit() { 
  }

}
