import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  padding: 40px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  background: linear-gradient(135deg, #f8f9fa, #e3f2fd);
  min-height: 100vh;
`;

const Title = styled.h1`
  width: 100%;
  font-size: 2rem;
  color: #333;
  margin-bottom: 30px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 200px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 15px;
`;

const ProductName = styled.h2`
  font-size: 1.1rem;
  color: #222;
  margin-bottom: 8px;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  color: #007bff;
  font-weight: bold;
  margin: 0;
`;

function Affichage({ list }) {
  return (
    <Container>
      <Title>Produits disponibles :</Title>

      {list.map((image, index) => (
        <Card key={index}>
          <ProductImage src={image.img} alt={image.name} />
          <Info>
            <ProductName>{image.name}</ProductName>
            <ProductPrice>{image.prix} DH</ProductPrice>
          </Info>
        </Card>
      ))}
    </Container>
  );
}

export default Affichage;

