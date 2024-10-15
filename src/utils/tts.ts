import { SetStateAction } from "react";

let currentAudio: HTMLAudioElement | null = null;

export const startTTS = async (
  text: string,
  setIsPlaying: React.Dispatch<SetStateAction<boolean>>
) => {
  try {
    const speed = localStorage.getItem("speed");
    const pitch = localStorage.getItem("pitch");
    const gender = localStorage.getItem("gender");
    const response = await fetch(
      `/api/speech?text=${encodeURIComponent(
        text
      )}&speed=${speed}&pitch=${pitch}&gender=${gender}`
    );
    if (!response.ok) {
      setIsPlaying(false);
      throw new Error("TTS 변환 중 오류 발생");
    }

    const audioBuffer = await response.arrayBuffer();
    const audioBlob = new Blob([audioBuffer], { type: "audio/wav" });
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);

    if (currentAudio) {
      currentAudio.pause();
      currentAudio = null;
    }

    audio.addEventListener("ended", () => {
      setIsPlaying(false);
    });

    currentAudio = audio;
    audio.play();
  } catch (error) {
    console.error("TTS 변환 중 오류 발생:", error);
    setIsPlaying(false);
  }
};

export const stopTTS = () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
};
