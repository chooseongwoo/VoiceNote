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

export const Label = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Select = styled.select`
  width: 100%;
  height: 50px;
  border: 1px solid #3dd612;
  background-color: #f9f9f9;
  border-radius: 8px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #2ca905;
  }
  color: #000;
`;

export const Option = styled.option`
  font-size: 16px;
  background-color: #ffffff;
  color: #000;
`;
