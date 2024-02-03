import styles from "./page.module.css";

const Equipos = ({ equipos }) => {
return (
<div className={styles.container__list}>
<h2 className={styles.title}>Equipos de Fútbol</h2>
{equipos.map((equipo) => (
<div key={equipo.id}>
<h3 className={styles.nameclub}>{equipo.nombre}</h3>
<ul >
<div className={styles.columnas}>{equipo.plantilla.map((jugador) => (
<li className={styles.container__list} key={jugador.id}>
<strong>{jugador.nombre}</strong>
<p>Altura: {jugador.Altura}m <br></br> Peso:
{jugador.Peso}Kg</p>
<br></br><img className={styles.imagen} src={jugador.imagen}  />
</li>
))}</div>
</ul>
</div>
))}
</div>
);
};

export default function Home() {
  // Simula la obtención de datos desde tu JSON
const equiposData = [
  {"id": 1,
  "nombre": "Real Madrid",
  "plantilla":[
  {"id": 1,"nombre":"Eden Hazard","Altura":"1.75","Peso":"74","imagen":"https://tmssl.akamaized.net/images/foto/galerie/eden-hazard-real-madrid-2021-1667835449-95863.jpg?lm=1667835470"},
  {"id": 2,"nombre":"Gonzalo García","Altura":"1.82","Peso":"74","imagen":"https://images.daznservices.com/di/library/DAZN_News/a2/da/gonzalo-garcia-real-madrid-castilla_1oj7aphlqfn391n61fdjcixwvg.jpg?t=1451933514"},
  {"id": 3,"nombre":"Karim Benzema","Altura":"1.85","Peso":"81","imagen":"https://i2-prod.football.london/incoming/article28465231.ece/ALTERNATES/s615/0_GettyImages-1773324509.jpg"}
  ]},
  {"id": 2,
  "nombre": "Barcelona",
  "plantilla":[
  {"id": 1,"nombre":"Marc-André ter Stegen","Altura":"1.75","Peso":"74","imagen":"https://www.fcbarcelonanoticias.com/uploads/s1/13/76/01/4/ter-stegen-partido.jpeg"},
  {"id": 2,"nombre":"Iñigo Martinez","Altura":"1.82","Peso":"74","imagen":"https://www.fcbarcelonanoticias.com/uploads/s1/13/97/38/4/inigo-martinez-recuperado.jpeg"},
  {"id": 3,"nombre":"Gavi","Altura":"1.85","Peso":"81","imagen":"https://www.fcbarcelonanoticias.com/uploads/s1/13/16/72/4/gavi-en-un-partido-con-el-barc-a-copy.jpeg"}
  ]},
  {"id": 3,
  "nombre": "Manchester City",
  "plantilla":[
  {"id": 1,"nombre":"Ederson Moraes","Altura":"1.88","Peso":"86","imagen":"https://i2-prod.football.london/incoming/article28100404.ece/ALTERNATES/s615/0_GettyImages-1791506624.jpg"},
  {"id": 2,"nombre":"Issa Kaboré","Altura":"1.80","Peso":"77","imagen":"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt712581f60f4ddf83/62d12f553165b90fc617a874/GettyImages-1340536594.jpg?auto=webp&format=pjpg&width=3840&quality=60"},
  {"id": 3,"nombre":"Bernardo Silva","Altura":"1.73","Peso":"64","imagen":"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt9ad02ce8de2716a8/626859c2296c136fab752607/Bernardo_Silva_Manchester_City_Real_Madrid_Champions_League_2021-22.jpg?auto=webp&format=pjpg&width=3840&quality=60"}
  ]},
  {"id": 4,
  "nombre": "Inter",
  "plantilla":[
  {"id": 1,"nombre":"Alex Cordaz","Altura":"1.88","Peso":"83","imagen":"https://icdn.sempreinter.com/wp-content/uploads/2020/12/alex-cordaz-scaled-e1609183214828.jpg"},
  {"id": 2,"nombre":"Benjamin Pavard","Altura":"1.86","Peso":"76","imagen":"https://sportal.es/wp-content/uploads/2023/10/benjamin-pavard_12255751190x786.jpg"},
  {"id": 3,"nombre":"Davide Frattesi","Altura":"1.78","Peso":"74","imagen":"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt816ae038cc18855b/659957443fdcc0040ab7e79f/frattesi(1).jpg?auto=webp&format=pjpg&width=3840&quality=60"}
  ]},
  {"id": 5,
  "nombre":"PSV",
  "plantilla":[
  {"id": 1,"nombre":"Joel Drommel","Altura":"1.93","Peso":"87","imagen":"https://r.testifier.nl/Acbs8526SDKI/resizing_type:fill/watermark:Pro+Shots/width:1200/height:900/plain/https%3A%2F%2Fs3-newsifier.ams3.digitaloceanspaces.com%2Fwww.ajaxshowtime.com%2Fimages%2F2021-09%2Fdrommel-psv-2122-61520e44a8296.jpg"},
  {"id": 2,"nombre":"André Ramalho","Altura":"1.83","Peso":"78","imagen":"https://www.psv.nl/upload_mm/3/b/6/cid105390_1689759165785_cid80040_210721PZ11944_375x714_progr_95.jpg"},
  {"id": 3,"nombre":"Isaac Babadi","Altura":"1.78","Peso":"73","imagen":"https://footballsierraleone.net/wp-content/uploads/2023/08/Isaac-Babadis-net-first-Champions-League-goal-for-PSV.jpg"}
  ]}
  // ... agregar otros equipos
  ];
  return (
  <main className={styles.main}>
  <div className={styles.cuadro}>
  <h1>Mi Aplicación de Fútbol</h1>
  <Equipos equipos={equiposData} />
  </div>
  </main>
  );
  }