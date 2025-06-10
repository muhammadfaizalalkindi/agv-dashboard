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
  return (
    <div
      className="rounded-lg p-2 flex items-center h-full transition-all duration-300 ease-out border-2"
      style={{ backgroundColor: color, borderColor: borderColor }}
    >
      <span className="text-lg mr-2 flex-shrink-0">{icon}</span>
      <div className="flex flex-col justify-between flex-1">
        <div className="text-xs font-medium text-black">{label}</div>
        <div
          className="text-base font-bold transition-all duration-200"
          style={{ color: DASHBOARD_CONFIG.colors.primary }}
        >
          {count}
        </div>
        <div className="text-xs text-gray-500">{percentage.toFixed(1)}% of total</div>
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
      icon={<Users className="h-4 w-4" style={{ color: DASHBOARD_CONFIG.colors.primary }} />}
      isRefreshing={isRefreshing}
    >
      <GenderGroup
        label="Male"
        count={data.genderDistribution.male.toString()}
        percentage={calculatePercentage(data.genderDistribution.male, totalGender)}
        color={DASHBOARD_CONFIG.colors.white}
        borderColor={DASHBOARD_CONFIG.colors.primary}
        icon={GENDER_ICONS.male}
      />
      <GenderGroup
        label="Female"
        count={data.genderDistribution.female.toString()}
        percentage={calculatePercentage(data.genderDistribution.female, totalGender)}
        color={DASHBOARD_CONFIG.colors.white}
        borderColor={DASHBOARD_CONFIG.colors.primary}
        icon={GENDER_ICONS.female}
      />
    </AnalyticsCard>
  )
}
