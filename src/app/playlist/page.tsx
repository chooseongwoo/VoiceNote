"use client";
import { useState, useEffect } from "react";
import TTSInputField from "@/components/TTSInputField";
import * as _ from "./style";
import Play from "@/components/Play/index";
import Text from "@/assets/Text";
import Previous from "@/assets/Previous";
import Next from "@/assets/Next";
import FilledPlay from "@/assets/FilledPlay";
import FilledStop from "@/assets/FilledStop";
import Timer from "@/assets/Timer";
import MenuBar from "@/components/MenuBar";
import TimerModal from "@/components/Modals/TimerModal";
import TextModal from "@/components/Modals/TextModal";
import { news } from "@/types/news";

export default function Playlist() {
  const [text, setText] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isTimerModalOpen, setIsTimerModalOpen] = useState(false);
  const [isTextModalOpen, setIsTextModalOpen] = useState(false);
  const [timerValue, setTimerValue] = useState<number>(15);
  const [newsList, setNewsList] = useState<news[]>(() => {
    const savedNews = localStorage.getItem("savedNews");
    return savedNews ? JSON.parse(savedNews) : [];
  });

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

  const handleAddPlay = (value: string) => {
    if (text) {
      setNewsList([...newsList, { title: value, description: value }]);
    }
    setText("");
  };

  const handleDeletePlay = (index: number) => {
    const updatedNewsList = newsList.filter(
      (_, newsIndex) => newsIndex !== index
    );
    setNewsList(updatedNewsList);
  };

  const handleDeleteAll = () => {
    setNewsList([]);
  };

  useEffect(() => {
    localStorage.setItem("savedNews", JSON.stringify(newsList));
  }, [newsList]);

  return (
    <_.Layout>
      <_.Header>재생</_.Header>
      <_.Content>
        <_.TTSBox>
          <TTSInputField value={text} onChange={setText} />
          <_.AddButton
            onClick={() => {
              handleAddPlay(text);
            }}
          >
            재생 목록에 추가하기
          </_.AddButton>
        </_.TTSBox>
        <_.PlayListBox>
          <_.TextBox>
            <_.Label>재생 목록</_.Label>
            <_.DeleteAll onClick={handleDeleteAll}>전체 삭제</_.DeleteAll>
          </_.TextBox>
          <_.PlayList>
            {newsList?.map((news: news, index: number) => (
              <Play
                key={index}
                order={index + 1}
                title={news.title}
                onDelete={() => handleDeletePlay(index)}
              />
            ))}
          </_.PlayList>
          <_.Playing>
            <_.PlayingText>재생 중</_.PlayingText>
            <_.Label>오타니 쇼헤이 홈런???</_.Label>
          </_.Playing>
          <_.Buttons>
            <Text
              onClick={() => {
                setIsTextModalOpen(!isTextModalOpen);
              }}
              isOpened={isTextModalOpen}
            />
            <_.Center>
              <Previous />
              <_.FilledButton onClick={handlePlayToggle}>
                {isPlaying ? <FilledPlay /> : <FilledStop />}
              </_.FilledButton>
              <Next />
            </_.Center>
            <Timer
              onClick={() => setIsTimerModalOpen(true)}
              isOpened={isTimerModalOpen}
            />
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
      {isTextModalOpen && (
        <TextModal onClose={() => setIsTextModalOpen(false)} />
      )}
    </_.Layout>
  );
}
