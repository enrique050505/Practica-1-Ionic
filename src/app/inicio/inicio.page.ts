import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor() { }

  //Iconos Botones Pagina Inicio
  iconoBoton1 = "person-outline";
  iconoBoton2 = "game-controller-outline";

  //Iconos 
  iconoTwitter ="logo-twitter";
  iconoInstagram = "logo-instagram";
  iconoFacebook = "logo-facebook"; 
  iconowhatsapp = "logo-whatsapp"
  iconoCasa = "home-outline";

  //Enlaces redes Sociales
  enlaceInstagram = "https://www.instagram.com";
  enlaceTwitter = "https://x.com/home?lang=es";
  enlaceFacebook = "https://www.facebook.com/?locale=es_ES";
  enlaceWhatsapp ="https://web.whatsapp.com";

  ngOnInit() {
  }

}
