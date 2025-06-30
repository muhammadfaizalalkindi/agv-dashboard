import { Users } from "lucide-react"
import { AnalyticsCard } from "./analytics-card"
import { GenderDistributionSkeleton } from "./skeletons/gender-distribution-skeleton"
import type { DashboardMetrics } from "@/lib/types/dashboard"
import { calculatePercentage, calculateTotals } from "@/lib/utils/dashboard-data"
import { GENDER_ICONS, DASHBOARD_CONFIG } from "@/lib/constants/dashboard"

interface GenderGroupProps {
  label: string
  count: string
  percentage: number
  color: string
  borderColor: string
  icon: string
}

function GenderGroup({ label, count, percentage, color, borderColor, icon }: GenderGroupProps) {
  const displayPercentage = percentage > 0 ? percentage.toFixed(1) : "0.0"

  return (
    <div
      className="rounded-lg p-2 flex items-center h-full border-2 transition-colors hover:bg-slate-50/50"
      style={{ backgroundColor: color, borderColor: borderColor }}
    >
      <span className="text-lg mr-2 flex-shrink-0">{icon}</span>
      <div className="flex flex-col justify-between flex-1">
        <div className="text-xs font-medium" style={{ color: DASHBOARD_CONFIG.colors.text.secondary }}>
          {label}
        </div>
        <div className="text-base font-bold" style={{ color: DASHBOARD_CONFIG.colors.text.primary }}>
          {count}
        </div>
        <div className="text-xs" style={{ color: DASHBOARD_CONFIG.colors.text.muted }}>
          {displayPercentage}% of total
        </div>
      </div>
    </div>
  )
}

interface GenderDistributionProps {
  data: DashboardMetrics
  isRefreshing: boolean
  showSkeletons: boolean
}

export function GenderDistribution({ data, isRefreshing, showSkeletons }: GenderDistributionProps) {
  if (showSkeletons) {
    return <GenderDistributionSkeleton />
  }

  const { totalGender } = calculateTotals(data)

  return (
    <AnalyticsCard
      title="Gender Distribution"
      description="Current scan data by gender"
      icon={<Users className="h-4 w-4" />}
      isRefreshing={isRefreshing}
    >
      <GenderGroup
        label="Male"
        count={data.genderDistribution.male.toString()}
        percentage={calculatePercentage(data.genderDistribution.male, totalGender)}
        color={DASHBOARD_CONFIG.colors.surface}
        borderColor={DASHBOARD_CONFIG.colors.border}
        icon={GENDER_ICONS.male}
      />
      <GenderGroup
        label="Female"
        count={data.genderDistribution.female.toString()}
        percentage={calculatePercentage(data.genderDistribution.female, totalGender)}
        color={DASHBOARD_CONFIG.colors.surface}
        borderColor={DASHBOARD_CONFIG.colors.border}
        icon={GENDER_ICONS.female}
      />
    </AnalyticsCard>
  )
}
