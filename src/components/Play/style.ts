"use client";
import styled from "styled-components";

export const Layout = styled.div`
  padding: 9px 12px;
  display: flex;
  border-bottom: 1px solid #000;
  justify-content: space-between;
`;

export const TextBox = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`;

export const Order = styled.div`
  color: #33d612;
  font-size: 18px;
  font-weight: 500;
`;

export const Title = styled.div<{ isPlaying: boolean }>`
  color: ${({ isPlaying }) => (isPlaying ? "#3DD612" : "#000")};
  font-size: 16px;
  font-weight: 500;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
`;
