import fs from "fs";
import path from "path";

if (process.env.GOOGLE_APPLICATION_CREDENTIALS_CONTENTS) {
  const credentials = Buffer.from(
    process.env.GOOGLE_APPLICATION_CREDENTIALS_CONTENTS,
    "base64"
  ).toString("utf-8");

  const credentialsPath = path.join("/tmp", "my-google-credentials.json");

  try {
    if (!fs.existsSync(credentialsPath)) {
      fs.writeFileSync(credentialsPath, credentials);
    }

    process.env.GOOGLE_APPLICATION_CREDENTIALS = credentialsPath;

    console.log("Google Credentials file created at:", credentialsPath);
  } catch (error) {
    console.error("Failed to create Google Credentials file:", error);
  }
}

export default {
  async redirects() {
    return [
      {
        source: "/main",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
