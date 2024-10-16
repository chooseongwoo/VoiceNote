import { NextResponse } from "next/server";
import { protos, TextToSpeechClient } from "@google-cloud/text-to-speech";
import fs from "fs";

const client = new TextToSpeechClient();


if (process.env.GOOGLE_APPLICATION_CREDENTIALS_CONTENTS) {
  const credentials = Buffer.from(
    process.env.GOOGLE_APPLICATION_CREDENTIALS_CONTENTS,
    "base64"
  ).toString("utf-8");
  if (!fs.existsSync("./keys")) {
    fs.mkdirSync("./keys");
  }
  fs.writeFileSync("./keys/my-google-credentials.json", credentials);
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get("text");
  const speed = parseFloat(searchParams.get("speed") || "1.0");
  const pitch = parseFloat(searchParams.get("pitch") || "0.0");
  const gender = searchParams.get("gender") || "MALE";

  if (!text) {
    return NextResponse.json({ error: "텍스트 없음." }, { status: 400 });
  }

  let ssmlGender;
  if (gender === "MALE") {
    ssmlGender = protos.google.cloud.texttospeech.v1.SsmlVoiceGender.MALE;
  } else if (gender === "FEMALE") {
    ssmlGender = protos.google.cloud.texttospeech.v1.SsmlVoiceGender.FEMALE;
  } else {
    ssmlGender = protos.google.cloud.texttospeech.v1.SsmlVoiceGender.NEUTRAL;
  }

  try {
    const request: protos.google.cloud.texttospeech.v1.ISynthesizeSpeechRequest =
      {
        input: { text },
        voice: {
          languageCode: "ko-KR",
          ssmlGender: ssmlGender,
        },
        audioConfig: {
          audioEncoding:
            protos.google.cloud.texttospeech.v1.AudioEncoding.LINEAR16,
          speakingRate: speed,
          pitch: pitch,
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
