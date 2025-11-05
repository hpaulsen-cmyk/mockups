import React from "react";

export default function MicroRutina({ onBack }: { onBack: () => void }) {
  return (
    <div className="p-6 space-y-3">
      <h1 className="text-lg font-semibold">Micro-rutina (2–3 min)</h1>
      <p className="text-sm text-slate-600">
        Versión rápida de pie, pictos grandes. Ideal para pausa activa.
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
