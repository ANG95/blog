import React from "react";
import {
  privacyPolicy,
  permissionDeclarations,
  dataSafety,
  playStoreShortTexts,
  lastUpdated,
  OFFLINE_INTERCOM_APP_NAME,
  PRIVACY_POLICY_URL,
} from "./data/offlineIntercomLegal";

/**
 * Página de avisos legales para Offline Intercom.
 * Úsala como ruta (ej. /offline-intercom-privacy) o sección en tu portafolio.
 * En Play Console, pon como URL de política de privacidad la URL donde esté esta página.
 */
export default function OfflineIntercomLegalPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-10 text-slate-200">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-cyan-300 mb-2">
          {OFFLINE_INTERCOM_APP_NAME} – Avisos legales
        </h1>
        <p className="text-sm text-slate-400 mb-3">
          Última actualización: {lastUpdated}
        </p>
        <p className="text-xs text-slate-500">
          URL para Play Store:{" "}
          <a
            href={PRIVACY_POLICY_URL}
            className="text-cyan-400 hover:underline break-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            {PRIVACY_POLICY_URL}
          </a>
        </p>
      </header>

      {/* Política de privacidad */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-cyan-200 mb-4 border-b border-slate-600 pb-2">
          {privacyPolicy.title}
        </h2>
        <p className="text-slate-300 mb-6 leading-relaxed">
          {privacyPolicy.intro}
        </p>
        {privacyPolicy.sections.map((section) => (
          <div key={section.id} className="mb-6">
            <h3 className="text-lg font-medium text-white mb-2">
              {section.title}
            </h3>
            <div className="space-y-2 text-slate-300 text-sm leading-relaxed">
              {section.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Declaración de permisos */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-cyan-200 mb-4 border-b border-slate-600 pb-2">
          Uso de permisos (declaración para Play Store)
        </h2>
        <p className="text-slate-400 text-sm mb-4">
          Justificación de los permisos que solicita la app, para transparencia y
          revisión de la tienda.
        </p>
        <ul className="space-y-4">
          {permissionDeclarations.map((item, i) => (
            <li
              key={i}
              className="bg-slate-800/60 border border-slate-700 rounded-lg p-4"
            >
              <div className="font-medium text-cyan-200 text-sm mb-1">
                {item.permission}
              </div>
              <div className="text-slate-400 text-xs mb-1">
                Uso: {item.useCase}
              </div>
              <div className="text-slate-300 text-sm">{item.justification}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* Seguridad de datos */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-cyan-200 mb-4 border-b border-slate-600 pb-2">
          Seguridad de datos (Data safety)
        </h2>
        <p className="text-slate-300 mb-4 leading-relaxed">
          {dataSafety.summary}
        </p>
        <ul className="space-y-3 mb-4">
          {dataSafety.dataCollected.map((item, i) => (
            <li key={i} className="text-sm text-slate-300">
              <span className="font-medium text-cyan-200">{item.type}</span>
              {" — "}
              {item.purpose}. Solo en el dispositivo. No se comparte con
              terceros.
            </li>
          ))}
        </ul>
        <p className="text-slate-400 text-sm italic">
          {dataSafety.dataTransit}
        </p>
      </section>

      {/* Textos cortos para copiar en Play Console */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-cyan-200 mb-4 border-b border-slate-600 pb-2">
          Resúmenes para Play Console (copiar y pegar)
        </h2>
        <div className="space-y-4">
          <div>
            <div className="text-xs font-medium text-slate-400 mb-1">
              Política de privacidad (resumen)
            </div>
            <p className="text-slate-300 text-sm bg-slate-800/40 p-3 rounded border border-slate-700">
              {playStoreShortTexts.privacyPolicySummary}
            </p>
          </div>
          <div>
            <div className="text-xs font-medium text-slate-400 mb-1">
              Seguridad de datos (resumen)
            </div>
            <p className="text-slate-300 text-sm bg-slate-800/40 p-3 rounded border border-slate-700">
              {playStoreShortTexts.dataSafetyShort}
            </p>
          </div>
        </div>
      </section>

      <footer className="text-center text-slate-500 text-sm pt-6 border-t border-slate-700">
        {OFFLINE_INTERCOM_APP_NAME} – Comunicación por voz sin internet.
      </footer>
    </article>
  );
}
