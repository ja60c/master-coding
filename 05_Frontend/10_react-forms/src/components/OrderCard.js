function OrderCard(props) {
    const { pedido, nombre, direccion, telefono } = props;
    return (
        <article className="order-card">
            <img src="" alt="" className="order-card-img" />
            <h1 className="order-cart-title">{ pedido }</h1>
            <p className="order-card-name">{ nombre }</p>
            <p className ="order-card-adress">{ direccion }</p>
            <p className ="order-card-phone">{ telefono }</p>
        </article>
    );
}

export default OrderCard;