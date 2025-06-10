import { Card } from "@/components/ui/card"
import type { MetricCardProps } from "@/lib/types/dashboard"
import { DASHBOARD_CONFIG } from "@/lib/constants/dashboard"

export function MetricCard({ title, value, description, trend, icon, isRefreshing }: MetricCardProps) {
  return (
    <Card
      className={`transition-all duration-200 ease-out will-change-transform border-2 ${
        isRefreshing ? "opacity-85 scale-[0.999]" : "opacity-100 scale-100"
      }`}
      style={{
        backgroundColor: DASHBOARD_CONFIG.colors.error,
        borderColor: DASHBOARD_CONFIG.colors.primary,
      }}
    >
      <div className="flex items-center justify-between p-2 relative overflow-hidden">
        {isRefreshing && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent animate-shimmer" />
        )}
        <div className="flex-1 min-w-0">
          <div className="text-xs font-medium mb-1 text-black">{title}</div>
          <div
            className="text-sm font-bold transition-all duration-200"
            style={{ color: DASHBOARD_CONFIG.colors.primary }}
          >
            {value}
          </div>
          <p className="text-xs flex items-center gap-0.5 text-gray-500">
            {trend === "up" && <span style={{ color: "#22c55e" }}>↑</span>}
            {trend === "down" && <span style={{ color: "#ff0000" }}>↓</span>}
            {description}
          </p>
        </div>
        <div
          className="h-6 w-6 flex items-center justify-center rounded-full flex-shrink-0 ml-2"
          style={{ backgroundColor: DASHBOARD_CONFIG.colors.secondary }}
        >
          {icon}
        </div>
      </div>
    </Card>
  )
}
