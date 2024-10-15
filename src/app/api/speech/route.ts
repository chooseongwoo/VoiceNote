import { NextResponse } from "next/server";

import { protos, TextToSpeechClient } from "@google-cloud/text-to-speech";

const client = new TextToSpeechClient();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get("text");

  if (!text) {
    return NextResponse.json({ error: "텍스트 없음." }, { status: 400 });
  }

  try {
    const request: protos.google.cloud.texttospeech.v1.ISynthesizeSpeechRequest =
      {
        input: { text },
        voice: {
          languageCode: "ko-KR",
          ssmlGender:
            protos.google.cloud.texttospeech.v1.SsmlVoiceGender.FEMALE,
        },
        audioConfig: {
          audioEncoding:
            protos.google.cloud.texttospeech.v1.AudioEncoding.LINEAR16,
          speakingRate: 1,
        },
      };

    const [response] = await client.synthesizeSpeech(request);

    const audioBuffer = Buffer.from(response.audioContent as Uint8Array);
    const headers = new Headers();
    headers.set("Content-Type", "audio/wav");
    headers.set("Content-Length", audioBuffer.length.toString());

    return new Response(audioBuffer, { headers });
  } catch (error) {
    console.error("변환 중 에러", error);
    return NextResponse.json({ error: "변환 실패" }, { status: 500 });
  }
}
