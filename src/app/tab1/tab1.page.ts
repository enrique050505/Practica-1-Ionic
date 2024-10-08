import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  iconoCasa = "home-outline";
  imgUsuario="https://ionicframework.com/docs/img/demos/avatar.svg";
  segmentoSeleccionado = "Competiciones";

  competicionesESports=[
    {nombre: "Mundial de League of Legends", contenido: "La competición más esperada del año, El Mundial de League of Legends, ha comenzado, reuniendo a los mejores equipos del mundo. Equipos de las regiones como Corea del Sur, China, Europa y América del Norte se enfrentan en batallas épicas.", foto: "../../assets/mundialLol.jpg", url:"https://lolesports.com/es-MX/news/worlds-2024-"},
    {nombre: "Valorant Champions Tour", contenido: "El torneo más prestigioso de Valorant ya se encuentran en marcha, con los mejores equipos del mundo compitiendo por el título de campeón y la gloria.", foto:"../../assets/valorantChampions.jpg" ,url:"https://playvalorant.com/es-es/news/tags/valorant-champions-tour/"},
    {nombre: "Rainbow Six Invitational", contenido: "El torneo de Rainbow Six ha arrancado, enfrentando a los equipos más talentosos del mundo a través de enfrentamientos llenos de emoción, estrategias y mucha acción, con el objetivo de coronarse como campeón.", foto:"../../assets/rainbowSix.png" ,url:"https://www.esports.net/wiki/tournaments/six-invitational/"}
  ]

  novedadesJuegos=[
    {nombre: "FC 25", contenido: "El esperado EA SPORTS FC 25 debutó el 27 de septiembre de 2024, consolidando su posición como uno de los juegos de fútbol más auténticos. Con nuevos modos de juegos como 'Rush' o 'Club Mode', los jugadores podrán disfrutar de una experiencia más realista que nunca.", foto: "../../assets/mundialLol.jpg", url:"https://lolesports.com/es-MX/news/worlds-2024-"},
    {nombre: "F1 24", contenido: ".", foto:"../../assets/valorantChampions.jpg" ,url:"https://playvalorant.com/es-es/news/tags/valorant-champions-tour/"},
    {nombre: "Rainbow Six Invitational", contenido: "El torneo de Rainbow Six ha arrancado, enfrentando a los equipos más talentosos del mundo a través de enfrentamientos llenos de emoción, estrategias y mucha acción, con el objetivo de coronarse como campeón.", foto:"../../assets/rainbowSix.png" ,url:"https://www.esports.net/wiki/tournaments/six-invitational/"},
    {nombre: "Mundial de League of Legends", contenido: "La competición más esperada del año, El Mundial de League of Legends, ha comenzado, reuniendo a los mejores equipos del mundo. Equipos de las regiones como Corea del Sur, China, Europa y América del Norte se enfrentan en batallas épicas.", foto: "../../assets/mundialLol.jpg", url:"https://lolesports.com/es-MX/news/worlds-2024-"}
  ]

}

