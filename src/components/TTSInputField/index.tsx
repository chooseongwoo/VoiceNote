"use client";

import { SetStateAction } from "react";
import * as _ from "./style";
import TTSPlay from "@/assets/TTSPlay";
import TTSStop from "@/assets/TTSStop";

interface OwnProps {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  onStart?: () => void;
  onStop?: () => void;
  isPlaying?: boolean;
  setIsPlaying: React.Dispatch<SetStateAction<boolean>>;
}

export default function TTSInputField({
  onStart,
  onStop,
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
            if (!isPlaying) {
              onStart!();
            } else {
              onStop!();
            }
          }}
        >
          {isPlaying ? <TTSPlay /> : <TTSStop />}
        </_.Button>
      </_.Bottom>
    </_.Layout>
  );
}
