import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { AddRounded, ExploreRounded } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.navbar};
  color: ${({ theme }) => theme.text_primary};
  font-weight: bold;
  font-size: 22px;
  padding: 14px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  @media only screen and (max-width: 600px) {
    padding: 10px 12px;
  }
`;

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/");
  return (
    <Container>
      AmiAI
      {/* <div style={{display:"flex"}}>
        <Button text="Create new post" leftIcon={<AddRounded />}></Button>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label class="form-check-label" for="flexSwitchCheckDefault"></label>
        </div>
      </div> */}
      {path[1] === "post" ? (
        <Button
        text="Explore Posts"
        leftIcon={<ExploreRounded style={{ fontSize: "18px" }} />}
        onClick={() => {
          navigate("/");
        }}
        type="secondary"
      ></Button>
      ) : (
        <Button
          text="Create new post"
          leftIcon={<AddRounded style={{ fontSize: "18px" }} />}
          onClick={() => {
            navigate("/post");
          }}
        ></Button>
      )}
    </Container>
  );
};

export default Navbar;
