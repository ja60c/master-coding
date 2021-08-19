import useForm from "../hooks/useForm";

function OrderForm () {
    const { formData, handleChange, handleSubmit } = useForm();

    return (
         <form className="form" onSubmit={ handleSubmit }>
            <h2 className="form-title">🍩 <br/> <br/>Pide tu dona aquí</h2>

            <label for="pet-select" className="form-label">Elige un sabor</label>
            <select name="pedido" id="pet-select" className="form-input" onChange={ handleChange }>
                <option value="" disable selected>Escoge una opción</option>
                <option value="fresa">Fresa</option>
                <option value="canela">Canela</option>
                <option value="chocolate">Doble chocolate</option>
            </select>
        
            <label className="form-label">Nombre</label>
            <input className="form-input" type="text" name="nombre" placeholder="Jacqueline Callejas" onChange={ handleChange } autoComplete="off"/>

            <label className="form-label">Dirección</label>
            <input className="form-input" type="text" name="direccion" placeholder="Calle flores 34, centro" onChange={ handleChange } autoComplete="off"/>

            <label className="form-label">Teléfono</label>
            <input className="form-input" type="text" name="telefono" placeholder="442312122" onChange={ handleChange } autoComplete="off"/>

            <input className="form-submit" type="submit" value="¡Estoy listx!"/>
        </form>
    );    
}

export default OrderForm;