"use client";
import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 7px;
`;

export const Label = styled.div`
  color: #000;
  font-size: 16px;
  font-weight: 500;
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const InputBox = styled.input`
  padding: 16px 14px;
  width: 100%;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  outline: none;
  border-radius: 10px;
  border: 1px solid #9a9a9a;
  &:focus {
    border: 1px solid #3dd612;
  }
  &::placeholder {
    color: #9a9a9a;
  }
`;

export const Button = styled.div`
  width: 36px;
  height: 36px;
`;
