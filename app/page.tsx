"use client"

import { useEffect } from "react"
import { TooltipProvider } from "@/components/ui/tooltip"
import { DashboardHeader } from "@/components/dashboard/layout/dashboard-header"
import { ProgressIndicator } from "@/components/dashboard/layout/progress-indicator"
import { LoadingOverlay } from "@/components/dashboard/layout/loading-overlay"
import { MetricsGrid } from "@/components/dashboard/metrics/metrics-grid"
import { GenderDistribution } from "@/components/dashboard/analytics/gender-distribution"
import { AgeGroups } from "@/components/dashboard/analytics/age-groups"
import { EthnicityRace } from "@/components/dashboard/analytics/ethnicity-race"
import { FacialExpressions } from "@/components/dashboard/analytics/facial-expressions"
import { useDashboardData } from "@/hooks/use-dashboard-data"
import { DASHBOARD_CONFIG } from "@/lib/constants/dashboard"

export default function Dashboard() {
  const { dashboardData, isRefreshing, isInitialLoading, refreshProgress, refreshData, loadInitialData, cleanup } =
    useDashboardData()

  const showSkeletons = isInitialLoading || isRefreshing

  useEffect(() => {
    loadInitialData()

    // Automatic refresh every 30 seconds
    const dataRefreshTimer = setInterval(() => {
      refreshData()
    }, DASHBOARD_CONFIG.intervals.autoRefresh)

    // Handle visibility changes
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        refreshData()
      }
    }
    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      clearInterval(dataRefreshTimer)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      cleanup()
    }
  }, [refreshData, loadInitialData, cleanup])

  return (
    <TooltipProvider>
      <div className="h-screen bg-background p-3 overflow-hidden flex flex-col relative">
        <ProgressIndicator isVisible={isRefreshing || isInitialLoading} progress={refreshProgress} />

        <LoadingOverlay isVisible={isInitialLoading} />

        <DashboardHeader /> {/* currentTime prop DIHAPUS */}

        <div className="flex-1 grid grid-rows-[auto_1fr_1fr] gap-3 min-h-0">
          <MetricsGrid data={dashboardData} isRefreshing={isRefreshing} showSkeletons={showSkeletons} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 min-h-0">
            <GenderDistribution data={dashboardData} isRefreshing={isRefreshing} showSkeletons={showSkeletons} />
            <AgeGroups data={dashboardData} isRefreshing={isRefreshing} showSkeletons={showSkeletons} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 min-h-0">
            <EthnicityRace data={dashboardData} isRefreshing={isRefreshing} showSkeletons={showSkeletons} />
            <FacialExpressions data={dashboardData} isRefreshing={isRefreshing} showSkeletons={showSkeletons} />
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}
