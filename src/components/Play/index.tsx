"use client";
import TTSStop from "@/assets/TTSStop";
import * as _ from "./style";
import TrashCan from "@/assets/TrashCan";
import HeadPhone from "@/assets/HeadPhone";

interface OwnProps {
  order: number;
  title: string;
  onDelete: () => void;
  isPlaying: boolean;
  onPlayToggle: () => void;
}

export default function Play({
  order,
  title,
  onDelete,
  isPlaying,
  onPlayToggle,
}: OwnProps) {
  return (
    <_.Layout>
      <_.TextBox isPlaying={isPlaying}>
        {isPlaying ? <HeadPhone /> : <_.Order>{order}</_.Order>}
        <_.Title isPlaying={isPlaying}>{title}</_.Title>
      </_.TextBox>
      <_.Buttons>
        {isPlaying ? null : <TTSStop width="28" onStart={onPlayToggle} />}
        <TrashCan onClick={onDelete} />
      </_.Buttons>
    </_.Layout>
  );
}
