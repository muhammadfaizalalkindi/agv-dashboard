import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { AnalyticsCardProps } from "@/lib/types/dashboard"
import { DASHBOARD_CONFIG } from "@/lib/constants/dashboard"

export function AnalyticsCard({ title, description, icon, isRefreshing, children }: AnalyticsCardProps) {
  return (
    <Card
      className={`h-full transition-all duration-200 ease-out will-change-transform border-2 ${
        isRefreshing ? "opacity-85 scale-[0.999]" : "opacity-100 scale-100"
      }`}
      style={{
        backgroundColor: DASHBOARD_CONFIG.colors.background,
        borderColor: DASHBOARD_CONFIG.colors.primary,
      }}
    >
      <CardHeader className="py-1.5 px-3">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-sm font-medium text-black">{title}</CardTitle>
            <CardDescription className="text-xs text-gray-500">{description}</CardDescription>
          </div>
          <div
            className="h-6 w-6 flex items-center justify-center rounded-full flex-shrink-0"
            style={{ backgroundColor: DASHBOARD_CONFIG.colors.secondary }}
          >
            {icon}
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-3 pb-2 pt-0 grid grid-cols-2 gap-2">{children}</CardContent>
    </Card>
  )
}
