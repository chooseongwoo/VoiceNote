"use client";
import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
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
  display: flex;
  padding: 11px 20px;
  flex-direction: column;
`;

export const TTSBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const AddButton = styled.button`
  padding: 8px 12px;
  margin-top: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #3dd612;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;

export const PlayListBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

export const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 500;
`;

export const DeleteAll = styled.p`
  color: #9a9a9a;
  font-size: 14px;
  font-weight: 500;
`;

export const PlayList = styled.div`
  padding-top: 7px;
`;
