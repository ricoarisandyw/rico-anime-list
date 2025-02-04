"use client";

import { LucideX } from "lucide-react";
import { create } from "zustand";

const useModalKit = create<{
  isOpen: boolean;
  show: (children: React.ReactNode) => void;
  hide: () => void;
  children: React.ReactNode | null;
}>((set) => ({
  isOpen: false,
  children: null,
  show: (children: React.ReactNode) => set({ isOpen: true, children }),
  hide: () => set({ isOpen: false, children: null }),
}));

export const ModalKit = {
  show: (children: React.ReactNode) => useModalKit.getState().show(children),
  hide: () => useModalKit.getState().hide(),
}

export default function ModalKitComponent() {
  const { isOpen, children, hide } = useModalKit();

  if (!isOpen) return null;
  
  return <div className="fixed inset-0 bg-black/50 flex items-center justify-center" onClick={hide}>
    <div className="w-fit h-fit relative">
      <div className="absolute top-0 right-0 p-1 cursor-pointer" onClick={hide}>
        <LucideX size={32} />
      </div>
      {children}
    </div>
  </div>
}
