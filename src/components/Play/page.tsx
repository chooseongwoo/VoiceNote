"use client";
import TTSStop from "@/assets/TTSStop";
import * as _ from "./style";
import TrashCan from "@/assets/TrashCan";
import { useState } from "react";

interface OwnProps {
  order: number;
  title: string;
}

export default function Play({ order, title }: OwnProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <_.Layout>
      <_.TextBox>
        <_.Order>{order}</_.Order>
        <_.Title isPlaying={isPlaying}>{title}</_.Title>
      </_.TextBox>
      <_.Buttons>
        {isPlaying ? null : <TTSStop width="28" />}
        <TrashCan />
      </_.Buttons>
    </_.Layout>
  );
}
