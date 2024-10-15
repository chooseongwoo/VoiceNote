"use client";

import { SetStateAction, useState } from "react";
import * as _ from "./style";
import TTSPlay from "@/assets/TTSPlay";
import TTSStop from "@/assets/TTSStop";

interface OwnProps {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  onStart?: () => void;
  isPlaying?: boolean;
  setIsPlaying: React.Dispatch<SetStateAction<boolean>>;
}

export default function TTSInputField({
  onStart,
  value,
  onChange,
  isPlaying,
  setIsPlaying,
}: OwnProps) {
  return (
    <_.Layout>
      <_.Label>TTS</_.Label>
      <_.Bottom>
        <_.InputBox
          onChange={(e) => onChange(e.target.value)}
          value={value}
          placeholder="텍스트를 입력하세요..."
        />
        <_.Button
          onClick={() => {
            setIsPlaying(!isPlaying);
            if (onStart) {
              onStart();
            }
          }}
        >
          {isPlaying ? <TTSPlay /> : <TTSStop />}
        </_.Button>
      </_.Bottom>
    </_.Layout>
  );
}
