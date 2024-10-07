import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patrocinadores',
  templateUrl: './patrocinadores.page.html',
  styleUrls: ['./patrocinadores.page.scss'],
})
export class PatrocinadoresPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  iconoCasa = "home-outline";
  iconoSobreNosotros = "information-circle-outline";
  
  patrocinadores=[
    { nombre: "PlayStation", img:"../../assets/playStation.jpg", url:"https://www.playstation.com/es-es/"},
    { nombre: "Razer", img:"../../assets/razer.jpg", url:"https://www.razer.com/es-es"},
    { nombre: "NVIDIA", img:"../../assets/nvidia.png", url: "https://www.nvidia.com/es-es/"},
    { nombre: "PC Componentes", img:"../../assets/pcComponentes.png", url:"https://www.nvidia.com/es-es/"},
    { nombre: "EA Sports", img:"../../assets/eaSports.png", url:"https://www.ea.com/es-es"},
    { nombre: "Ubisoft", img:"../../assets/uvisoft.png", url:"https://www.ubisoft.com/es-es/"},
    { nombre: "Epic Games", img:"../../assets/epicGames.png", url:"https://www.epicgames.com/site/es-ES/home"},
    { nombre: "MSI", img:"../../assets/msi.jpg", url:"https://es.msi.com"},
    { nombre: "Steam", img:"../../assets/steam.png", url:"https://store.steampowered.com/?l=spanish"}
  ];
  
}
