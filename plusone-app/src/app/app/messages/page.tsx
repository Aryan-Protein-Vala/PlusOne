"use client";

import { useState } from "react";
import { format } from "date-fns";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  Search,
  Shield,
  AlertTriangle,
  Send,
  Lock,
  CheckCheck,
  MoreVertical,
  Phone,
  Video,
  ArrowLeft,
} from "lucide-react";
import { MOCK_CONVERSATIONS, MOCK_BOOKINGS, MOCK_PROVIDERS, MOCK_USER } from "@/lib/mock-data";

const conversations = MOCK_CONVERSATIONS;
const currentUserId = "usr_001";

export default function MessagesPage() {
  const [selectedConv, setSelectedConv] = useState(conversations[0] || null);
  const [messageText, setMessageText] = useState("");
  const [messages, setMessages] = useState<Array<{
    id: string;
    senderId: string;
    content: string;
    type: string;
    createdAt: Date;
    read: boolean;
  }>>([
    {
      id: "msg_001",
      senderId: "prv_001",
      content: "Hey! Looking forward to the art walk tomorrow. See you at 10 at the clock tower 👋",
      type: "text",
      createdAt: new Date("2024-09-20T16:00:00"),
      read: true,
    },
    {
      id: "msg_002",
      senderId: "usr_001",
      content: "Hi Riya! Yes, can't wait. Should I bring anything?",
      type: "text",
      createdAt: new Date("2024-09-20T16:05:00"),
      read: true,
    },
    {
      id: "msg_003",
      senderId: "prv_001",
      content: "Just yourself and comfortable shoes! We'll be walking quite a bit through the art district 😊",
      type: "text",
      createdAt: new Date("2024-09-20T16:08:00"),
      read: false,
    },
  ]);

  const handleSend = () => {
    if (!messageText.trim()) return;
    const newMsg = {
      id: `msg_${Date.now()}`,
      senderId: currentUserId,
      content: messageText,
      type: "text",
      createdAt: new Date(),
      read: false,
    };
    setMessages((m) => [...m, newMsg]);
    setMessageText("");
  };

  return (
    <div className="h-[calc(100vh-80px)] flex flex-col">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 flex-1 flex gap-6">
        {/* Conversation List */}
        <div className="w-full sm:w-80 shrink-0">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-white font-semibold text-lg">Messages</h1>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg text-white/30 hover:text-white hover:bg-white/5 transition-all">
                <Search size={14} />
              </button>
              <Shield size={14} className="text-plus-green-400/60" />
            </div>
          </div>

          <div className="space-y-1.5">
            {conversations.map((conv) => (
              <button
                key={conv.bookingId}
                onClick={() => setSelectedConv(conv)}
                className={cn(
                  "w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all",
                  selectedConv?.bookingId === conv.bookingId
                    ? "bg-plus-purple-500/10 border border-plus-purple-500/20"
                    : "hover:bg-white/5 border border-transparent"
                )}
              >
                <Avatar name={conv.provider.name} size="md" src={conv.provider.avatar} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm font-medium truncate">{conv.provider.name}</span>
                    <span className="text-white/20 text-xs shrink-0 ml-2">
                      {format(new Date(conv.updatedAt), "MMM d")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white/30 text-xs truncate">{conv.lastMessage.content}</span>
                    {conv.unreadCount > 0 && (
                      <span className="w-5 h-5 bg-plus-purple-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shrink-0">
                        {conv.unreadCount}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/20 mt-0.5">
                    <span>{format(new Date(conv.updatedAt), "h:mm a")}</span>
                    {conv.lastMessage.type === "image" && (
                      <span className="text-white/20">📷</span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {selectedConv ? (
            <>
              {/* Chat Header */}
              <div className="flex items-center gap-3 p-4 border-b border-white/5 bg-surface-900/50 shrink-0">
                <button className="sm:hidden p-1.5 rounded-lg text-white/30 hover:text-white hover:bg-white/5">
                  <ArrowLeft size={16} />
                </button>
                <Avatar name={selectedConv.provider.name} size="md" src={selectedConv.provider.avatar} verified />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-white text-sm font-medium">{selectedConv.provider.name}</span>
                    <Badge variant="success" size="sm">Verified</Badge>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-white/20">
                    <span className="flex items-center gap-1">
                      <Lock size={9} />
                      Encrypted
                    </span>
                    <span>{selectedConv.provider.city}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button className="p-2 rounded-lg text-white/30 hover:text-white hover:bg-white/5 transition-all" title="Call">
                    <Phone size={14} />
                  </button>
                  <button className="p-2 rounded-lg text-white/30 hover:text-white hover:bg-white/5 transition-all" title="More">
                    <MoreVertical size={14} />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {/* Safety banner */}
                <div className="flex items-center gap-2 p-3 bg-plus-green-500/5 border border-plus-green-500/10 rounded-xl mb-4">
                  <Shield size={12} className="text-plus-green-400/60 shrink-0" />
                  <span className="text-xs text-plus-green-300/70">
                    This chat is end-to-end encrypted. Only you and {selectedConv.provider.name} can read these messages.
                  </span>
                </div>

                {messages.map((msg) => {
                  const isMine = msg.senderId === currentUserId;
                  return (
                    <div key={msg.id} className={cn("flex", isMine ? "justify-end" : "justify-start")}>
                      <div className={cn(
                        "max-w-[75%] rounded-2xl px-4 py-2.5",
                        isMine
                          ? "bg-gradient-to-r from-plus-purple-500 to-plus-pink-500 text-white rounded-br-md"
                          : "bg-white/5 text-white rounded-bl-md"
                      )}>
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                        <div className={cn("flex items-center justify-end gap-1 mt-1", isMine && "text-white/50")}>
                          <span className="text-[10px]">
                            {format(new Date(msg.createdAt), "h:mm a")}
                          </span>
                          {isMine && (
                            <CheckCheck size={12} className={msg.read ? "text-plus-blue-300" : "text-white/30"} />
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-white/5 shrink-0">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-2.5">
                  <button className="p-1.5 rounded-lg text-white/30 hover:text-white hover:bg-white/5 transition-all">
                    <AlertTriangle size={14} className="text-rose-400/60" />
                  </button>
                  <input
                    type="text"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Type a message..."
                    className="flex-1 bg-transparent text-white placeholder:text-white/20 text-sm outline-none"
                  />
                  <button
                    onClick={handleSend}
                    disabled={!messageText.trim()}
                    className="p-2 rounded-xl bg-plus-purple-500/20 text-plus-purple-300 hover:bg-plus-purple-500/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    <Send size={16} />
                  </button>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-[10px] text-white/10">
                    PlusOne may log messages for safety and dispute resolution.
                  </p>
                  <p className="text-[10px] text-white/10">
                    Tap{" "}
                    <span className="text-rose-400/60">⚠️</span> to report
                  </p>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <MessageSquare size={32} className="text-white/10 mx-auto mb-4" />
                <p className="text-white/20 text-sm">Select a conversation to start messaging</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Badge({ variant, size, children }: { variant?: string; size?: string; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center shrink-0 rounded-full border font-medium",
        variant === "success" ? "bg-green-500/15 text-green-300 border-green-500/20" : "bg-white/10 text-white/80 border-white/10",
        size === "sm" ? "px-1.5 py-0.5 text-[10px]" : "px-2 py-0.5 text-xs"
      )}
    >
      {children}
    </span>
  );
}
