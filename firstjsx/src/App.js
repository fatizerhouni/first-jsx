import Card from 'react-bootstrap/Card';
import React from 'react';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import productData from './product';

const App = () => {
  const firstName = "YourFirstName"; // Replace with your first name

  return (
    <div className="app">
      <Card>
        <Image imagePath={productData.image} />
        <Card.Body>
          <Name name={productData.name} />
          <Price price={productData.price} />
          <Description description={productData.description} />
        </Card.Body>
      </Card>
      <p>Hello, {firstName ? firstName : 'there'}!</p>
      {firstName && <img src="your-image-url.jpg" alt="Your Name" />}
    </div>
  );
};

export default App;
