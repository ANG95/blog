/**
 * Avisos legales para la app Offline Intercom.
 * Uso: política de privacidad (URL para Play Store), declaración de permisos y seguridad de datos.
 */

export const OFFLINE_INTERCOM_APP_NAME = "Offline Intercom";

/** URL de la política de privacidad (usar en Play Console). */
export const PRIVACY_POLICY_URL =
  "https://portafolio-german-apaza-ninaraques-projects.vercel.app/#offline-intercom-privacy";

export const lastUpdated = "2025-02-02";

// ---------------------------------------------------------------------------
// POLÍTICA DE PRIVACIDAD
// ---------------------------------------------------------------------------

export const privacyPolicy = {
  title: "Política de privacidad",
  appName: OFFLINE_INTERCOM_APP_NAME,
  intro:
    `${OFFLINE_INTERCOM_APP_NAME} es una aplicación gratuita de comunicación por voz sin internet. Esta política describe qué datos se almacenan en tu dispositivo y cómo se usan los permisos.`,
  sections: [
    {
      id: "datos-almacenados",
      title: "1. Datos almacenados en tu dispositivo",
      content: [
        "La app guarda datos solo en tu teléfono (almacenamiento local). No enviamos ni recopilamos datos en servidores externos.",
        "Datos que se pueden guardar localmente:",
        "• Historial de dispositivos: direcciones MAC y nombres que tú asignas, para reconexión rápida.",
        "• Nombre de usuario: el nombre que configuras para mostrarte a otros en la comunicación.",
        "• Preferencias: configuración de audio (VOX, volumen, reducción de ruido, etc.), pantalla y opciones de ahorro de energía.",
        "Estos datos no salen de tu dispositivo y solo los usa la app para su funcionamiento.",
      ],
    },
    {
      id: "permisos",
      title: "2. Uso de permisos",
      content: [
        "La app solicita los siguientes permisos para funcionar:",
        "• Micrófono: para capturar tu voz y enviarla al otro dispositivo en la comunicación.",
        "• Ubicación aproximada / WiFi Direct (dispositivos cercanos): requerido por Android para descubrir otros dispositivos por WiFi Direct (P2P). No usamos tu ubicación en mapa ni la enviamos a ningún servidor.",
        "• Notificaciones: para mostrar la notificación del servicio en primer plano mientras la comunicación está activa (permite que la app siga funcionando con la pantalla apagada).",
        "No usamos los permisos para publicidad ni para compartir datos con terceros.",
      ],
    },
    {
      id: "sin-servidores",
      title: "3. Sin servidores ni internet",
      content: [
        "La comunicación entre dispositivos se hace directamente por WiFi Direct (P2P). No pasa por internet ni por ningún servidor nuestro o de terceros. Todo el tráfico de voz es entre los dispositivos que tú conectas.",
      ],
    },
    {
      id: "encriptacion",
      title: "4. Encriptación opcional",
      content: [
        "Puedes activar en la app una encriptación opcional (AES-256-GCM) para la voz. La clave se deriva del código de sala que compartes con el otro dispositivo. Esta opción es solo local y no implica envío de datos a servidores.",
      ],
    },
    {
      id: "contacto",
      title: "5. Contacto",
      content: [
        "Si tienes dudas sobre esta política o sobre el tratamiento de datos de la app, puedes contactar al desarrollador a través del portafolio o del enlace indicado en la ficha de la aplicación en Play Store.",
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// DECLARACIÓN DE PERMISOS (para Play Console / revisión)
// ---------------------------------------------------------------------------

export const permissionDeclarations = [
  {
    permission: "RECORD_AUDIO (Micrófono)",
    useCase: "Comunicación por voz en tiempo real",
    justification:
      "Se usa exclusivamente para capturar la voz del usuario y transmitirla al otro dispositivo conectado por WiFi Direct. Es la función central del intercomunicador.",
  },
  {
    permission: "ACCESS_FINE_LOCATION / NEARBY_WIFI_DEVICES",
    useCase: "Descubrimiento de dispositivos cercanos (WiFi Direct)",
    justification:
      "Android exige estos permisos para que WiFi Direct (P2P) funcione. Se usan solo para descubrir y conectar dispositivos cercanos; no se utiliza la ubicación en mapa ni se envía ubicación a ningún servidor.",
  },
  {
    permission: "POST_NOTIFICATIONS",
    useCase: "Servicio en primer plano durante la comunicación",
    justification:
      "Se usa para mostrar la notificación obligatoria del servicio en primer plano que mantiene la comunicación activa cuando el usuario minimiza la app o apaga la pantalla, tal como exige Android.",
  },
];

// ---------------------------------------------------------------------------
// SEGURIDAD DE DATOS (Data safety - resumen para Play Console)
// ---------------------------------------------------------------------------

export const dataSafety = {
  summary:
    "La app almacena datos solo en el dispositivo del usuario. No se recopilan ni envían datos a servidores.",
  dataCollected: [
    {
      type: "Identificadores de dispositivo (ej. MAC)",
      purpose: "Historial de dispositivos para reconexión rápida",
      optional: true,
      storedOnDevice: true,
      sharedWithThirdParties: false,
    },
    {
      type: "Nombre o alias que el usuario configura",
      purpose: "Mostrar el nombre en la comunicación al otro dispositivo",
      optional: true,
      storedOnDevice: true,
      sharedWithThirdParties: false,
    },
    {
      type: "Preferencias de la app (configuración de audio, pantalla, etc.)",
      purpose: "Recordar la configuración elegida por el usuario",
      optional: false,
      storedOnDevice: true,
      sharedWithThirdParties: false,
    },
  ],
  noDataShared: true,
  noDataSold: true,
  dataTransit: "El audio se transmite solo entre los dispositivos conectados por WiFi Direct; no pasa por servidores ni internet.",
};

// ---------------------------------------------------------------------------
// TEXTO CORTO PARA PLAY CONSOLE (copiar y pegar)
// ---------------------------------------------------------------------------

export const playStoreShortTexts = {
  privacyPolicySummary:
    "Offline Intercom guarda datos solo en tu dispositivo (historial de dispositivos, nombre, preferencias). No recopilamos ni enviamos datos a servidores. La comunicación es directa entre dispositivos por WiFi Direct.",
  dataSafetyShort:
    "Datos recopilados: identificadores de dispositivo (MAC) y nombre, solo almacenados en el dispositivo para historial y configuración. No se comparten con terceros ni se envían a servidores.",
};
