"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { chatbotQAs, WELCOME_MESSAGE, type ChatbotQA } from "./chatbotData";

// ─── Types ────────────────────────────────────────────────────────────────────

type MessageRole = "bot" | "user";

interface Message {
  id: string;
  role: MessageRole;
  text: string;
  showContactButton?: boolean;
  showMenu?: boolean;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

/** Converts newlines in answer text into paragraphs/bullets for display */
function formatAnswer(text: string) {
  const lines = text.split("\n");
  return lines.map((line, i) => {
    if (line.trim() === "") return null;
    return (
      <p key={i} className="oopbot-answer-line">
        {line}
      </p>
    );
  });
}

// ─── Typing Indicator ─────────────────────────────────────────────────────────

function TypingIndicator() {
  return (
    <div className="oopbot-bubble oopbot-bubble--bot oopbot-typing" aria-label="Ooplab Assistant is typing">
      <span className="oopbot-dot" style={{ animationDelay: "0ms" }} />
      <span className="oopbot-dot" style={{ animationDelay: "160ms" }} />
      <span className="oopbot-dot" style={{ animationDelay: "320ms" }} />
    </div>
  );
}

// ─── Question Menu ────────────────────────────────────────────────────────────

interface QuestionMenuProps {
  onSelect: (qa: ChatbotQA) => void;
}

function QuestionMenu({ onSelect }: QuestionMenuProps) {
  return (
    <div className="oopbot-menu">
      <p className="oopbot-menu-label">Choose a question:</p>
      <ul className="oopbot-menu-list">
        {chatbotQAs.map((qa) => (
          <li key={qa.id}>
            <button
              className="oopbot-menu-btn"
              onClick={() => onSelect(qa)}
              type="button"
            >
              <i className="bi bi-arrow-right-short oopbot-menu-icon" aria-hidden="true" />
              {qa.question}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Message Bubble ───────────────────────────────────────────────────────────

interface MessageBubbleProps {
  message: Message;
  onSelectQuestion: (qa: ChatbotQA) => void;
}

function MessageBubble({ message, onSelectQuestion }: MessageBubbleProps) {
  const isBot = message.role === "bot";

  return (
    <div className={`oopbot-message oopbot-message--${message.role}`}>
      {isBot && (
        <div className="oopbot-avatar" aria-hidden="true">
          <Image
            src="/Assest/Ologo.png"
            alt="Ooplab"
            width={28}
            height={28}
            className="oopbot-avatar-img"
          />
        </div>
      )}

      <div className="oopbot-bubble-wrap">
        <div className={`oopbot-bubble oopbot-bubble--${message.role}`}>
          {formatAnswer(message.text)}
        </div>

        {message.showContactButton && (
          <Link href="/contact" className="oopbot-contact-btn">
            <i className="bi bi-envelope-fill" aria-hidden="true" />
            Contact Us
          </Link>
        )}

        {message.showMenu && (
          <QuestionMenu onSelect={onSelectQuestion} />
        )}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function OoplabChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  // Avoid hydration mismatch — only render client-side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Seed welcome message when chat first opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: uid(),
          role: "bot",
          text: WELCOME_MESSAGE,
          showMenu: true,
        },
      ]);
    }
  }, [isOpen, messages.length]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Close on Escape key
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleSelectQuestion = useCallback((qa: ChatbotQA) => {
    // Remove menu from all previous messages
    setMessages((prev) =>
      prev.map((m) => (m.showMenu ? { ...m, showMenu: false } : m))
    );

    // Add user message
    const userMsg: Message = { id: uid(), role: "user", text: qa.question };
    setMessages((prev) => [...prev, userMsg]);

    // Show typing indicator
    setIsTyping(true);

    // Delay the bot reply 500–800 ms
    const delay = 500 + Math.floor(Math.random() * 300);
    setTimeout(() => {
      setIsTyping(false);
      const botMsg: Message = {
        id: uid(),
        role: "bot",
        text: qa.answer,
        showContactButton: qa.showContactButton,
        showMenu: true, // always show menu after each answer
      };
      setMessages((prev) => [...prev, botMsg]);
    }, delay);
  }, []);

  const handleToggle = () => setIsOpen((v) => !v);
  const handleClose = () => setIsOpen(false);

  if (!isMounted) return null;

  return (
    <>
      {/* ── Floating Button ── */}
      <button
        id="oopbot-toggle"
        className={`oopbot-fab ${isOpen ? "oopbot-fab--open" : ""}`}
        onClick={handleToggle}
        aria-label={isOpen ? "Close Ooplab Assistant" : "Open Ooplab Assistant"}
        aria-expanded={isOpen}
        type="button"
      >
        {isOpen ? (
          <i className="bi bi-x-lg oopbot-fab-icon" aria-hidden="true" />
        ) : (
          <>
            <i className="bi bi-chat-dots-fill oopbot-fab-icon" aria-hidden="true" />
            <span className="oopbot-fab-badge" aria-hidden="true">1</span>
          </>
        )}
      </button>

      {/* ── Chat Window ── */}
      <div
        ref={chatWindowRef}
        className={`oopbot-window ${isOpen ? "oopbot-window--open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Ooplab Assistant"
      >
        {/* Header */}
        <div className="oopbot-header">
          <div className="oopbot-header-glow" aria-hidden="true" />
          <div className="oopbot-header-content">
            <div className="oopbot-header-logo">
              <Image
                src="/Assest/Ologo.png"
                alt="Ooplab Logo"
                width={90}
                height={32}
                className="oopbot-logo-img"
              />
            </div>
            <div className="oopbot-header-info">
              <p className="oopbot-header-name">Ooplab Assistant</p>
              <p className="oopbot-header-status">
                <span className="oopbot-status-dot" aria-hidden="true" />
                Online
              </p>
            </div>
          </div>
          <button
            className="oopbot-close-btn"
            onClick={handleClose}
            aria-label="Close chat"
            type="button"
          >
            <i className="bi bi-x-lg" aria-hidden="true" />
          </button>
        </div>

        {/* Messages */}
        <div className="oopbot-messages" aria-live="polite" aria-label="Chat messages">
          {messages.map((msg) => (
            <MessageBubble
              key={msg.id}
              message={msg}
              onSelectQuestion={handleSelectQuestion}
            />
          ))}
          {isTyping && (
            <div className="oopbot-message oopbot-message--bot">
              <div className="oopbot-avatar" aria-hidden="true">
                <Image
                  src="/Assest/Ologo.png"
                  alt="Ooplab"
                  width={28}
                  height={28}
                  className="oopbot-avatar-img"
                />
              </div>
              <TypingIndicator />
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Footer */}
        <div className="oopbot-footer">
          <p className="oopbot-footer-text">
            <i className="bi bi-shield-check" aria-hidden="true" /> Powered by Ooplab
          </p>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        /* ── Variables ── */
        :root {
          --oopbot-green:      #079447;
          --oopbot-green-dark: #0a5e33;
          --oopbot-green-mid:  #54a848;
          --oopbot-green-deep: #06301b;
          --oopbot-radius:     20px;
          --oopbot-shadow:     0 24px 80px rgba(7,148,71,0.18), 0 4px 24px rgba(6,48,27,0.12);
          --oopbot-w:          370px;
          --oopbot-h:          485px;
        }

        /* ── FAB ── */
        .oopbot-fab {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9999;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          background: linear-gradient(135deg, #54a848 0%, #079447 50%, #0a5e33 100%);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 28px rgba(7,148,71,0.40), 0 2px 8px rgba(7,148,71,0.20);
          transition: transform 0.25s cubic-bezier(.34,1.56,.64,1), box-shadow 0.2s ease, background 0.2s ease;
          outline: none;
        }
        .oopbot-fab:hover {
          transform: scale(1.10);
          box-shadow: 0 12px 36px rgba(7,148,71,0.50), 0 4px 12px rgba(7,148,71,0.25);
        }
        .oopbot-fab:focus-visible {
          outline: 3px solid #54a848;
          outline-offset: 3px;
        }
        .oopbot-fab--open {
          background: linear-gradient(135deg, #0a5e33 0%, #079447 100%);
          transform: rotate(0deg) scale(1);
        }
        .oopbot-fab-icon {
          font-size: 22px;
          line-height: 1;
        }
        .oopbot-fab-badge {
          position: absolute;
          top: 6px;
          right: 6px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #ef4444;
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #fff;
          animation: oopbot-pulse 2s infinite;
        }
        @keyframes oopbot-pulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.18); }
        }

        /* ── Window ── */
        .oopbot-window {
          position: fixed;
          bottom: 98px;
          right: 28px;
          z-index: 9998;
          width: var(--oopbot-w);
          max-height: var(--oopbot-h);
          border-radius: var(--oopbot-radius);
          background: #fff;
          box-shadow: var(--oopbot-shadow);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid rgba(7,148,71,0.14);
          opacity: 0;
          transform: translateY(16px) scale(0.96);
          pointer-events: none;
          transition: opacity 0.28s cubic-bezier(.4,0,.2,1),
                      transform 0.28s cubic-bezier(.4,0,.2,1);
          transform-origin: bottom right;
        }
        .oopbot-window--open {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: all;
        }

        /* ── Header ── */
        .oopbot-header {
          position: relative;
          background: linear-gradient(110deg, #54a848 0%, #079447 45%, #0a5e33 75%, #06301b 100%);
          padding: 14px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          overflow: hidden;
          flex-shrink: 0;
        }
        .oopbot-header-glow {
          position: absolute;
          top: -30px;
          left: -30px;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: rgba(255,255,255,0.12);
          filter: blur(24px);
          pointer-events: none;
        }
        .oopbot-header-content {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .oopbot-header-logo {
          background: rgba(255,255,255,0.92);
          border-radius: 10px;
          padding: 4px 8px;
          display: flex;
          align-items: center;
        }
        .oopbot-logo-img {
          display: block;
          height: 26px;
          width: auto;
        }
        .oopbot-header-info {
          display: flex;
          flex-direction: column;
        }
        .oopbot-header-name {
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
          margin: 0;
        }
        .oopbot-header-status {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 11.5px;
          color: rgba(255,255,255,0.82);
          margin: 0;
          margin-top: 2px;
        }
        .oopbot-status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #b7e06b;
          box-shadow: 0 0 6px #b7e06b;
          flex-shrink: 0;
          animation: oopbot-pulse 2.5s ease-in-out infinite;
        }
        .oopbot-close-btn {
          position: relative;
          z-index: 1;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: none;
          background: rgba(255,255,255,0.15);
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          transition: background 0.18s ease, transform 0.18s ease;
          flex-shrink: 0;
        }
        .oopbot-close-btn:hover {
          background: rgba(255,255,255,0.28);
          transform: scale(1.1);
        }
        .oopbot-close-btn:focus-visible {
          outline: 2px solid #fff;
          outline-offset: 2px;
        }

        /* ── Messages ── */
        .oopbot-messages {
          flex: 1;
          overflow-y: auto;
          padding: 14px 14px 8px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          scroll-behavior: smooth;
        }
        .oopbot-messages::-webkit-scrollbar { width: 4px; }
        .oopbot-messages::-webkit-scrollbar-track { background: transparent; }
        .oopbot-messages::-webkit-scrollbar-thumb { background: #e4f4c9; border-radius: 4px; }

        /* ── Message Row ── */
        .oopbot-message {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          animation: oopbot-fadein 0.22s ease both;
        }
        .oopbot-message--user {
          flex-direction: row-reverse;
        }
        @keyframes oopbot-fadein {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Avatar ── */
        .oopbot-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #f3f9ea;
          border: 1.5px solid #b7e06b;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          overflow: hidden;
          padding: 3px;
        }
        .oopbot-avatar-img {
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        /* ── Bubble Wrap ── */
        .oopbot-bubble-wrap {
          display: flex;
          flex-direction: column;
          gap: 8px;
          max-width: calc(100% - 44px);
        }
        .oopbot-message--user .oopbot-bubble-wrap {
          align-items: flex-end;
        }

        /* ── Bubble ── */
        .oopbot-bubble {
          border-radius: 16px;
          padding: 10px 13px;
          font-size: 13.5px;
          line-height: 1.6;
          max-width: 100%;
        }
        .oopbot-bubble--bot {
          background: #f3f9ea;
          border: 1px solid #b7e06b;
          color: #11201a;
          border-top-left-radius: 4px;
        }
        .oopbot-bubble--user {
          background: linear-gradient(135deg, #54a848 0%, #079447 100%);
          color: #fff;
          border-top-right-radius: 4px;
          box-shadow: 0 3px 12px rgba(7,148,71,0.25);
        }
        .oopbot-answer-line {
          margin: 0;
        }
        .oopbot-answer-line + .oopbot-answer-line {
          margin-top: 4px;
        }

        /* ── Typing dots ── */
        .oopbot-typing {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 12px 16px;
          min-width: 56px;
          min-height: 40px;
        }
        .oopbot-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #079447;
          opacity: 0.6;
          animation: oopbot-typing-bounce 1.1s ease-in-out infinite;
        }
        @keyframes oopbot-typing-bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.5; }
          40%            { transform: translateY(-6px); opacity: 1; }
        }

        /* ── Contact Button ── */
        .oopbot-contact-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 100px;
          background: linear-gradient(135deg, #54a848 0%, #079447 100%);
          color: #fff;
          font-size: 12.5px;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(7,148,71,0.28);
          transition: transform 0.18s ease, box-shadow 0.18s ease;
          width: fit-content;
        }
        .oopbot-contact-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 7px 20px rgba(7,148,71,0.38);
        }

        /* ── Question Menu ── */
        .oopbot-menu {
          background: #f1f2ea;
          border: 1px solid #e3e6dc;
          border-radius: 14px;
          padding: 10px;
          width: 100%;
        }
        .oopbot-menu-label {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #85938a;
          margin: 0 0 8px 2px;
        }
        .oopbot-menu-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .oopbot-menu-btn {
          width: 100%;
          text-align: left;
          background: #fff;
          border: 1px solid #e3e6dc;
          border-radius: 10px;
          padding: 8px 10px;
          font-size: 12.5px;
          color: #11201a;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: border-color 0.15s ease, background 0.15s ease, color 0.15s ease, transform 0.15s ease;
          font-family: inherit;
          line-height: 1.4;
        }
        .oopbot-menu-btn:hover {
          border-color: #079447;
          background: #f3f9ea;
          color: #079447;
          transform: translateX(2px);
        }
        .oopbot-menu-btn:focus-visible {
          outline: 2px solid #079447;
          outline-offset: 2px;
        }
        .oopbot-menu-icon {
          font-size: 16px;
          color: #079447;
          flex-shrink: 0;
          transition: transform 0.15s ease;
        }
        .oopbot-menu-btn:hover .oopbot-menu-icon {
          transform: translateX(2px);
        }

        /* ── Footer ── */
        .oopbot-footer {
          padding: 8px 14px;
          border-top: 1px solid #f1f2ea;
          background: #fafaf5;
          flex-shrink: 0;
        }
        .oopbot-footer-text {
          margin: 0;
          text-align: center;
          font-size: 11px;
          color: #85938a;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
        }

        /* ── Mobile ── */
        @media (max-width: 480px) {
          .oopbot-fab {
            bottom: 18px;
            right: 18px;
            width: 52px;
            height: 52px;
          }
          .oopbot-window {
            right: 0;
            bottom: 0;
            width: 100vw;
            max-height: 90dvh;
            border-radius: 20px 20px 0 0;
            border-bottom: none;
            transform-origin: bottom center;
          }
          .oopbot-window--open {
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </>
  );
}
