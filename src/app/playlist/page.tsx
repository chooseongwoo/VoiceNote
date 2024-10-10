"use client";
import { useState, useEffect } from "react";
import TTSInputField from "@/components/TTSInputField";
import * as _ from "./style";
import Play from "@/components/Play/page";
import Text from "@/assets/Text";
import Previous from "@/assets/Previous";
import Next from "@/assets/Next";
import FilledPlay from "@/assets/FilledPlay";
import FilledStop from "@/assets/FilledStop";
import Timer from "@/assets/Timer";
import MenuBar from "@/components/MenuBar";
import TimerModal from "@/components/Modals/TimerModal";

export default function Playlist() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isTimerModalOpen, setIsTimerModalOpen] = useState(false);
  const [timerValue, setTimerValue] = useState<number>(8);

  useEffect(() => {
    const savedTimerValue = localStorage.getItem("timerValue");
    if (savedTimerValue) {
      setTimerValue(Number(savedTimerValue));
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimerValue((prevValue) => {
        if (prevValue > 0) {
          return prevValue - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTimerModalClose = () => {
    localStorage.setItem("timerValue", timerValue.toString());
    setIsTimerModalOpen(false);
  };

  const handleTimerValueChange = (value: number) => {
    setTimerValue(value);
  };

  return (
    <_.Layout>
      <_.Header>재생</_.Header>
      <_.Content>
        <_.TTSBox>
          <TTSInputField />
          <_.AddButton>재생 목록에 추가하기</_.AddButton>
        </_.TTSBox>
        <_.PlayListBox>
          <_.TextBox>
            <_.Label>재생 목록</_.Label>
            <_.DeleteAll>전체 삭제</_.DeleteAll>
          </_.TextBox>
          <_.PlayList>
            <Play order={1} title="오타니 쇼헤이이이이이이이 홈런???????" />
            <Play order={2} title="오타니 쇼헤이이이이이이이 홈런???????" />
            <Play order={3} title="오타니 쇼헤이이이이이이이 홈런???????" />
            <Play order={4} title="오타니 쇼헤이이이이이이이 홈런???????" />
            <Play order={5} title="오타니 쇼헤이이이이이이이 홈런???????" />
            <Play order={6} title="오타니 쇼헤이이이이이이이 홈런???????" />
            <Play order={7} title="오타니 쇼헤이이이이이이이 홈런???????" />
            <Play order={8} title="오타니 쇼헤이이이이이이이 홈런???????" />
            <Play order={9} title="오타니 쇼헤이이이이이이이 홈런???????" />
          </_.PlayList>
          <_.Playing>
            <_.PlayingText>재생 중</_.PlayingText>
            <_.Label>오타니 쇼헤이 홈런???</_.Label>
          </_.Playing>
          <_.Buttons>
            <Text />
            <_.Center>
              <Previous />
              <_.FilledButton onClick={handlePlayToggle}>
                {isPlaying ? <FilledStop /> : <FilledPlay />}
              </_.FilledButton>
              <Next />
            </_.Center>
            <Timer onClick={() => setIsTimerModalOpen(true)} />
          </_.Buttons>
        </_.PlayListBox>
      </_.Content>
      <MenuBar selectState={2} />
      {isTimerModalOpen && (
        <TimerModal
          value={timerValue}
          onClose={handleTimerModalClose}
          onValueChange={handleTimerValueChange}
        />
      )}
    </_.Layout>
  );
}
