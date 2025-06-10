"use client"

import { useState, useEffect } from "react"
import { DASHBOARD_CONFIG } from "@/lib/constants/dashboard"

export const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, DASHBOARD_CONFIG.intervals.clockUpdate)

    return () => clearInterval(timer)
  }, [])

  return currentTime
}
