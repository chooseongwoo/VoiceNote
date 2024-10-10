import styled from "styled-components";

export const Layout = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0px 55px;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  z-index: 30;
`;

export const Content = styled.div`
  background-color: #fff;
  width: 250px;
  height: 120px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 500;
  padding-top: 12px;
`;

export const NumberInput = styled.input`
  max-width: 100px;
  color: #3dd612;
  border: none;
  border-bottom: 1px solid #000;
  text-align: center;
  font-size: 32px;
  font-weight: 500;
  outline: none;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Minute = styled.p`
  padding-top: 20px;
  color: #000;
  font-size: 32px;
  font-weight: 500;
  display: flex;
  gap: 3px;
`;
