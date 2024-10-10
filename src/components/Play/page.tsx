"use client";
import TTSStop from "@/assets/TTSStop";
import * as _ from "./style";
import TrashCan from "@/assets/TrashCan";
import { useState } from "react";

export default function Play() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <_.Layout>
      <_.TextBox>
        <_.Order>1</_.Order>
        <_.Title isPlaying={isPlaying}>오타니 쇼헤이 홈런???</_.Title>
      </_.TextBox>
      <_.Buttons>
        {isPlaying ? null : <TTSStop width="28" />}
        <TrashCan />
      </_.Buttons>
    </_.Layout>
  );
}
