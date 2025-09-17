import { getS3PresignedUrl } from "@/redux/slices/Profile/ProfileService";
import { AppDispatch } from "@/redux/store";
import axios from "axios";
import { useDispatch } from "react-redux";

const useUploadToS3 = () => {
  const dispatch = useDispatch<AppDispatch>();

  const uploadToS3 = async (file: File, userId: any) => {
    try {
      console.log({ file, ext: file.name.split(".").pop() });
      const presignBody = {
        id: `${userId}`,
        ext: `.${file.name.split(".").pop()}`,
      };

      const presignedRes = await dispatch(getS3PresignedUrl(presignBody));

      const presignedUrlResp = JSON.parse(JSON.stringify(presignedRes));

      const presignedUrl = presignedUrlResp?.payload?.signedUrL?.signedUrL;
      const publicUrl = presignedUrlResp?.payload?.signedUrL?.publicUrl;

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
