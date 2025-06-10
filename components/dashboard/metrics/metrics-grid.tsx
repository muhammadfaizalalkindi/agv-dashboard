import { Activity, LineChart, Timer } from "lucide-react"
import { MetricCard } from "./metric-card"
import { MetricCardSkeleton } from "./metric-card-skeleton"
import type { DashboardMetrics } from "@/lib/types/dashboard"
import { DASHBOARD_CONFIG } from "@/lib/constants/dashboard"

interface MetricsGridProps {
  data: DashboardMetrics
  isRefreshing: boolean
  showSkeletons: boolean
}

export function MetricsGrid({ data, isRefreshing, showSkeletons }: MetricsGridProps) {
  const metrics = [
    {
      title: "Total Scans",
      value: data.totalScans.toString(),
      description: `${Math.floor(Math.random() * 15 + 5)}% from last hour`,
      trend: "up" as const,
      icon: <LineChart className="h-3 w-3" style={{ color: DASHBOARD_CONFIG.colors.primary }} />,
    },
    {
      title: "Active Days",
      value: data.activeDays.toString(),
      description: "System uptime",
      icon: <Activity className="h-3 w-3" style={{ color: DASHBOARD_CONFIG.colors.primary }} />,
    },
    {
      title: "Processing Time",
      value: `${data.processingTime.toFixed(2)}s`,
      description: "Per facial scan",
      icon: <Timer className="h-3 w-3" style={{ color: DASHBOARD_CONFIG.colors.primary }} />,
    },
    {
      title: "Accuracy Rate",
      value: `${data.accuracyRate.toFixed(1)}%`,
      description: "Based on verified samples",
      trend: "up" as const,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke={DASHBOARD_CONFIG.colors.primary}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
      {metrics.map((metric, index) => (
        <div key={metric.title}>
          {showSkeletons ? <MetricCardSkeleton /> : <MetricCard {...metric} isRefreshing={isRefreshing} />}
        </div>
      ))}
    </div>
  )
}
