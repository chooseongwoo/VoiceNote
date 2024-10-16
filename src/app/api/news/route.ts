import { NextResponse } from "next/server";
import axios from "axios";

const CLIENT_ID = process.env.NAVER_CLIENT_ID;
const CLIENT_SECRET = process.env.NAVER_CLIENT_SECRET;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json(
      { message: "쿼리 파라미터가 없습니다." },
      { status: 400 }
    );
  }

  try {
    const response = await axios.get(
      "https://openapi.naver.com/v1/search/news.json",
      {
        params: { query, display: 10, start: 1, sort: "date" },
        headers: {
          "X-Naver-Client-Id": CLIENT_ID,
          "X-Naver-Client-Secret": CLIENT_SECRET,
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(
      { message: "뉴스 페칭 중 에러 발생", error },
      { status: 500 }
    );
  }
}
