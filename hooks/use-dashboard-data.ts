"use client"

import { useState, useCallback, useRef } from "react"
import type { DashboardMetrics } from "@/lib/types/dashboard"
import { generateRandomDashboardData } from "@/lib/utils/dashboard-data"
import { DASHBOARD_CONFIG } from "@/lib/constants/dashboard"

const initialData: DashboardMetrics = {
  totalScans: 0,
  activeDays: 0,
  processingTime: 0,
  accuracyRate: 0,
  genderDistribution: { male: 0, female: 0 },
  ageGroups: { child: 0, teen: 0, adult: 0, elderly: 0 },
  ethnicity: { local: 0, international: 0 },
  expressions: { neutral: 0, happy: 0, angry: 0, confused: 0 },
}

export const useDashboardData = () => {
  const [dashboardData, setDashboardData] = useState<DashboardMetrics>(initialData)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [isInitialLoading, setIsInitialLoading] = useState(true)
  const [refreshProgress, setRefreshProgress] = useState(0)

  const animationFrameRef = useRef<number>()
  const progressStartTime = useRef<number>()

  const animateProgress = useCallback((duration = DASHBOARD_CONFIG.animations.refreshDuration) => {
    if (!progressStartTime.current) {
      progressStartTime.current = performance.now()
    }

    const animate = (currentTime: number) => {
      const elapsed = currentTime - progressStartTime.current!
      const progress = Math.min((elapsed / duration) * 100, 100)

      setRefreshProgress(progress)

      if (progress < 100) {
        animationFrameRef.current = requestAnimationFrame(animate)
      } else {
        progressStartTime.current = undefined
      }
    }

    animationFrameRef.current = requestAnimationFrame(animate)
  }, [])

  const refreshData = useCallback(async () => {
    if (isRefreshing) return

    setIsRefreshing(true)
    setRefreshProgress(0)
    progressStartTime.current = performance.now()

    animateProgress(DASHBOARD_CONFIG.animations.refreshDuration)

    try {
      const newData = generateRandomDashboardData()
      await new Promise((resolve) => setTimeout(resolve, 80))
      setDashboardData(newData)
      await new Promise((resolve) => setTimeout(resolve, 40))
    } catch (error) {
      console.error("Error refreshing data:", error)
    } finally {
      setIsRefreshing(false)
      setRefreshProgress(0)
    }
  }, [isRefreshing, animateProgress])

  const loadInitialData = useCallback(async () => {
    progressStartTime.current = performance.now()
    animateProgress(DASHBOARD_CONFIG.animations.initialLoadDuration)

    try {
      await new Promise((resolve) => setTimeout(resolve, 60))
      const initialData = generateRandomDashboardData()
      setDashboardData(initialData)
    } catch (error) {
      console.error("Error loading initial data:", error)
    } finally {
      setIsInitialLoading(false)
    }
  }, [animateProgress])

  const cleanup = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [])

  return {
    dashboardData,
    isRefreshing,
    isInitialLoading,
    refreshProgress,
    refreshData,
    loadInitialData,
    cleanup,
  }
}
