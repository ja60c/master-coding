import Header from "../components/Header";
import OrderCard from "../components/OrderCard";

function OrderService () {
    return(
       <>
        <Header title="Tu orden es:" description="Aquí se muestra la información de tu pedido!" />
        <OrderCard pedido="chocolate" nombre="pedrito" direccion="cancun" telefono="12312"/>
      </>
    )
}

export default OrderService;