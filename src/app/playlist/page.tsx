"use client";
import { useState, useEffect, useRef } from "react";
import TTSInputField from "@/components/TTSInputField";
import * as _ from "./style";
import Play from "@/components/Play";
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
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [isTimerModalOpen, setIsTimerModalOpen] = useState(false);
  const [isTextModalOpen, setIsTextModalOpen] = useState(false);
  const [timerValue, setTimerValue] = useState<number>(15);
  const [newsList, setNewsList] = useState<news[]>(() => {
    const savedNews = localStorage.getItem("savedNews");
    return savedNews ? JSON.parse(savedNews) : [];
  });
  const newsListRef = useRef<HTMLDivElement | null>(null);
  const playItemRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const savedTimerValue = localStorage.getItem("timerValue");
    if (savedTimerValue) {
      setTimerValue(Number(savedTimerValue));
    }
  }, []);

  const handlePlayToggle = (index: number | null) => {
    setPlayingIndex(index);
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
    if (playingIndex === index) {
      setPlayingIndex(null);
    }
  };

  const handleDeleteAll = () => {
    setNewsList([]);
    setPlayingIndex(null);
  };

  useEffect(() => {
    localStorage.setItem("savedNews", JSON.stringify(newsList));
    newsListRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [newsList]);

  useEffect(() => {
    if (playingIndex !== null && playItemRefs.current[playingIndex]) {
      playItemRefs.current[playingIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [playingIndex]);

  return (
    <_.Layout>
      <_.Header>재생</_.Header>
      <_.Content>
        <_.TTSBox>
          {/* <TTSInputField value={text} onChange={setText} /> */}
          <_.AddButton onClick={() => handleAddPlay(text)}>
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
              <div
                key={index}
                ref={(el) => {
                  playItemRefs.current[index] = el;
                }}
              >
                <Play
                  order={index + 1}
                  title={news.title}
                  onDelete={() => handleDeletePlay(index)}
                  isPlaying={playingIndex === index}
                  onPlayToggle={() => handlePlayToggle(index)}
                />
              </div>
            ))}

            <div ref={newsListRef} />
          </_.PlayList>
          <_.Bottom>
            {playingIndex !== null && (
              <_.Playing>
                <_.PlayingText>재생 중</_.PlayingText>
                <_.Label>{newsList[playingIndex]?.title}</_.Label>
              </_.Playing>
            )}
            <_.Buttons>
              <Text
                onClick={() => {
                  setIsTextModalOpen(!isTextModalOpen);
                }}
                isOpened={isTextModalOpen}
              />
              <_.Center>
                <Previous
                  onClick={() => {
                    if (playingIndex! > 0 && playingIndex !== null) {
                      handlePlayToggle(playingIndex! - 1);
                    } else {
                      handlePlayToggle(newsList.length - 1);
                    }
                  }}
                />
                <_.FilledButton
                  onClick={() => {
                    if (
                      JSON.parse(localStorage.getItem("savedNews") || "")
                        ?.length > 0
                    ) {
                      if (playingIndex !== null) {
                        handlePlayToggle(null);
                      } else {
                        handlePlayToggle(0);
                      }
                    } else {
                      alert("재생 목록이 비어있습니다!");
                    }
                  }}
                >
                  {playingIndex !== null ? <FilledPlay /> : <FilledStop />}
                </_.FilledButton>
                <Next
                  onClick={() => {
                    if (
                      playingIndex !== null &&
                      playingIndex! < newsList.length - 1
                    ) {
                      handlePlayToggle(playingIndex! + 1);
                    } else {
                      handlePlayToggle(0);
                    }
                  }}
                />
              </_.Center>
              <Timer
                onClick={() => setIsTimerModalOpen(true)}
                isOpened={isTimerModalOpen}
              />
            </_.Buttons>
          </_.Bottom>
        </_.PlayListBox>
      </_.Content>
      <MenuBar selectState={2} />
      {isTimerModalOpen && (
        <TimerModal
          value={timerValue}
          onClose={() => setIsTimerModalOpen(false)}
          onValueChange={setTimerValue}
        />
      )}
      {isTextModalOpen && (
        <TextModal onClose={() => setIsTextModalOpen(false)} />
      )}
    </_.Layout>
  );
}
