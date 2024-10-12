"use client";
import Logo from "@/assets/Logo";
import * as _ from "./style";
import TTSField from "@/components/TTSInputField";
import NewsBox from "@/components/NewsBox";
import MenuBar from "@/components/MenuBar";
import { useEffect, useState } from "react";
import { news } from "@/types/news";
import he from "he";

export default function Main() {
  const [newsList, setNewsList] = useState<news[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getSavedNews = () => {
    return JSON.parse(localStorage.getItem("savedNews") || "[]");
  };

  useEffect(() => {
    setIsLoading(true);
    const getNewsData = async () => {
      try {
        const res = await fetch("/api/news?query=정치");
        const data = await res.json();
        const decodedNews = data.items.map((item: news) => ({
          ...item,
          title: he.decode(item.title).replace(/<\/?[^>]+(>|$)/g, ""),
          description: he
            .decode(item.description)
            .replace(/<\/?[^>]+(>|$)/g, ""),
        }));

        const savedNews = getSavedNews();

        const filteredNews = decodedNews.filter(
          (newsItem: any) =>
            !savedNews.some(
              (savedItem: news) =>
                savedItem.title === newsItem.title &&
                savedItem.description === newsItem.description
            )
        );

        setNewsList(filteredNews);
        setIsLoading(false);
      } catch (error) {
        console.error("뉴스 데이터를 불러오는 중 오류 발생:", error);
      }
    };

    getNewsData();
  }, []);

  const removeNewsItem = (indexToRemove: number) => {
    setNewsList(
      (prevList) =>
        prevList?.filter((_, index) => index !== indexToRemove) || null
    );
  };

  return (
    <_.Layout>
      <_.Header>
        <Logo width="40" height="40" />
        <_.Title>Voice Note</_.Title>
      </_.Header>
      <_.Content>
        <TTSField />
        <_.NewsList>
          <_.Label>뉴스 기사</_.Label>
          {isLoading
            ? "Loading..."
            : newsList?.map((news, index) => (
                <NewsBox
                  key={index}
                  title={news.title}
                  description={news.description}
                  removeNews={() => removeNewsItem(index)}
                />
              ))}
        </_.NewsList>
      </_.Content>
      <MenuBar selectState={1} />
    </_.Layout>
  );
}
