import React, { useState, useEffect } from 'react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideshowImages = [
    '/slideshow_car_1.png',
    '/slideshow_car_2.png',
    '/slideshow_car_3.png',
    '/slideshow_car_4.png',
    '/slideshow_car_5.png',
    '/slideshow_car_6.png',
    '/slideshow_car_7.png',
  ];

  const carData = [
    { name: 'Lamborghini Huracán', image: '/grid_car_1.jpg' },
    { name: 'Mazda MX-5 Miata', image: '/grid_car_2.jpg' },
    { name: 'McLaren 720S', image: '/grid_car_3.jpg' },
    { name: 'Bugatti Chiron', image: '/grid_car_4.jpg' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideshowImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [slideshowImages.length]);

  return (
    <div>
      {/* Slideshow Section */}
      <section id="home" style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
        <div
          className="slideshow-background"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.5) blur(3px)',
            backgroundImage: `url(${slideshowImages[currentSlide]})`,
            transition: 'background-image 1s ease-in-out',
          }}
        ></div>
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', color: 'white', textAlign: 'center' }}>
          <h1>Motor Horses</h1>
          <p>Sua paixão por carros começa aqui.</p>
          <button onClick={() => document.getElementById('carros').scrollIntoView({ behavior: 'smooth' })} style={{ padding: '15px 30px', fontSize: '1.2em', backgroundColor: '#FF4500', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Conheça nossos carros
          </button>
        </div>
      </section>

      {/* Carros Section */}
      <section id="carros" style={{ padding: '50px 20px', textAlign: 'center' }}>
        <h2>Nossos Carros</h2>
        <div className="car-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '30px' }}>
          {carData.map((car, index) => (
            <div key={index} className="car-item">
              <img src={car.image} alt={car.name} />
              <h3>{car.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Sobre Nós Section */}
      <section id="sobre-nos" style={{ padding: '50px 20px', textAlign: 'center', backgroundColor: '#f4f4f4' }}>
        <h2>Sobre Nós</h2>
        <p>A Motor Horses nasceu da paixão por automóveis. Fundada em 2020, nossa missão é conectar entusiastas a veículos que transcendem a simples locomoção, oferecendo uma experiência de direção inigualável. Com uma curadoria rigorosa, garantimos que cada carro em nosso showroom não é apenas um meio de transporte, mas uma obra de arte sobre rodas. Nosso compromisso é com a excelência, a transparência e a satisfação total de nossos clientes, construindo uma comunidade onde a paixão por carros é o elo principal.</p>
      </section>

      {/* Contato Section */}
      <section id="contato" style={{ padding: '50px 20px', textAlign: 'center' }}>
        <h2>Contato</h2>
        <p>Email: contato@motorhorses.com</p>
        <p>Telefone: (XX) XXXX-XXXX</p>
        <p>Redes Sociais: Instagram, Facebook, Twitter</p>
      </section>
    </div>
  );
};

export default Home;

