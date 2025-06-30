export const DASHBOARD_CONFIG = {
  colors: {
    primary: "#1e293b", // Modern slate gray
    secondary: "#f1f5f9", // Light gray background
    accent: "#3b82f6", // Professional blue
    background: "#ffffff", // Clean white
    surface: "#f8fafc", // Subtle gray surface
    border: "#e2e8f0", // Light border
    text: {
      primary: "#0f172a", // Dark text
      secondary: "#64748b", // Muted text
      muted: "#94a3b8", // Light muted text
    },
    status: {
      success: "#10b981", // Modern green
      warning: "#f59e0b", // Amber warning
      error: "#ef4444", // Clean red
      info: "#06b6d4", // Cyan info
    },
    card: {
      background: "#ffffff",
      border: "#e2e8f0",
      shadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
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
