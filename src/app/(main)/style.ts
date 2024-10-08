"use client";
import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const Header = styled.header`
  border-bottom: 1px solid #ccc;
  padding: 0 20px;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Title = styled.p`
  color: #3dd612;
  font-size: 20px;
`;

export const Content = styled.div`
  padding: 16px 20px 0;
`;
