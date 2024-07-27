import { getDownloadUrl } from "@api/get-download-url";

export async function downloadPdf(path: string, filename: string) {
  try {
    const downloadUrl = await getDownloadUrl(path, filename);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    link.parentNode?.removeChild(link);
  } catch (error) {
    console.error(error);

    throw new Error("Failed to download PDF");
  }
}
