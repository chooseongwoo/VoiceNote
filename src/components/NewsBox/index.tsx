import Add from "@/assets/Add";
import * as _ from "./style";
import { news } from "@/types/news";
import { useCallback } from "react";

interface NewsBoxProps extends news {
  removeNews: () => void;
}

export default function NewsBox({
  title,
  description,
  removeNews,
}: NewsBoxProps) {
  const handleAddClick = useCallback(() => {
    const currentNews = { title, description };

    const savedNews = JSON.parse(localStorage.getItem("savedNews") || "[]");

    const updatedNewsList = [...savedNews, currentNews];

    localStorage.setItem("savedNews", JSON.stringify(updatedNewsList));

    removeNews();
  }, [title, description, removeNews]);

  return (
    <_.Layout>
      <_.Left>
        <_.Title>{title}</_.Title>
        <_.Description>{description}</_.Description>
      </_.Left>
      <_.Button onClick={handleAddClick}>
        <Add />
      </_.Button>
    </_.Layout>
  );
}
