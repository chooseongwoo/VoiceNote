"use client";
import styled from "styled-components";

export const Layout = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding-bottom: 90px;
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
  max-width: 240px;
  font-size: 16px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const DeleteAll = styled.p`
  color: #9a9a9a;
  font-size: 14px;
  font-weight: 500;
`;

export const PlayList = styled.div`
  padding-top: 7px;
  height: 40vh;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Bottom = styled.div`
  display: flex;
  height: 137px;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Playing = styled.div`
  width: 100%;
  padding-top: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
`;

export const PlayingText = styled.p`
  color: #878787;
  font-size: 14px;
  font-weight: 500;
`;

export const Buttons = styled.div`
  padding: 12px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const FilledButton = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
