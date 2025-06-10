import { Globe } from "lucide-react"
import { AnalyticsCard } from "./analytics-card"
import { EthnicityRaceSkeleton } from "./skeletons/ethnicity-race-skeleton"
import type { DashboardMetrics } from "@/lib/types/dashboard"
import { calculatePercentage, calculateTotals } from "@/lib/utils/dashboard-data"
import { DASHBOARD_CONFIG } from "@/lib/constants/dashboard"

interface EthnicityGroupProps {
  label: string
  count: string
  percentage: number
  color: string
  borderColor: string
}

function EthnicityGroup({ label, count, percentage, color, borderColor }: EthnicityGroupProps) {
  return (
    <div
      className="rounded-lg p-2 flex flex-col justify-between h-full transition-all duration-300 ease-out border-2"
      style={{ backgroundColor: color, borderColor: borderColor }}
    >
      <div>
        <div className="text-xs font-medium text-black">{label}</div>
        <div
          className="text-base font-bold transition-all duration-200"
          style={{ color: DASHBOARD_CONFIG.colors.primary }}
        >
          {count}
        </div>
      </div>
      <div>
        <div className="text-xs text-gray-500">{percentage.toFixed(1)}% of total</div>
      </div>
    </div>
  )
}

interface EthnicityRaceProps {
  data: DashboardMetrics
  isRefreshing: boolean
  showSkeletons: boolean
}

export function EthnicityRace({ data, isRefreshing, showSkeletons }: EthnicityRaceProps) {
  if (showSkeletons) {
    return <EthnicityRaceSkeleton />
  }

  const { totalEthnicity } = calculateTotals(data)

  return (
    <AnalyticsCard
      title="Ethnicity/Race"
      description="Local vs International distribution"
      icon={<Globe className="h-4 w-4" style={{ color: DASHBOARD_CONFIG.colors.primary }} />}
      isRefreshing={isRefreshing}
    >
      <EthnicityGroup
        label="Local"
        count={data.ethnicity.local.toString()}
        percentage={calculatePercentage(data.ethnicity.local, totalEthnicity)}
        color={DASHBOARD_CONFIG.colors.white}
        borderColor={DASHBOARD_CONFIG.colors.primary}
      />
      <EthnicityGroup
        label="International"
        count={data.ethnicity.international.toString()}
        percentage={calculatePercentage(data.ethnicity.international, totalEthnicity)}
        color={DASHBOARD_CONFIG.colors.white}
        borderColor={DASHBOARD_CONFIG.colors.primary}
      />
    </AnalyticsCard>
  )
}
