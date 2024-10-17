"use client";
import MenuBar from "@/components/MenuBar";
import * as _ from "./style";
import { useEffect, useState } from "react";
import Slider from "@/components/Slider";

export default function Setting() {
  const [values, setValues] = useState({
    speed: 1.0,
    pitch: 0.0,
    gender: "NEUTRAL",
    category: "정치",
  });

  useEffect(() => {
    const storedSpeed = Number(localStorage.getItem("speed")) || 1.0;
    const storedPitch = Number(localStorage.getItem("pitch")) || 0.0;
    const storedGender = localStorage.getItem("gender") || "NEUTRAL";
    const storedCategory = localStorage.getItem("category") || "정치";

    setValues({
      speed: storedSpeed,
      pitch: storedPitch,
      gender: storedGender,
      category: storedCategory,
    });
  }, []);

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

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    setValues({ ...values, category: selectedValue });
    localStorage.setItem("category", selectedValue);
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
        <_.SelectContainer>
          <_.Label>뉴스 카테고리</_.Label>
          <_.Select value={values.category} onChange={handleCategoryChange}>
            <_.Option value="정치">정치</_.Option>
            <_.Option value="경제">경제</_.Option>
            <_.Option value="사회">사회</_.Option>
            <_.Option value="과학/기술">과학/기술</_.Option>
            <_.Option value="스포츠/엔터테인먼트">스포츠/엔터테인먼트</_.Option>
          </_.Select>
        </_.SelectContainer>
      </_.Content>
      <MenuBar selectState={3} />
    </_.Layout>
  );
}
