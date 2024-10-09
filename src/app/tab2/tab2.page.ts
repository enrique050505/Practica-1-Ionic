import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  icon_play="logo-playstation";
  icon_xbox="logo-xbox";
  icon_win="logo-windows";
  iconoCasa = "home-outline";
  imgUsuario="https://ionicframework.com/docs/img/demos/avatar.svg";
  plataformasSeleccionadas = { playstation:false, pc: false, xbox: false};
  videojuegosTienda=[
    {nombre: "GTA V", precio: "45,99€", foto:"https://phantom-marca-mx.unidadeditorial.es/b6728e2232f92786a7f6d50c50a7e36d/resize/828/f/jpg/mx/assets/multimedia/imagenes/2024/02/05/17070878111134.jpg", descripcion:"Grand Theft Auto V (GTA V) es un videojuego de acción y aventura desarrollado por Rockstar North y lanzado en 2013. Ambientado en la ficticia ciudad de Los Santos, que es un reflejo de Los Ángeles, el juego sigue la vida de tres protagonistas: Michael De Santa, un excriminal que intenta vivir una vida normal; Franklin Clinton, un joven que busca mejorar su situación en un entorno complicadoy Trevor Philips, un sociopatía violento e impredecible.", icon_compra:"cart-outline", plataformasSeleccionadas:{playstation: false, pc: false, xbox: false}},
    {nombre: "FC 25", precio: "55,99€", foto:"https://i.ytimg.com/vi/pBM2xyco_Kg/maxresdefault.jpg", descripcion: "FC 25 es la nueva entrega del popular videojuego de fútbol desarrollado por EA Sports, que reemplaza a la saga FIFA tras el fin de la colaboración con la federación. FC 25 continúa con el legado de realismo y jugabilidad fluida, ofreciendo una experiencia futbolística mejorada con gráficos avanzados, físicas realistas y modos de juego icónicos como Ultimate Team, Modo Carrera, y Clubes Pro.", icon_compra:"cart-outline", plataformasSeleccionadas:{playstation: false, pc: false, xbox: false}},
    {nombre: "Call of Duty: Black Ops II", precio:"35,99€", foto:"https://data.xxlgamer.com/products/1467/F9JqxCJQ0SaqaP-big.jpg", descripcion:"Call of Duty: Black Ops II fue aclamado por la crítica y se convirtió en uno de los títulos más exitosos de la franquicia, siendo reconocido por su innovadora narrativa y su adictivo modo multijugador.", icon_compra:"cart-outline", plataformasSeleccionadas:{playstation: false, pc: false, xbox: false}},
    {nombre: "F1 24 Champions Edition", precio:"59,99€", foto:"https://static0.hardcoregamerimages.com/wordpress/wp-content/uploads/2024/04/f124champion.jpg", descripcion:"F1 24 es la última entrega del videojuego oficial de la Fórmula 1, desarrollado por Codemasters y EA Sports. Ofrece una experiencia de simulación de carreras mejorada, con gráficos realistas, mecánicas de conducción precisas y modos de juego variados, como el modo carrera y multijugador. Además, incluye las escuderías, pilotos y circuitos actualizados de la temporada 2024, permitiendo a los jugadores experimentar la emoción del campeonato mundial de F1.", icon_compra:"cart-outline", plataformasSeleccionadas:{playstation: false, pc: false, xbox: false}},
    {nombre: "Blasphemous 2", precio:"25,99€", foto:"https://image.api.playstation.com/vulcan/ap/rnd/202307/2609/5b7d787deb993232e95a008bed7081f9a824049554ad1bc4.png", descripcion:"Blasphemous 2 es un juego de acción y plataformas de estilo metroidvania, desarrollado por The Game Kitchen. Es la secuela de Blasphemous, y sigue la historia del Penitente, un guerrero místico atrapado en un mundo oscuro y religioso lleno de criaturas grotescas y peligros sobrenaturales. El juego destaca por su arte pixelado detallado, combates desafiantes, mecánicas de exploración no lineales y una narrativa profundamente inspirada en la iconografía religiosa y el folclore español. Los jugadores deben enfrentarse a jefes imponentes, resolver acertijos y desbloquear habilidades mientras exploran este mundo siniestro.",  icon_compra:"cart-outline", plataformasSeleccionadas:{playstation: false, pc: false, xbox: false}},
    {nombre: "Minecraft", precio:"9,99€", foto:"https://image.api.playstation.com/vulcan/ap/rnd/202407/0401/670c294ded3baf4fa11068db2ec6758c63f7daeb266a35a1.png", descripcion:"Minecraft se destaca por su estilo gráfico distintivo, su amplia comunidad de jugadores, y la posibilidad de modificar el juego a través de mods, lo que lo convierte en una plataforma versátil para la creatividad y la exploración. Con su jugabilidad accesible y su enfoque en la creatividad, Minecraft ha logrado convertirse en uno de los videojuegos más vendidos de la historia.", icon_compra:"cart-outline", plataformasSeleccionadas:{playstation: false, pc: false, xbox: false}},
    {nombre: "For Honor", precio:"9,90€", foto:"https://i.blogs.es/6a75c5/honor1/1366_2000.jpg", descripcion:"For Honor es un juego de acción y combate en tercera persona desarrollado por Ubisoft, donde los jugadores eligen entre varias facciones históricas: caballeros, vikingos, samuráis y guerreros Wu Lin. El juego se centra en enfrentamientos cuerpo a cuerpo, utilizando un innovador sistema de combate llamado Arte de la Batalla, que permite a los jugadores controlar con precisión los ataques y defensas.", icon_compra:"cart-outline", plataformasSeleccionadas:{playstation: false, pc: false, xbox: false}},
    {nombre: "Then Binding of Isaac", precio:"8,00€", foto:"https://cdn1.epicgames.com/dbf5337d024e457bac68f2059112da86/offer/EGS_TheBindingofIsaacRepentance_NicalisIncEdmundMcmillen_S2-1200x1600-eb480826546ffb2ed1560ceec262b615.jpg", descripcion:"The Binding of Isaac es un juego de acción y aventura en 2D con elementos de roguelike, creado por Edmund McMillen y lanzado en 2011. El juego sigue la historia de Isaac, un niño que, tras ser aterrorizado por su madre, se aventura a escapar a un sótano lleno de criaturas grotescas y peligrosas.", icon_compra:"cart-outline", plataformasSeleccionadas:{playstation: false, pc: false, xbox: false}},
    {nombre: "Dark Souls III", precio:"29,99€", foto:"https://image.api.playstation.com/cdn/EP0700/CUSA03365_00/OFMeAw2KhrdaEZAjW1f3tCIXbogkLpTC.png", descripcion:"Dark Souls III ofrece una experiencia intensa en un mundo sombrío y en ruinas. Los jugadores se pueden enfrentar a varios jefes y deben despertar a los Señores de la Ceniza. Con combates difíciles, el juego desafía a los jugadores a explorar un mundo amplio.", icon_compra:"cart-outline", plataformasSeleccionadas:{playstation: false, pc: false, xbox: false}},
    {nombre: "The Last of Us II", precio:"35,99€", foto:"https://image.api.playstation.com/vulcan/img/rnd/202010/2618/w48z6bzefZPrRcJHc7L8SO66.png", descripcion:"The Last of Us II sigue a Ellie en busca de venganza tras una tragedia personal. El juego se centra en la combinación de acción y exploración en un entorno detallado con una toma de decisiones difíciles que crean una experiencia emocional intensa.", icon_compra:"cart-outline", plataformasSeleccionadas:{playstation: false, pc: false, xbox: false}}
  ]

  constructor(private toastController: ToastController){}
  async comprar(videojuego: any){
    const{playstation, pc, xbox}=videojuego.plataformasSeleccionadas;
    if(!playstation && !pc && !xbox){
      const toast = await this.toastController.create({
        message: `No has seleccionado nada. Por favor, selecciona alguna plataforma`,
        duration: 2000,
        position: 'top',
        color:'danger'
      });
      toast.present();
      }else{
      const toast = await this.toastController.create({
        message:`Has comprado ${videojuego.nombre}`,
        duration: 2000,
        position: 'top',
        color:'success'
      });
      toast.present();
    }
  }
}
