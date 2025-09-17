import { DefaultExtensionType, FileIcon, defaultStyles } from "react-file-icon";
import styled from "styled-components";

type prop = {
  url: string;
  showImagePreview?: boolean;
  showVideoPreview?: boolean;
  showAudioPreview?: boolean;
};

const imagesExt = [
  "jpeg",
  "jpg",
  "png",
  "gif",
  "webp",
  "svg",
  "bmp",
  "ico",
  "tiff",
  "tif",
  "apng",
];

const videoExt = [
  "mp4",
  "webm",
  "ogg",
  "mov",
  "avi",
  "mkv",
  "flv",
  "wmv",
  "mpg",
  "mpeg",
  "3gp",
  "ts",
  "quicktime",
];

const audioExt = [
  "mp3",
  "wav",
  "ogg",
  "flac",
  "aac",
  "m4a",
  "webm",
  "opus",
  "wma",
  "aiff",
  "alac",
];
const FilePreviewCard = ({
  url,
  showAudioPreview,
  showImagePreview,
  showVideoPreview,
}: prop) => {
  if (!url) return <></>;
  const arr = url?.split(".");
  const ext: DefaultExtensionType = arr[arr?.length - 1] as any;

  if (showImagePreview && imagesExt.includes(ext)) {
    return <IndexStyled>
    <div className="image_preview">
      <img className="" src={url} /> 
    </div>
    </IndexStyled>;
  } else if (showAudioPreview && videoExt.includes(ext)) {
    return <video src={url} controls />;
  } else if (showVideoPreview && audioExt.includes(ext)) {
    return <audio src={url} controls />;
  }

  return (
    <>
      <FileIcon extension={ext} {...defaultStyles[ext]} />
    </>
  );
};

export default FilePreviewCard;

const IndexStyled = styled.div`
  
  .image_preview {
    max-width: 300px;  
    max-height: 150px;
    overflow-y: auto;
  }

  img {
    width: 100%;
    object-fit: contain;
  }
`