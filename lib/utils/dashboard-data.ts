import type { DashboardMetrics } from "@/lib/types/dashboard"

export const generateRandomDashboardData = (): DashboardMetrics => {
  return {
    totalScans: 0,
    activeDays: 0,
    processingTime: 0,
    accuracyRate: 0,
    genderDistribution: {
      male: 0,
      female: 0,
    },
    ageGroups: {
      child: 0,
      teen: 0,
      adult: 0,
      elderly: 0,
    },
    ethnicity: {
      local: 0,
      international: 0,
    },
    expressions: {
      neutral: 0,
      happy: 0,
      angry: 0,
      confused: 0,
    },
  }
}

export const calculatePercentage = (value: number, total: number): number => {
  return total > 0 ? (value / total) * 100 : 0
}

export const calculateTotals = (data: DashboardMetrics) => {
  return {
    totalGender: data.genderDistribution.male + data.genderDistribution.female,
    totalAgeGroups: data.ageGroups.child + data.ageGroups.teen + data.ageGroups.adult + data.ageGroups.elderly,
    totalEthnicity: data.ethnicity.local + data.ethnicity.international,
    totalExpressions:
      data.expressions.neutral + data.expressions.happy + data.expressions.angry + data.expressions.confused,
  }
}

export const getInitialDashboardData = (): DashboardMetrics => {
  return {
    totalScans: 0,
    activeDays: 0,
    processingTime: 0,
    accuracyRate: 0,
    genderDistribution: {
      male: 0,
      female: 0,
    },
    ageGroups: {
      child: 0,
      teen: 0,
      adult: 0,
      elderly: 0,
    },
    ethnicity: {
      local: 0,
      international: 0,
    },
    expressions: {
      neutral: 0,
      happy: 0,
      angry: 0,
      confused: 0,
    },
  }
}
