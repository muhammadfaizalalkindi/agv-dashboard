import type { DashboardMetrics } from "@/lib/types/dashboard"

export const generateRandomDashboardData = (): DashboardMetrics => {
  return {
    totalScans: Math.floor(Math.random() * 1000) + 100,
    activeDays: Math.floor(Math.random() * 30) + 1,
    processingTime: Number.parseFloat((Math.random() * 2 + 0.1).toFixed(2)),
    accuracyRate: Number.parseFloat((Math.random() * 20 + 80).toFixed(1)),
    genderDistribution: {
      male: Math.floor(Math.random() * 400) + 100,
      female: Math.floor(Math.random() * 400) + 100,
    },
    ageGroups: {
      child: Math.floor(Math.random() * 150) + 50,
      teen: Math.floor(Math.random() * 200) + 100,
      adult: Math.floor(Math.random() * 300) + 200,
      elderly: Math.floor(Math.random() * 100) + 30,
    },
    ethnicity: {
      local: Math.floor(Math.random() * 500) + 300,
      international: Math.floor(Math.random() * 300) + 100,
    },
    expressions: {
      neutral: Math.floor(Math.random() * 200) + 100,
      happy: Math.floor(Math.random() * 150) + 80,
      angry: Math.floor(Math.random() * 50) + 10,
      confused: Math.floor(Math.random() * 80) + 20,
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
