import React from "react";

export default function Elite({ onBack }: { onBack: () => void }) {
  return (
    <div className="p-6 space-y-3">
      <h1 className="text-lg font-semibold">Elite: subir video y feedback</h1>
      <p className="text-sm text-slate-600">
        Flujo para adjuntar clip y recibir correcciones asincrónicas de un
        kinesiólogo.
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
