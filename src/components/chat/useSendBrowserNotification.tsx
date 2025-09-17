import React, { useCallback, useEffect, useRef } from "react";
const useSendBrowserNotification = () => {
  const originalTitle = useRef<any>(document.title);

  useEffect(() => {
    // Check if notifications are supported
    if ("Notification" in window) {
      // Check current permission
      if (Notification.permission === "default") {
        // Request permission
        Notification.requestPermission()
          .then((permission) => {
            console.log(`Notification permission: ${permission}`);
          })
          .catch((error) => {
            console.error("Notification permission request failed:", error);
          });
      }
    } else {
      console.error("This browser does not support desktop notifications.");
    }
  }, []);

  const sendNotification = useCallback((title: string, body: string) => {
    if (Notification.permission === "granted") {
      // Show browser notification
      new Notification(title, {
        body: body,
        icon: "rapha.png", // Optional: Replace with an actual icon path
      });

      // Play notification sound
      // const audio = new Audio("/notification.mp3");
      // audio.play().catch((error) => {
      //   console.error("Error playing notification sound:", error);
      // });
    } else {
      console.error("Notification permission not granted.");
    }
  }, []);

  // Function to toggle the title
  const toggleTitle = ({ title }: { title: string }) => {
    let intervalId: any;
    let count = 0;
    const newTitle = title;

    intervalId = setInterval(() => {
      // Toggle the title every 400ms
      document.title = count % 2 === 0 ? newTitle : originalTitle.current;
      count++;

      if (count >= 12) {
        clearInterval(intervalId);
        document.title = originalTitle.current;
      }
    }, 1000);
  };

  const playAudio = () => {
    // Play notification sound
    const audio = new Audio("/notification.mp3");
    audio.play().catch((error) => {
      console.error("Error playing notification sound:", error);
    });
  };

  return {
    sendNotification,
    toggleTitle,
    playAudio,
  };
};

export default useSendBrowserNotification;
