"use client";

import { useState } from "react";
import * as _ from "./style";
import TTSPlay from "@/assets/TTSPlay";
import TTSStop from "@/assets/TTSStop";

export default function TTSInputField() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <_.Layout>
      <_.Label>TTS</_.Label>
      <_.Bottom>
        <_.InputBox placeholder="텍스트를 입력하세요..."></_.InputBox>
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
