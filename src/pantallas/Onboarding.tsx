import React, { useState } from "react";

export default function OnboardingConsent({ onNext }: { onNext: () => void }) {
  const [zone, setZone] = useState("");
  const [goal, setGoal] = useState("");
  const [consented, setConsented] = useState(false);
  const [prefStanding, setPrefStanding] = useState(true);
  const [prefSilent, setPrefSilent] = useState(true);
  const [prefOffline, setPrefOffline] = useState(false);

  const zones = [
    { id: "lumbar", label: "Lumbar" },
    { id: "cuello", label: "Cuello" },
    { id: "rodilla", label: "Rodilla" },
    { id: "hombro", label: "Hombro" },
  ];

  const goals = [
    { id: "dolor", label: "Bajar dolor" },
    { id: "mover", label: "Moverme sin miedo" },
    { id: "trabajo", label: "Rendimiento en el trabajo" },
    { id: "deporte", label: "Retorno progresivo al deporte" },
  ];

  const canStart = !!zone && !!goal && consented;

  return (
    <div className="min-h-[calc(844px-24px)] w-full bg-white">
      {/* Header */}
      <div className="px-5 pt-5 pb-3 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
            K
          </div>
          <div>
            <h1 className="text-lg font-semibold text-slate-900">KINE IA</h1>
            <p className="text-xs text-slate-500">Onboarding • 1/2</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-6">
        {/* Zona */}
        <section className="space-y-2">
          <h2 className="text-sm font-semibold text-slate-800">
            Zona a trabajar
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {zones.map((z) => (
              <button
                key={z.id}
                onClick={() => setZone(z.id)}
                className={`rounded-xl border px-3 py-2 text-sm transition ${
                  zone === z.id
                    ? "border-blue-600 bg-blue-50 text-blue-700"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                {z.label}
              </button>
            ))}
          </div>
        </section>

        {/* Meta */}
        <section className="space-y-2">
          <h2 className="text-sm font-semibold text-slate-800">
            Meta principal
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {goals.map((g) => (
              <button
                key={g.id}
                onClick={() => setGoal(g.id)}
                className={`rounded-xl border px-3 py-2 text-sm transition ${
                  goal === g.id
                    ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
        </section>

        {/* Preferencias */}
        <section className="space-y-2">
          <h2 className="text-sm font-semibold text-slate-800">Preferencias</h2>
          <div className="space-y-2">
            <Toggle
              label="Modo de pie (sin colchoneta)"
              enabled={prefStanding}
              onChange={setPrefStanding}
            />
            <Toggle
              label="Sin audio (gifs/pictos)"
              enabled={prefSilent}
              onChange={setPrefSilent}
            />
            <Toggle
              label="Descargar offline por zona"
              enabled={prefOffline}
              onChange={setPrefOffline}
            />
          </div>
        </section>

        {/* Consentimiento */}
        <section className="rounded-xl border border-slate-200 p-3 bg-slate-50">
          <h3 className="text-sm font-semibold text-slate-800 mb-1">
            Seguridad y consentimiento
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            KINE IA <strong>no diagnostica ni trata</strong>. Entrega
            orientación educativa para molestias leves/moderadas. Si aparecen{" "}
            <span className="font-medium">banderas rojas</span>, te derivaremos
            a un profesional. Al continuar aceptas nuestro consentimiento
            informado y política de privacidad.
          </p>
          <label className="mt-2 flex items-center gap-2 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={consented}
              onChange={(e) => setConsented(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600"
            />
            He leído y acepto el consentimiento informado.
          </label>
        </section>
      </div>

      {/* Footer CTA */}
      <div className="p-5 pt-0">
        <button
          disabled={!canStart}
          onClick={onNext}
          className={`w-full py-3 rounded-xl text-sm font-semibold transition ${
            !canStart
              ? "bg-slate-200 text-slate-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Empezar
        </button>
        <p className="text-[11px] text-slate-500 mt-2 text-center">
          Tiempo estimado de sesión: 10–12 min · Puedes cambiar preferencias más
          tarde
        </p>
      </div>
    </div>
  );
}

/** Toggle simple reutilizable */
function Toggle({
  label,
  enabled,
  onChange,
}: {
  label: string;
  enabled: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!enabled)}
      className={`w-full flex items-center justify-between rounded-xl border px-3 py-2 text-sm transition ${
        enabled ? "border-slate-300 bg-white" : "border-slate-200 bg-white"
      }`}
    >
      <span className="text-slate-700">{label}</span>
      <span
        className={`inline-flex h-6 w-10 items-center rounded-full transition ${
          enabled ? "bg-blue-600" : "bg-slate-300"
        }`}
      >
        <span
          className={`h-5 w-5 rounded-full bg-white shadow transform transition ${
            enabled ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </span>
    </button>
  );
}
