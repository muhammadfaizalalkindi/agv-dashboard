import { Card } from "@/components/ui/card"
import type { MetricCardProps } from "@/lib/types/dashboard"
import { DASHBOARD_CONFIG } from "@/lib/constants/dashboard"

export function MetricCard({ title, value, description, trend, icon, isRefreshing }: MetricCardProps) {
  return (
    <Card
      className="border-2 transition-colors hover:bg-slate-50/50"
      style={{
        backgroundColor: DASHBOARD_CONFIG.colors.card.background,
        borderColor: DASHBOARD_CONFIG.colors.border,
        boxShadow: DASHBOARD_CONFIG.colors.card.shadow,
      }}
    >
      <div className="flex items-center justify-between p-2">
        <div className="flex-1 min-w-0">
          <div className="text-xs font-medium mb-1" style={{ color: DASHBOARD_CONFIG.colors.text.secondary }}>
            {title}
          </div>
          <div className="text-sm font-bold" style={{ color: DASHBOARD_CONFIG.colors.text.primary }}>
            {value}
          </div>
          <p className="text-xs flex items-center gap-0.5" style={{ color: DASHBOARD_CONFIG.colors.text.muted }}>
            {trend === "up" && <span style={{ color: DASHBOARD_CONFIG.colors.status.success }}>↑</span>}
            {trend === "down" && <span style={{ color: DASHBOARD_CONFIG.colors.status.error }}>↓</span>}
            {description}
          </p>
        </div>
        <div
          className="h-6 w-6 flex items-center justify-center rounded-full flex-shrink-0 ml-2"
          style={{ backgroundColor: DASHBOARD_CONFIG.colors.secondary }}
        >
          <div style={{ color: DASHBOARD_CONFIG.colors.accent }}>{icon}</div>
        </div>
      </div>
    </Card>
  )
}
