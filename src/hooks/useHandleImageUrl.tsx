import React from "react";

const useHandleImageUrl = () => {
  const getUrls = (url: any) => {
    let newUrl: any;
    if (!Array.isArray(url) && typeof url === "string") {
      newUrl =
        url
          ?.replace("{", "")
          ?.replace("}", "")
          ?.replace(/"/g, "")
          ?.split(",") ?? [];
    } else if (Array.isArray(url)) {
      newUrl = url.flat(Infinity);
    }

    const urls = new Array(5).fill(null);
    if (Array.isArray(newUrl)) {
      newUrl.forEach((url: any, i: number) => {
        urls[i] = typeof url === "string" ? url : null;
      });
    }
    return urls;
  };

  const getFirstImageUrl = (images: any[]) => {
    const urls = getUrls(images);
    for (let index = 0; index < urls?.length; index++) {
      if (urls?.[index]) {
        return urls?.[index];
      }
    }
    return "";
  };

  return {
    getUrls,
    getFirstImageUrl,
  };
};

export default useHandleImageUrl;
