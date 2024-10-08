"use client";
import styled from "styled-components";

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  color: #000;
  font-size: 16px;
  font-weight: 500;
`;

export const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Slider = styled.input`
  width: 100%;
  height: 8px;
  background: #e0e0e0;
  outline: none;
  border-radius: 4px;
  margin: 10px 0;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 24px;
    height: 24px;
    border: 6px solid #3dd612;
    border-radius: 100%;
    cursor: pointer;
    background-color: #fff;
  }
`;

export const ThumbValue = styled.div`
  position: absolute;
  top: -30px;
  color: #3dd612;
  font-size: 14px;
  transform: translateX(-50%);
  white-space: nowrap;
`;

export const ValueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;
`;
