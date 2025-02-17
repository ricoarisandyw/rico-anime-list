"use server";

import { UTApi } from "uploadthing/server";

const utapi = new UTApi({
  token: process.env.UPLOADTHING_TOKEN,
  logLevel: "Debug",
});


export async function uploadFile(formData: FormData) {
  try {
    const file = formData.get("file") as File;

    if (!file) {
      throw new Error("No file uploaded");
    }

    const result = await utapi.uploadFiles([file]);

    return {
      success: true,
      filename: file.name,
      size: file.size,
      url: result.at(0)?.data,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: "Failed to upload file",
    };
  }
}
