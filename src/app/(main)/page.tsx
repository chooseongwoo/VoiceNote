"use client";
import Logo from "@/assets/Logo";
import * as _ from "./style";
import TTSInputField from "@/components/TTSInputField";
import NewsBox from "@/components/NewsBox";
import MenuBar from "@/components/MenuBar";
import { useEffect, useState } from "react";
import { news } from "@/types/news";
import he from "he";
import { startTTS, stopTTS } from "@/utils/tts";

export default function Main() {
  const [text, setText] = useState("");
  const [newsList, setNewsList] = useState<news[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedNews = localStorage.getItem("savedNews");
    const initialNewsList = savedNews ? JSON.parse(savedNews) : [];
    setNewsList(initialNewsList);
  }, []);

  useEffect(() => {
    const getNewsData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("/api/news?query=정치");
        const data = await res.json();

        if (!data.items) {
          throw new Error("응답 없음.");
        }

        const decodedNews = data.items.map((item: news) => ({
          ...item,
          title: he.decode(item.title).replace(/<\/?[^>]+(>|$)/g, ""),
          description: he
            .decode(item.description)
            .replace(/<\/?[^>]+(>|$)/g, ""),
        }));

        const filteredNews = decodedNews.filter(
          (newsItem: any) =>
            !newsList.some(
              (savedItem: news) =>
                savedItem.title === newsItem.title &&
                savedItem.description === newsItem.description
            )
        );

        setNewsList(filteredNews);
      } catch (error) {
        console.error("뉴스 데이터 페칭 에러", error);
      } finally {
        setIsLoading(false);
      }
    };

    getNewsData();
  }, []);

  const removeNewsItem = (indexToRemove: number) => {
    setNewsList((prevList) =>
      prevList.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <_.Layout>
      <_.Header>
        <Logo width="40" height="40" />
        <_.Title>Voice Note</_.Title>
      </_.Header>
      <_.Content>
        {isLoading ? (
          "Loading..."
        ) : (
          <>
            <TTSInputField
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              value={text}
              onChange={setText}
              onStart={() => startTTS(text, setIsPlaying)}
              onStop={stopTTS}
            />
            <_.NewsList>
              <_.Label>뉴스 기사</_.Label>
              {newsList.length > 0 ? (
                newsList.map((news, index) => (
                  <NewsBox
                    key={index}
                    title={news.title}
                    description={news.description}
                    removeNews={() => removeNewsItem(index)}
                  />
                ))
              ) : (
                <p>뉴스가 없습니다.</p>
              )}
            </_.NewsList>
          </>
        )}
      </_.Content>
      <MenuBar selectState={1} />
    </_.Layout>
  );
}
