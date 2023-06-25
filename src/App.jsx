import './App.css'
import Card from './components/Card'
import imagenes from './assets/imagenes'
import Card2 from './components/Card2'

function App() {
  return (
    <div className="App">
      <div className="App_head">
        <img className="logoback" src={imagenes.logo} alt="logo" />
        <h1 className="App_title Fonttitle">MI GUSTO ES</h1>
      </div>
      <div>
        <h2 className="App_subtitle">
          <span class="material-symbols-outlined">menu</span>Menu
        </h2>
      </div>
      <div>
        <h3 className="App_subtitle2">Platillos</h3>
        <Card
          productName={'Pozole Blanco'}
          productText={
            'El pozole blanco es uno de los platillos típicos del estado de Colima.'
          }
          productPrice={'MX$70.00'}
          productImg={imagenes.plat2}
        />
        <Card
          productName={'Tacos Dorados 4pz'}
          productText={'Una pequeña tortilla doblada con relleno de papa.'}
          productPrice={'MX$50.00'}
          productImg={imagenes.plat6}
        />
        <Card
          productName={'Flautas 6pz'}
          productText={'Rollitos delgados de tortilla de maíz'}
          productPrice={'MX$50.00'}
          productImg={imagenes.plat5}
        />
        <Card
          productName={'Sopes Gordos'}
          productText={
            'También llamados pellizcadas, picadas, picaditas son una especie de tortilla gruesa, hecha de maíz y manteca.'
          }
          productPrice={'MX$35.00'}
          productImg={imagenes.plat3}
        />
        <Card
          productName={'Sopitos'}
          productText={
            'Hechos con pequeñas tortillas de unos 6 centímetros de diámetro, fritas en aceite'
          }
          productPrice={'MX$35.00'}
          productImg={imagenes.plat4}
        />
        <Card
          productName={'Guacamole'}
          productText={
            'Es una salsa mexicana preparada a base de aguacate y chile verde'
          }
          productPrice={'MX$35.00'}
          productImg={imagenes.plat1}
        />
      </div>
      <div>
        <h3 className="App_subtitle2">Combos</h3>
        <Card2
          productName={'Pozole blanco chico y Agua fresca'}
          productPrice={'MX$76.00'}
          productImg={imagenes.plat5}
          productImg2={imagenes.bebi2}
        />
        <Card2
          productName={'Flautas 4pz y Agua fresca'}
          productPrice={'MX$63.00'}
          productImg={imagenes.plat5}
          productImg2={imagenes.bebi1}
        />
        <Card2
          productName={'Sopitos 6pz y Agua fresca'}
          productPrice={'MX$67.00'}
          productImg={imagenes.plat4}
          productImg2={imagenes.bebi2}
        />
      </div>

      <div>
        <h3 className="App_subtitle2">Postres</h3>
        <Card
          productName={'Rico Arroz con leche tradicional'}
          productText={''}
          productPrice={'MX$25.00'}
          productImg={imagenes.post1}
        />
        <Card
          productName={'Rico Flan especial'}
          productText={''}
          productPrice={'MX$.25.00'}
          productImg={imagenes.post2}
        />
      </div>
      <div>
        <h3 className="App_subtitle2">Bebidas</h3>
        <Card
          productName={'Agua Fresca de Horchata'}
          productText={''}
          productPrice={'MX$20.00'}
          productImg={imagenes.bebi1}
        />
        <Card
          productName={'Agua Fresca de Jamaica'}
          productText={''}
          productPrice={'MX$20.00'}
          productImg={imagenes.bebi2}
        />
        <Card
          productName={'Refrescos'}
          productText={'(Coca, Fanta, Sprite y Mundet)'}
          productPrice={'MX$22.00'}
          productImg={imagenes.ref}
        />
        <Card
          productName={'Corona'}
          productText={''}
          productPrice={'MX$35.00'}
          productImg={imagenes.cer1}
        />
        <Card
          productName={'Indio'}
          productText={''}
          productPrice={'MX$35.00'}
          productImg={imagenes.cer2}
        />
        <Card
          productName={'Ultra'}
          productText={''}
          productPrice={'MX$35.00'}
          productImg={imagenes.cer3}
        />
        <Card
          productName={'Victoria'}
          productText={''}
          productPrice={'MX$35.00'}
          productImg={imagenes.cer4}
        />
      </div>
    </div>
  )
}

export default App
