import styled from "styled-components";
import { mobile, tablet } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
  background-color: aqua;

  ${mobile({
    height: "20vh",
  })}
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: brightness(0.8);
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
const Title = styled.h1`
  font-size: 3.5rem;
  color: white;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 2rem;
  text-align: center;

  ${tablet({
    fontSize: "3rem",
  })}
`;
const Button = styled.button`
  text-transform: uppercase;
  padding: 1rem;
  background-color: white;
  color: gray;
  font-weight: 600;
  font-size: 1.5rem;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: teal;
    color: white;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to="/products/category">
        <Image alt="category" src={item.img} />
        <Wrapper>
          <Title>{item.title}</Title>
          <Button>shop now</Button>
        </Wrapper>
      </Link>
    </Container>
  );
};

export default CategoryItem;
