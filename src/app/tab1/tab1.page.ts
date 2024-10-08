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
    {nombre: "FC 25", contenido: "El esperado EA SPORTS FC 25 debutó el 27 de septiembre de 2024, consolidando su posición como uno de los juegos de fútbol más auténticos. Con nuevos modos de juegos como 'Rush' o 'Club Mode', los jugadores podrán disfrutar de una experiencia más realista que nunca.", foto: "../../assets/fc25.jpg", url:"https://www.ea.com/es/games/ea-sports-fc/fc-25"},
    {nombre: "F1 24", contenido: "F1 24 fue lanzado el 28 de mayo, ofreciendo una experiencia de Fórmula 1 más realista para los jugadores. Con nuevos modos carrera, circuitos actualizados y gráficos mejorados los jugadores pueden poner a prueba sus habilidades en cada carrera del campeonato.", foto:"../../assets/f124.jpg" ,url:"https://www.ea.com/es-es/games/f1/f1-24"},
    {nombre: "Marvel's Spider-Man 2", contenido: "La conocida secuela de Marvel's Spider-Man permite a los jugadores seguir las aventuras de Pete Parker y Miles Morales mientras se enfrentan a nuevos villanos en un mundo más amplio y dinámico. Con nuevas habilidades los jugadores podrán disfrutar de una jugabilidad fluida en el icónico universo de Marvel.", foto:"../../assets/spiderman2.png" ,url:"https://www.marvel.com/games/marvels-spider-man-2"},
    {nombre: "Assassin's Creed Mirage", contenido: "La nueva entrega de la famosa saga 'Assassin's Creed' regresa a los orígenes con un enfoque en el sigilo, la exploración urbana y el parkour. Los jugadores podrán controlar a Basim en el siglo IX en Badgad, ofreciendo una narrativa emocinante en un mundo abierto de misterio.", foto: "../../assets/assassin's.jpg", url:"https://www.ubisoft.com/es-es/game/assassins-creed/mirage"}
  ]

  versionesNuevas=[
    {nombre: "God Of War Ragnarok", contenido: "Esta nueva versión de God Of War Ragnarok ha sido lanzada para los jugadores de PC, además incluye el esperado modo denominado 'New Game Plus', que permite a los jugadores revivir la épica aventura de Kratos y Atreus con nuevos desafíos y un nivel de dificultad mayor.", foto: "../../assets/fc25.jpg", url:"https://www.ea.com/es/games/ea-sports-fc/fc-25"},
    {nombre: "Resident Evil 4", contenido: "Ha sido lanzado para las consolas de la nueva generación (PlayStation 5 y Xbox Series X|S), mejorando las gráficas y con un rendimiento más fluido proporcionando una experiencia terrorífica mucho mayor.", foto:"../../assets/f124.jpg" ,url:"https://www.ea.com/es-es/games/f1/f1-24"},
    {nombre: "Elden Ring", contenido: "La edición más reciente de Elden Ring incluye una expansión masiva que amplia el mundo y ofrece nuevos jefes con diferentes dificultas, además de nuevas áreas por descubrir y una variedad de desafíos. Además, el lanzamiento de sus versiones para PlayStation 5 y Xbox Series X|S incluye mejoras gráficas significativas.0", foto:"../../assets/spiderman2.png" ,url:"https://www.marvel.com/games/marvels-spider-man-2"},
    {nombre: "Hogwarts Legacy", contenido: "El existoso juego basado en el mundo de Harry Potter llega a Nintendo Switch, permitiendo a los jugadores explorar Hogwarts y sus alrededores sin perder la esencia mágica que lo caracteriza.", foto: "../../assets/assassin's.jpg", url:"https://www.ubisoft.com/es-es/game/assassins-creed/mirage"}
  ]
}

