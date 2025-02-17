"use client";

import { uploadFile } from "@/actions/file-uploader";

export default function Lab() {

  const handleUpload = async (formData: FormData) => {
    const result = await uploadFile(formData);
    console.log(result);
  };

  return <div>Lab
    {/* UPLOAD FILE  */}
    <form action={handleUpload}>
      <input type="file" name="file" />
      <button type="submit">Upload</button>
    </form>

  </div>;
}
