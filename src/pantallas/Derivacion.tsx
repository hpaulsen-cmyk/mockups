import React from "react";

export default function Derivacion({ onBack }: { onBack: () => void }) {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-lg font-semibold text-red-600">
        Derivación inmediata
      </h1>
      <p className="text-sm text-slate-600">
        Se detectó una <strong>bandera roja</strong>. Por seguridad, detén la
        rutina y consulta a un profesional.
      </p>
      <div className="grid gap-2">
        <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">
          Llamar
        </button>
        <button className="px-4 py-2 rounded-lg bg-emerald-600 text-white">
          Centros cercanos
        </button>
        <button
          onClick={onBack}
          className="px-4 py-2 rounded-lg bg-slate-700 text-white"
        >
          Volver a inicio
        </button>
      </div>
    </div>
  );
}
