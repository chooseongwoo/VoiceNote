"use client";

import styled from "styled-components";

export const Layout = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  border-bottom: 1px solid #ccc;
  padding: 0 20px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 22px;
  font-weight: 500;
`;

export const Content = styled.div`
  padding: 30px 40px 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
