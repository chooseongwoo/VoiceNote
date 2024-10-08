"use client";

import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  padding: 11px 14px 15px 11px;
  border-radius: 10px;
  background: #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  width: 85%;
  align-items: start;
`;

export const Title = styled.p`
  width: 100%;
  color: #3dd612;
  font-size: 20px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Description = styled.p`
  width: 100%;
  color: #000;
  font-size: 18px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Button = styled.div`
  width: 36px;
  height: 36px;
`;
