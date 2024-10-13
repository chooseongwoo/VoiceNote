"use client";

import { useState } from "react";
import * as _ from "./style";
import TTSPlay from "@/assets/TTSPlay";
import TTSStop from "@/assets/TTSStop";

interface OwnProps {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

export default function TTSInputField({ value, onChange }: OwnProps) {
  const [isPlaying, setIsPlaying] = useState(false);
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
          }}
        >
          {isPlaying ? <TTSPlay /> : <TTSStop />}
        </_.Button>
      </_.Bottom>
    </_.Layout>
  );
}
