import React from "react";

export default function Ajustes({ onBack }: { onBack: () => void }) {
  return (
    <div className="p-6 space-y-3">
      <h1 className="text-lg font-semibold">Ajustes de accesibilidad</h1>
      <p className="text-sm text-slate-600">
        Toggles para configurar sin audio, de pie y modo offline.
      </p>
      <button
        onClick={onBack}
        className="px-4 py-2 rounded-lg bg-slate-800 text-white"
      >
        Volver
      </button>
    </div>
  );
}
