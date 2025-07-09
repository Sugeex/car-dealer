/// <reference types="vite/client" />

interface Window {
  TelegramWebviewProxy?: unknown;
  TelegramWebviewProxyProto?: unknown;
  Telegram?: {
    WebApp?: {
      initData?: string;
      initDataUnsafe?: Record<string, unknown>;
      sendData?: (data: string) => void;
      close?: () => void;
      expand?: () => void;
      isExpanded?: boolean;
      requestWriteAccess?: (callback: (granted: boolean) => void) => void;
      onEvent?: (event: string, callback: () => void) => void;
    };
  };
}