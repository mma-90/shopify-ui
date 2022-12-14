import React from "react";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "./../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 6rem;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({
    padding: "1rem 2rem",
    flexWrap: "wrap",
    height: "10rem",
  })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  ${mobile({
    minWidth: "100%",
    order: "1",
    justifyContent: "center",
  })}
`;
const Language = styled.span`
  cursor: pointer;
  text-transform: uppercase;
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  border-radius: 3px;
  padding: 0.3rem 0.5rem;
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

const Input = styled.input`
  padding: 0.2rem 0.5rem;
  border: none;
  outline: none;
  background-color: transparent;
  color: gray;

  ::placeholder {
    color: gray;
    font-style: italic;
  }

  ${mobile({
    width: "75vw",
  })}
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  ${mobile({
    justifyContent: "start",
  })}
`;

const Logo = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  text-transform: capitalize;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Item = styled.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 1rem;
  text-transform: uppercase;
  cursor: pointer;
`;

const Navbar = () => {
  // const classes = useStyles();
  return (
    <Container>
      <Left>
        <Language>en</Language>
        <SearchContainer>
          <Input placeholder="search" />
          <SearchIcon style={{ fontSize: "1.6rem", color: "#a3a3a3" }} />
        </SearchContainer>
      </Left>
      <Center>
        <Link to="/">
          <Logo>shopify</Logo>
        </Link>
      </Center>

      <Right>
        <Item>register</Item>
        <Item>login</Item>
        <Item>
          <Badge
            badgeContent={3}
            color="primary"
            style={{ fontSize: "1.6rem" }}
          >
            <ShoppingCartOutlinedIcon style={{ fontSize: "2.8rem" }} />
          </Badge>
        </Item>
      </Right>
    </Container>
  );
};

export default Navbar;
