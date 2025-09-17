import axios from "axios";
import { SERVER_IP } from "@/lib/config";

const useUploadToS3 = () => {
  const getToken = () => {
    const dNAme = "user";
    //user
    const accessToken =
      localStorage?.getItem(dNAme) &&
      JSON.parse(localStorage?.getItem(dNAme) ?? "") &&
      JSON.parse(localStorage?.getItem(dNAme) ?? "")?.accessToken
        ? JSON.parse(localStorage?.getItem(dNAme) ?? "").accessToken
        : undefined;
    return accessToken;
    // return "12855|CpCE51PAwEAdzyufuTonvlSmlGYwz07CW4OA12bN";
  };

  const uploadToS3 = async (file: File, userId: any) => {
    try {
      console.log({ file, ext: file.name.split(".").pop() });
      const presignBody = {
        id: `${userId}`,
        ext: `.${file.name.split(".").pop()}`,
      };
      const presignedRes = await axios.patch(
        `${SERVER_IP}/api/v1/config/presign`,
        presignBody,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + getToken(),
          },
        }
      );
      const presignedUrlResp = JSON.parse(JSON.stringify(presignedRes));

      const presignedUrl = presignedUrlResp?.data?.signedUrL?.signedUrL;
      const publicUrl = presignedUrlResp?.data?.signedUrL?.publicUrl;

      await axios.put(presignedUrl, file, {
        headers: {
          "Content-Type": file.type,
        },
      });
      return publicUrl;
    } catch (error) {
      console.error("Error uploading file to S3:", error);
      throw error;
    }
  };

  return {
    uploadToS3,
  };
};

export default useUploadToS3;
