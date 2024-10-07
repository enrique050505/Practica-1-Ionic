import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  contenido_noticia1="El Mundial de League of Legends 2024 ha comenzado con una intensidad inigualable, reuniendo a los mejores equipos del mundo en la competencia más esperada del año. Equipos de las principales regiones, como Corea del Sur, China, Europa y América del Norte, se enfrentan en batallas que prometen dejar huella en la historia del juego. ";
  foto_lolo="https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-80471666c140f790f28dff68d72c384b";
  contenido_noticia2="El esperado EA SPORTS FC 25 debutó el 27 de septiembre de 2024, consolidando su posición como uno de los juegos de fútbol más auténticos. EA ha apostado fuerte por su innovadora tecnología HyperMotionV y la inteligencia artificial FC IQ, las cuales proporcionan una experiencia de juego más táctica y realista. "
  foto_fifa="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000074799/ab3989c5c208683e007deb3327a1ce70a8fa6cb38b06cfb8c2c80d563b19cfc7";
  contenido_noticia3="La temporada de F1 2024 ha comenzado con gran emoción tras la primera carrera en el Gran Premio de Bahréin, que dejó a los fanáticos del automovilismo con la promesa de una campaña llena de sorpresas y giros inesperados. "  
  fotos_overwatch="https://media.contentapi.ea.com/content/dam/ea/f1/f1-24/common/f124-featured-image-16x9.jpg.adapt.crop16x9.575p.jpg";
  contenido_noticia4="El Valorant Champions 2024 ha comenzado con toda la emoción que caracteriza al torneo más prestigioso del shooter táctico de Riot Games. Este año, los mejores equipos de todo el mundo se han reunido para competir por el codiciado título de campeón, y los primeros enfrentamientos ya han dejado a los fanáticos al borde de sus asientos.";
  foto_valorant="https://esportsbureau.com/wp-content/uploads/2020/04/valorant.jpg";
  contido_noticia5="En octubre de 2024, Red Dead Redemption 2 sigue dando de qué hablar con interesantes novedades. Rockstar lanzó un nuevo evento de Halloween para Red Dead Online, donde los jugadores deben enfrentarse a hordas de enemigos en el evento “All Hallow’s Call to Arms”.​";
  foto_rd2="https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg";
  contenido_noticia6="Una de las últimas noticias sobre God of War Ragnarök es que su esperada expansión, el DLC Valhalla, se lanzará el 12 de diciembre de 2023. En este contenido adicional, Kratos enfrentará nuevos desafíos en un entorno de tipo roguelite, donde deberá adaptarse y mejorar tras cada intento fallido, ya que cada derrota lo llevará de vuelta a las puertas del Valhalla para intentarlo nuevamente. ";
  foto_ragnarock="https://cdn1.epicgames.com/spt-assets/edaff839f0734d16bc89d2ddb1dc9339/steel-magnolia-15owu.jpg";
  contenido_noticia7="Assassin's Creed Unity ha vuelto a captar la atención en 2024, a casi diez años de su lanzamiento. Uno de los momentos más destacados fue su aparición en la ceremonia de apertura de los Juegos Olímpicos de París, que rindió homenaje a este título ambientado en la Revolución Francesa. "
  foton_unity="https://image.api.playstation.com/cdn/UP0001/CUSA00663_00/arnlFWX6Y6ZlGyCCYWmth94Shtw44kON.png";
  contenido_noticia8="Una gran noticia para los fans de Blasphemous 2: el 31 de octubre de 2024 se lanzará el primer DLC llamado Mea Culpa. Esta expansión se centra en la icónica espada Mea Culpa de la primera entrega, e incluirá dos nuevas zonas, jefes adicionales y misiones inéditas. Además, habrá una nueva arma, rezos, NPCs, cuentas de rosario y logros para descubrir​."
  foto_blb="https://store-images.s-microsoft.com/image/apps.54518.14467989922179877.1ceb8db6-3d8d-4caa-a83f-7ddb65f43744.1570e626-3e1a-4b2e-bfbe-b5a97e034f0f?q=90&w=480&h=270"
  contenido_noticia9="En 2024, Call of Duty: Black Ops 3 sigue siendo un juego popular, pero enfrenta riesgos de seguridad graves, especialmente en PC. Los hackers han explotado vulnerabilidades en el juego, lo que ha permitido ataques de ejecución remota de código (RCE) y la filtración de direcciones IP de los jugadores. ";
  foto_bo3="https://store-images.s-microsoft.com/image/apps.24461.66777443557046310.abf0f423-a960-4f91-982f-7c0e898cf325.6577cc39-16b4-4a2e-9981-368c1d0065cd?q=90&w=480&h=270";
  contenido_noticia10="En el mundo de Rainbow Six: Siege, una de las últimas novedades es la incorporación de 10 nuevos conjuntos de skins para equipos de esports. A través del programa R6 Share, los jugadores pueden apoyar a organizaciones profesionales de esports, como Dplus Kia, Falcons, Furia y M80, adquiriendo estos paquetes de cosméticos.  "
  foto_r6="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4IZecJyhvcIUxxu0Rd1vjX/b9fb7577b74b56704d3d2b34be639397/R6S_Y7_KEYART_STANDARD.jpg";
  contenido_noticia11="La noticia más reciente sobre Blasphemous 2 es el lanzamiento del DLC Mea Culpa el 31 de octubre de 2024. Este contenido descargable introduce dos nuevas zonas, jefes adicionales, misiones inéditas y, como novedad, la legendaria espada Mea Culpa del primer juego. "
  foto_blb2="https://image.api.playstation.com/vulcan/ap/rnd/202307/2609/5b7d787deb993232e95a008bed7081f9a824049554ad1bc4.png"
  contenido_noticia12="Recientemente, Elden Ring lanzó una nueva actualización, la versión 1.15, que introduce diversas mejoras de rendimiento y correcciones de errores, especialmente para los usuarios de PC y PlayStation."
  foto_elden="https://image.api.playstation.com/vulcan/ap/rnd/202107/1612/Y5RHNmzAtc6sRYwZlYiKHAxN.png";
}

