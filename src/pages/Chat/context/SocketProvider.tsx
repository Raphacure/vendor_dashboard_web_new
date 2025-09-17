import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  ReactNode,
} from "react";
import { toast } from "react-hot-toast";
import { io, Socket } from "socket.io-client";

import {
  createUsersChatId,
  getUserChatId,
} from "@/redux/slices/chat/chatService";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { CHAT_API } from "@/lib/config";
// import { CHAT_API } from "@/config";

// Define interface for context value
interface SocketContextValue {
  socket: Socket | null;
  userChatId: string | null;
}

// Create a context with a proper type
const SocketContext = React.createContext<SocketContextValue | undefined>(undefined);

interface SocketProviderProps {
  children: ReactNode;
}

const SocketProvider = ({ children }: SocketProviderProps) => {
  const socket = useRef<Socket | null>(null);
  const [socketReady, setSocketReady] = useState(false);
  const [userChatId, setUserChatId] = useState<string | null>(null);

  const { user } = useSelector((state: RootState) => state.auth);
  const { currentDocInfo } = useSelector((state: RootState) => state.doctor);
  
  const dispatch = useDispatch<AppDispatch>();

  const fetchChatId = useCallback(async () => {
    try {
      const res = await dispatch(
        createUsersChatId({
          body: {
            email: user?.email,
            id: user?.id,
            image: user?.image,
            name: `${user?.first_name ?? ""} ${user?.last_name ?? ""}`,
            rating: currentDocInfo?.rating
          },
        })
      ).unwrap();
      setUserChatId(res?.data?._id);
    } catch (error) {
      console.error("Error fetching current user chat ID:", error);
      toast.error("Failed to fetch current user chat ID");
    }
  }, [user, dispatch, currentDocInfo]);

  console.log(user);

  useEffect(() => {
    fetchChatId();
  }, [fetchChatId]);
  useEffect(() => {
    
    if (CHAT_API && userChatId) {
      socket.current = io(CHAT_API);
      
      socket.current.emit("add-user", userChatId);
      setSocketReady(true)
    }
    return () => {
      if (socket.current) {        
        socket.current.disconnect();
      }
    };
  }, [CHAT_API, userChatId]);

  // useEffect(() => {
  //   if (userChatId && socket.current) {
  //   }
  // }, [userChatId, socket.current]);

  return (
    <SocketContext.Provider
      value={{
        socket: socketReady ? socket.current : null,
        userChatId,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContext, SocketProvider };

// Add a hook to use the socket context
export const useSocket = () => {
  const context = React.useContext(SocketContext);
  if (context === undefined) {
    throw new Error('useSocket must be used within a SocketProvider');
  }
  return context;
};
