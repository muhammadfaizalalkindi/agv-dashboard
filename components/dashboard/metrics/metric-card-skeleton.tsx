import { Card } from "@/components/ui/card"
import { DASHBOARD_CONFIG } from "@/lib/constants/dashboard"

export function MetricCardSkeleton() {
  return (
    <Card
      className="border-2"
      style={{
        backgroundColor: DASHBOARD_CONFIG.colors.card.background,
        borderColor: DASHBOARD_CONFIG.colors.border,
        boxShadow: DASHBOARD_CONFIG.colors.card.shadow,
      }}
    >
      <div className="flex items-center justify-between p-2">
        <div className="flex-1 min-w-0">
          <div
            className="h-2.5 w-16 rounded mb-1.5 animate-pulse"
            style={{ backgroundColor: DASHBOARD_CONFIG.colors.border }}
          />
          <div
            className="h-4 w-12 rounded mb-1 animate-pulse"
            style={{ backgroundColor: DASHBOARD_CONFIG.colors.border }}
          />
          <div className="h-2 w-20 rounded animate-pulse" style={{ backgroundColor: DASHBOARD_CONFIG.colors.border }} />
        </div>
        <div
          className="h-6 w-6 rounded-full flex-shrink-0 animate-pulse ml-2"
          style={{ backgroundColor: DASHBOARD_CONFIG.colors.secondary }}
        />
      </div>
    </Card>
  )
}
