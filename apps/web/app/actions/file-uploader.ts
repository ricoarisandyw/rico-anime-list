"use server";


export async function uploadFile(formData: FormData) {
  try {
    const file = formData.get("file") as File;

    if (!file) {
      throw new Error("No file uploaded");
    }

    return {
      success: true,
      filename: file.name,
      size: file.size,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: "Failed to upload file",
    };
  }
}
