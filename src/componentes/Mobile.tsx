import React from "react";

type Props = { children: React.ReactNode };

export function MobileFrame({ children }: Props) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 bg-slate-100">
      <div className="w-[390px] h-[844px] bg-white rounded-[32px] shadow-2xl overflow-hidden border border-slate-200">
        {/* Status bar falsa (opcional) */}
        <div className="h-6 bg-slate-900" />
        {/* Contenido scrollable */}
        <div className="h-[calc(844px-24px)] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
