export const DASHBOARD_CONFIG = {
  colors: {
    primary: "#00007f",
    secondary: "#ffd900",
    background: "#f8f9fa",
    error: "#ffebee",
    white: "#ffffff",
    black: "#000000",
    gray: {
      500: "#6b7280",
      200: "#e5e7eb",
      100: "#f3f4f6",
    },
  },
  animations: {
    refreshDuration: 120,
    initialLoadDuration: 100,
    progressTransition: 75,
  },
  intervals: {
    clockUpdate: 1000,
    autoRefresh: 30000,
  },
} as const

export const AGE_GROUP_LABELS = {
  child: "Child (0-12)",
  teen: "Teen (13-19)",
  adult: "Adult (20-59)",
  elderly: "Elderly (60+)",
} as const

export const EXPRESSION_EMOJIS = {
  neutral: "😐",
  happy: "😊",
  angry: "😠",
  confused: "🤔",
} as const

export const GENDER_ICONS = {
  male: "👨",
  female: "👩",
} as const

export const AGE_GROUP_ICONS = {
  child: "👶",
  teen: "🧒",
  adult: "👨",
  elderly: "👴",
} as const
