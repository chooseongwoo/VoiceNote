import { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from "fs";
import path from "path";
import { TextToSpeechClient, protos } from "@google-cloud/text-to-speech";

const client = new TextToSpeechClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { text } = req.body;

    // TTS 요청을 위한 설정
    const request = {
      input: { text },
      voice: { languageCode: "en-US", ssmlGender: "NEUTRAL" as const },
      audioConfig: {
        audioEncoding: protos.google.cloud.texttospeech.v1.AudioEncoding.MP3,
      },
    };

    try {
      // API 호출하여 음성 파일 생성
      const [response] = await client.synthesizeSpeech(request);
      const audioContent = response?.audioContent;

      if (!audioContent) {
        throw new Error("오디오 컨텐츠 미싱");
      }

      const filePath = path.resolve("./public", "output.mp3");
      await fs.writeFile(filePath, audioContent, "binary");

      res.status(200).json({ message: "음성 파일: output.mp3" });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "TTS 실패" });
    }
  } else {
    res.status(405).json({ message: "POST 요청만 가능" });
  }
}
