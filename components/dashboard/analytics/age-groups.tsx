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
      icon={<Users className="h-4 w-4" />}
      isRefreshing={isRefreshing}
    >
      {ageGroupsData.map((group) => (
        <AgeGroup
          key={group.key}
          label={group.label}
          count={group.count.toString()}
          percentage={calculatePercentage(group.count, totalAgeGroups)}
          color={DASHBOARD_CONFIG.colors.surface}
          borderColor={DASHBOARD_CONFIG.colors.border}
          icon={group.icon}
        />
      ))}
    </AnalyticsCard>
  )
}
