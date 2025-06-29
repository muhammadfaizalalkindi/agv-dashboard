"use client"

import { useState, useCallback } from "react"
import type { DashboardMetrics } from "@/lib/types/dashboard"
import { getInitialDashboardData } from "@/lib/utils/dashboard-data"

export const useDashboardData = () => {
  const [dashboardData, setDashboardData] = useState<DashboardMetrics>(getInitialDashboardData())
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [isInitialLoading, setIsInitialLoading] = useState(true)

  const refreshData = useCallback(async () => {
    if (isRefreshing) return

    setIsRefreshing(true)

    try {
      // Since we're not connected to a database, maintain zero values
      const newData = getInitialDashboardData()
      setDashboardData(newData)
    } catch (error) {
      console.error("Error refreshing data:", error)
    } finally {
      setIsRefreshing(false)
    }
  }, [isRefreshing])

  const loadInitialData = useCallback(async () => {
    try {
      // Initialize with zero values since no database connection
      const initialData = getInitialDashboardData()
      setDashboardData(initialData)
    } catch (error) {
      console.error("Error loading initial data:", error)
    } finally {
      setIsInitialLoading(false)
    }
  }, [])

  return {
    dashboardData,
    isRefreshing,
    isInitialLoading,
    refreshData,
    loadInitialData,
  }
}
