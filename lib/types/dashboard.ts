import type React from "react"
export interface GenderDistribution {
  male: number
  female: number
}

export interface AgeGroups {
  child: number
  teen: number
  adult: number
  elderly: number
}

export interface EthnicityData {
  local: number
  international: number
}

export interface FacialExpressions {
  neutral: number
  happy: number
  angry: number
  confused: number
}

export interface DashboardMetrics {
  totalScans: number
  activeDays: number
  processingTime: number
  accuracyRate: number
  genderDistribution: GenderDistribution
  ageGroups: AgeGroups
  ethnicity: EthnicityData
  expressions: FacialExpressions
}

export interface MetricCardProps {
  title: string
  value: string
  description: string
  trend?: "up" | "down"
  icon: React.ReactNode
  isRefreshing: boolean
}

export interface AnalyticsCardProps {
  title: string
  description: string
  icon: React.ReactNode
  isRefreshing: boolean
  children: React.ReactNode
}

export interface DataGroupProps {
  label: string
  count: string
  percentage: number
  color: string
  borderColor: string
}

export interface GenderGroupProps extends DataGroupProps {
  icon: string
}

export interface AgeGroupProps extends DataGroupProps {
  icon: string
}

export interface ExpressionCardProps extends DataGroupProps {
  emoji: string
  bgColor: string
}
