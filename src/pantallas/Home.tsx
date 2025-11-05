import React from "react";

export default function Home({
  onGoToDerivacion,
  onGoToMicrorutina,
  onGoToAjustes,
  onGoToElite,
  onRestart,
}: {
  onGoToDerivacion: () => void;
  onGoToMicrorutina: () => void;
  onGoToAjustes: () => void;
  onGoToElite: () => void;
  onRestart: () => void;
}) {
  return (
    <div className="p-6 space-y-3">
      <h1 className="text-lg font-semibold">Home / Progreso</h1>
      <p className="text-sm text-slate-600">
        Gráfico semanal de prueba casera, racha de días y semáforo de carga.
      </p>
      <div className="grid gap-2">
        <button
          className="px-4 py-2 rounded-lg bg-blue-600 text-white"
          onClick={onGoToMicrorutina}
        >
          Micro-rutina previa a tarea
        </button>
        <button
          className="px-4 py-2 rounded-lg bg-emerald-600 text-white"
          onClick={onGoToAjustes}
        >
          Ajustes de accesibilidad
        </button>
        <button
          className="px-4 py-2 rounded-lg bg-indigo-600 text-white"
          onClick={onGoToElite}
        >
          Elite: subir video
        </button>
        <button
          className="px-4 py-2 rounded-lg bg-rose-600 text-white"
          onClick={onGoToDerivacion}
        >
          Derivación inmediata
        </button>
        <button
          className="px-4 py-2 rounded-lg bg-slate-800 text-white"
          onClick={onRestart}
        >
          Volver al Onboarding
        </button>
      </div>
    </div>
  );
}
