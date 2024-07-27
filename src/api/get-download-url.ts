import { DOWNLOAD_URL_API } from "@utils/constants";

export async function getDownloadUrl(path: string, filename: string): Promise<string> {
  const response = await fetch(DOWNLOAD_URL_API, {
    method: "POST",
    body: JSON.stringify({
      path,
      filename,
    }),
    headers: {
      "content-type": "application/json",
    },
  });

  const body = await response.json();

  if (!body || !response.ok) {
    throw new Error("Something went wrong");
  }

  const { url } = body;

  return url;
}
