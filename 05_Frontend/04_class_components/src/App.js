import ComponenteClase from './components/ComponenteClase'
import Tarjeta from './components/Tarjeta/'

function App() {
  return (
    <div>
      <h1>Hola desde App! 👋</h1>
      <ComponenteClase />
      <Tarjeta nombre="Pedro" direccion="Cancún" telefono="9988458554" correo="cancun@devf.mx" />
      <Tarjeta nombre="Sergio" direccion="Querétaro" telefono="442666888" correo="sergio@devf.mx" />
      <Tarjeta nombre="Jacqueline" direccion="Querétaro" telefono="4426331823" correo="jcr.debaser@gmail.com" />
      <Tarjeta nombre="Laura" direccion="Colombia" telefono="928392342" correo="laura@gmail.com" />
    </div>
  );
}

export default App;