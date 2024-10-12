"use client";
import styled from "styled-components";

export const Layout = styled.div`
  width: 100vw;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 10;
  bottom: 0px;
  right: 0;
  padding: 0 80px 20px;
  background-color: #fff;
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div<{ select?: string }>`
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  color: ${(props) => (props.select == "true" ? "#3dd612" : "#bcbcbc")};
`;
