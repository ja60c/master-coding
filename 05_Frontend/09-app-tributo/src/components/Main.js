import {
    Carousel, Image
  } 
    from 'react-bootstrap/'

function Main() {
    return (
        <div className="main">
            <Carousel className="carrusel">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://images.mubicdn.net/images/film/93689/cache-115220-1558567519/image-w1280.jpg?size=800x"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Moonrise Kingdom</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://miro.medium.com/max/2000/1*h-kSY0qlFF4OZGJKBNExEQ.jpeg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Grand Hotel Budapest</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ytimg.com/vi/JCLVxFpftwo/maxresdefault.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Life Aquatic with Steve Sizou</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <h2 className="titulo">Wes Anderson</h2>
            <p className="descripcion">(Houston, Estados Unidos, 1 de mayo de 1969) <br/> Es un director de cine, guionista, productor y actor estadounidense. Conocido principalmente por haber dirigido las películas: Fantastic Mr. Fox, The Royal Tenenbaums, Viaje a Darjeeling, Rushmore, Moonrise Kingdom y El Gran Hotel Budapest, entre otras. En 2015 diseñó el Prada Cafè Bar Luce para la compañía de lujo italiana Prada, ya que fue en una película de los años cincuenta para recordar el diseño icónico de los palacios de diseño de Milán de esa época. </p>  
        </div>
    );
}

export default Main;