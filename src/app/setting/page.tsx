"use client";
import MenuBar from "@/components/MenuBar";
import * as _ from "./style";
import { useState } from "react";
import Slider from "@/components/Slider";

export default function Setting() {
  const [values, setValues] = useState({
    speed: Number(localStorage.getItem("speed")) || 1.0,
    pitch: Number(localStorage.getItem("pitch")) || 0.0,
    gender: localStorage.getItem("gender") || "NEUTRAL",
  });

  const handleSpeedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSpeed = Number(event.target.value);
    setValues({ ...values, speed: newSpeed });
    localStorage.setItem("speed", newSpeed.toString());
  };

  const handlePitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPitch = Number(event.target.value);
    setValues({ ...values, pitch: newPitch });
    localStorage.setItem("pitch", newPitch.toString());
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setValues({ ...values, gender: selectedValue });
    localStorage.setItem("gender", selectedValue);
  };

  return (
    <_.Layout>
      <_.Header>설정</_.Header>
      <_.Content>
        <Slider
          label="음성 속도"
          min="0.25"
          max="4.0"
          value={values.speed}
          handleChange={handleSpeedChange}
        />
        <Slider
          label="음성 톤"
          min="-20"
          max="20"
          value={values.pitch}
          handleChange={handlePitchChange}
        />
        <_.SelectContainer>
          <_.Label>음성 성별</_.Label>
          <_.Select value={values.gender} onChange={handleGenderChange}>
            <_.Option value="MALE">남성</_.Option>
            <_.Option value="NEUTRAL">중성</_.Option>
            <_.Option value="FEMALE">여성</_.Option>
          </_.Select>
        </_.SelectContainer>
      </_.Content>
      <MenuBar selectState={3} />
    </_.Layout>
  );
}
