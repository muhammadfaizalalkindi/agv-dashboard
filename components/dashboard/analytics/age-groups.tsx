import { Users } from "lucide-react"
import { AnalyticsCard } from "./analytics-card"
import { AgeGroupsSkeleton } from "./skeletons/age-groups-skeleton"
import type { DashboardMetrics } from "@/lib/types/dashboard"
import { calculatePercentage, calculateTotals } from "@/lib/utils/dashboard-data"
import { AGE_GROUP_LABELS, AGE_GROUP_ICONS, DASHBOARD_CONFIG } from "@/lib/constants/dashboard"

interface AgeGroupProps {
  label: string
  count: string
  percentage: number
  color: string
  borderColor: string
  icon: string
}

function AgeGroup({ label, count, percentage, color, borderColor, icon }: AgeGroupProps) {
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

interface AgeGroupsProps {
  data: DashboardMetrics
  isRefreshing: boolean
  showSkeletons: boolean
}

export function AgeGroups({ data, isRefreshing, showSkeletons }: AgeGroupsProps) {
  if (showSkeletons) {
    return <AgeGroupsSkeleton />
  }

  const { totalAgeGroups } = calculateTotals(data)

  const ageGroupsData = [
    {
      key: "child" as const,
      label: AGE_GROUP_LABELS.child,
      count: data.ageGroups.child,
      icon: AGE_GROUP_ICONS.child,
    },
    {
      key: "teen" as const,
      label: AGE_GROUP_LABELS.teen,
      count: data.ageGroups.teen,
      icon: AGE_GROUP_ICONS.teen,
    },
    {
      key: "adult" as const,
      label: AGE_GROUP_LABELS.adult,
      count: data.ageGroups.adult,
      icon: AGE_GROUP_ICONS.adult,
    },
    {
      key: "elderly" as const,
      label: AGE_GROUP_LABELS.elderly,
      count: data.ageGroups.elderly,
      icon: AGE_GROUP_ICONS.elderly,
    },
  ]

  return (
    <AnalyticsCard
      title="Age Groups"
      description="Distribution across age categories"
      icon={<Users className="h-4 w-4" style={{ color: DASHBOARD_CONFIG.colors.primary }} />}
      isRefreshing={isRefreshing}
    >
      {ageGroupsData.map((group) => (
        <AgeGroup
          key={group.key}
          label={group.label}
          count={group.count.toString()}
          percentage={calculatePercentage(group.count, totalAgeGroups)}
          color={DASHBOARD_CONFIG.colors.white}
          borderColor={DASHBOARD_CONFIG.colors.primary}
          icon={group.icon}
        />
      ))}
    </AnalyticsCard>
  )
}
