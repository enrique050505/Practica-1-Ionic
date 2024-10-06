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

  descripcion: string = "¡Bienvenido a PlayVibe, tu tienda online de videojuegos! Aquí encontrarás los últimos videojuegos del mercado por precios asequibles, además de estar al tanto de las novedades y tendencias en el mundo de los videojuegos. Desde su lanzamiento a principios de 2021, nuestra plataforma está diseñada para brindarte una experiencia de compra intuitiva y entretenida. ¡¡Únete a nosotros, descubre y disfruta de un mundo lleno de diversión y aventuras digitales!!";

  estadisticas = [
    {nombre: "Total de Videojuegos", valor:10, icono:"game-controller-outline"},
    {nombre: "Usuarios Registrados", valor: 350, icono:"people-outline"},
    {nombre: "Ventas Mensuales", valor: 400, icono:"cash-outline"},
    {nombre: "Reseñas Videojuegos",  valor: 4.4, icono:"star-outline"},
    {nombre: "Valoración media", valor:4.6, icono:"thumbs-up-outline"},
    {nombre: "Juego Más Vendido", valor: "FC 25", icono:"trophy-outline"},
    {nombre: "Premios Ganados", valor: 4, icono:"medal-outline"}
  ];

  ngOnInit() { 
  }

}
