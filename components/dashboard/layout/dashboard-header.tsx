import { Clock } from "lucide-react"
import { DASHBOARD_CONFIG } from "@/lib/constants/dashboard"
import { formatCurrentTime } from "@/lib/utils/time"
import Image from "next/image"

interface DashboardHeaderProps {
  currentTime: Date
}

export function DashboardHeader({ currentTime }: DashboardHeaderProps) {
  const { time, period } = formatCurrentTime(currentTime)

  return (
    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 flex-shrink-0">
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0">
          <Image src="/images/logo-agv.png" alt="AGV Logo" width={32} height={32} className="object-contain" priority />
        </div>
        <div>
          <h1 className="text-lg font-semibold tracking-tight" style={{ color: DASHBOARD_CONFIG.colors.primary }}>
            AGV Dashboard
          </h1>
        </div>
      </div>

      <div className="flex items-center self-end sm:self-auto">
        <div
          className="flex items-center gap-2 rounded-full px-3 py-1 border"
          style={{
            backgroundColor: DASHBOARD_CONFIG.colors.card.background,
            borderColor: DASHBOARD_CONFIG.colors.border,
            boxShadow: DASHBOARD_CONFIG.colors.card.shadow,
          }}
        >
          <div
            className="h-6 w-6 flex items-center justify-center rounded-full flex-shrink-0"
            style={{ backgroundColor: DASHBOARD_CONFIG.colors.secondary }}
          >
            <Clock className="h-3 w-3" style={{ color: DASHBOARD_CONFIG.colors.accent }} />
          </div>
          <span className="text-sm font-medium">
            <span style={{ color: DASHBOARD_CONFIG.colors.text.primary }}>{time}</span>
            <span style={{ color: DASHBOARD_CONFIG.colors.text.secondary }}>{period}</span>
          </span>
        </div>
      </div>
    </header>
  )
}
