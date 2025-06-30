import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { AnalyticsCardProps } from "@/lib/types/dashboard"
import { DASHBOARD_CONFIG } from "@/lib/constants/dashboard"

export function AnalyticsCard({ title, description, icon, isRefreshing, children }: AnalyticsCardProps) {
  return (
    <Card
      className="h-full border-2 transition-colors hover:bg-slate-50/30"
      style={{
        backgroundColor: DASHBOARD_CONFIG.colors.card.background,
        borderColor: DASHBOARD_CONFIG.colors.border,
        boxShadow: DASHBOARD_CONFIG.colors.card.shadow,
      }}
    >
      <CardHeader className="py-1.5 px-3">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-sm font-semibold" style={{ color: DASHBOARD_CONFIG.colors.text.primary }}>
              {title}
            </CardTitle>
            <CardDescription className="text-xs" style={{ color: DASHBOARD_CONFIG.colors.text.secondary }}>
              {description}
            </CardDescription>
          </div>
          <div
            className="h-6 w-6 flex items-center justify-center rounded-full flex-shrink-0"
            style={{ backgroundColor: DASHBOARD_CONFIG.colors.secondary }}
          >
            <div style={{ color: DASHBOARD_CONFIG.colors.accent }}>{icon}</div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-3 pb-2 pt-0 grid grid-cols-2 gap-2">{children}</CardContent>
    </Card>
  )
}
