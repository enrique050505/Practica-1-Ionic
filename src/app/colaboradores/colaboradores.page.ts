import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.page.html',
  styleUrls: ['./colaboradores.page.scss'],
})
export class ColaboradoresPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  iconoCasa = "home-outline";
  iconoSobreNosotros = "information-circle-outline";

  empresasColaboradoras=[
    { nombre: "Twitch", img:"../../assets/twitch.png", url:"https://www.twitch.tv"},
    { nombre: "Riot Games", img:"../../assets/riotGames.jpg", url:"https://www.riotgames.com/es"},
    { nombre: "Naughty Dog", img:"../../assets/naughtyDog.png", url:"https://www.naughtydog.com"},
    { nombre: "Gamescom", img:"../../assets/gamesCom.jpg", url:"https://www.gamescom.global/en"}
  ]

  streamersColaboradores=[
    { nombre: "Ibai Llanos", img:"../../assets/ibaiLlanos.jpg", url:"https://www.twitch.tv/ibai?lang=es"},
    { nombre: "Ninja", img:"../../assets/ninja.jpg", url:"https://www.twitch.tv/ninja"},
    { nombre: "DjMaRiiO", img:"../../assets/djMario.jpg", url:"https://www.youtube.com/@DjMaRiiO"},
    { nombre: "The Grefg", img:"../../assets/theGrefg.jpg", url:"https://www.youtube.com/@TheGrefg"}
  ]

}
