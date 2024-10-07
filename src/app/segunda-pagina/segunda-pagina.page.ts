import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segunda-pagina',
  templateUrl: './segunda-pagina.page.html',
  styleUrls: ['./segunda-pagina.page.scss'],
})
export class SegundaPaginaPage implements OnInit {

  iconoCasa = "home-outline";

  imgLogo ="../../assets/logo.jpg";

  descripcion: string = "¡Bienvenido a PlayVibe, tu tienda online de videojuegos! Aquí encontrarás los últimos videojuegos del mercado por precios asequibles, además de estar al tanto de las novedades y tendencias en el mundo de los videojuegos. Desde su lanzamiento a principios de 2021, nuestra plataforma está diseñada para brindarte una experiencia de compra intuitiva y entretenida. ¡¡Únete a nosotros, descubre y disfruta de un mundo lleno de diversión y aventuras digitales!!";
  
  mision: string = "En PlayVibe, nuestra misión es proporcionar una experiencia de compra excepcional para los amantes de los videojuegos, facilitándoles el acceso a una amplia selección de títulos de alta calidad y por un precio accesible para que puedan disfrutarlo al máximo. Nos dedicamos a construir una gran comunidad gamer donde cada uno de los jugadores se sienta valorado y pueda compartir su pasión por el gaming, además de ofrecer un servicio al cliente excelente.";
  vision: string = "Nuestra visión es posicionarnos como una de las tiendas referencias para la compra de videojuegos tanto a nivel nacional como globar, ofreciéndole a cada jugador pueda descubrir y disfrutar de sus pasiones sin límite, desde profesionales hasta aficionados al mundo digital. ";
  
  valores = [
    {nombre: "Innovación: ", descripcion:"Fomentamos un entorno de creatividad y originalidad, buscando nuevas formas de mejorar la experiencia del usuario constantemente."},
    {nombre: "Comunidad: ", descripcion: "Ofrecemos una comunidad diversa y colaborativa, donde los jugadores se sientan realmente importantes, valorados y apoyados por su pasión a los videojuegos. Además, de un ambiente inclusivo con diversidades de habilidades y experiencias, apoyando a los jugadores a compartir sus conocimientos y experiencias."},
    {nombre: "Integridad: ", descripcion: "Actuamos con transparencia y honestidad en todas nuestras interacciones, construyendo relaciones de confianza entre nuestros clientes y colaboradores. Creemos que la integridad es una parte fundamental para el éxito a largo plazo."},
    {nombre: "Calidad: ", descripcion: "Nos compretemos a ofrecer productos y servicios de alta calidad, garantizando a nuestros usuarios disfrutar de la mejor experiencia posible en cada una de sus compras e interacciones con nuestra plataforma."},
    {nombre: "Sostenibilidad: ", descripcion:"Adoptamos prácticas sostenibles que minimicen nuestro impacto medioambiental, asegurando un futuro más responsable tanto para la comunidad gamer como para el planeta."},
    {nombre: "Pasión: ", descripcion: "Nuestra pasión por los videojuegos nos impulsa a ofrecer lo mejor en cada uno de los aspectos, desde la selección de productos hasta la atención al cliente."}
  ];

  estadisticas = [
    {nombre: "Total de Videojuegos", valor:10, icono:"game-controller-outline"},
    {nombre: "Usuarios Registrados", valor: 350, icono:"people-outline"},
    {nombre: "Ventas Mensuales", valor: 400, icono:"cash-outline"},
    {nombre: "Reseñas Videojuegos",  valor: 4.4, icono:"star-outline"},
    {nombre: "Valoración media", valor:4.6, icono:"thumbs-up-outline"},
    {nombre: "Juego Más Vendido", valor: "FC 25", icono:"trophy-outline"},
    {nombre: "Premios Ganados", valor: 4, icono:"medal-outline"}
  ];

  constructor() { }
  ngOnInit() { 
  }

  estaModalAbierto = false;

  abrirModal(modalAbierto: boolean){
    this.estaModalAbierto=modalAbierto;
  }
}
