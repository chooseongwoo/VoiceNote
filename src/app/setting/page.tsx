"use client";
import MenuBar from "@/components/MenuBar";
import * as _ from "./style";
import { useState } from "react";
import Slider from "@/components/Slider";

export default function Setting() {
  const [speed, setSpeed] = useState(1.0);
  const [tone, setTone] = useState(0.0);

  const handleSpeedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpeed(Number(event.target.value));
  };

  const handleToneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTone(Number(event.target.value));
  };

  return (
    <_.Layout>
      <_.Header>설정</_.Header>
      <_.Content>
        <Slider
          label="음성 속도"
          min="0.25"
          max="4.0"
          value={speed}
          handleChange={handleSpeedChange}
        />
        <Slider
          label="음성 톤"
          min="-20"
          max="20"
          value={tone}
          handleChange={handleToneChange}
        />
        <_.SelectContainer>
          <_.Label>음성 성별</_.Label>
          <_.Select>
            <_.Option value="남성">남성</_.Option>
            <_.Option value="여성">여성</_.Option>
          </_.Select>
        </_.SelectContainer>
        <_.Button>확인</_.Button>
      </_.Content>
      <MenuBar selectState={3} />
    </_.Layout>
  );
}
