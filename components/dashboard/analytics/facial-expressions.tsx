import { Smile } from "lucide-react"
import { AnalyticsCard } from "./analytics-card"
import { FacialExpressionsSkeleton } from "./skeletons/facial-expressions-skeleton"
import type { DashboardMetrics } from "@/lib/types/dashboard"
import { calculatePercentage, calculateTotals } from "@/lib/utils/dashboard-data"
import { EXPRESSION_EMOJIS, DASHBOARD_CONFIG } from "@/lib/constants/dashboard"

interface ExpressionCardProps {
  label: string
  count: string
  percentage: number
  emoji: string
  bgColor: string
  borderColor: string
}

function ExpressionCard({ label, count, percentage, emoji, bgColor, borderColor }: ExpressionCardProps) {
  const displayPercentage = percentage > 0 ? percentage.toFixed(1) : "0.0"

  return (
    <div
      className="rounded-lg p-2 flex items-center h-full border-2 transition-colors hover:bg-slate-50/50"
      style={{ backgroundColor: bgColor, borderColor: borderColor }}
    >
      <span className="text-lg mr-2 flex-shrink-0">{emoji}</span>
      <div className="flex flex-col justify-between flex-1">
        <div className="font-medium text-xs" style={{ color: DASHBOARD_CONFIG.colors.text.secondary }}>
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

interface FacialExpressionsProps {
  data: DashboardMetrics
  isRefreshing: boolean
  showSkeletons: boolean
}

export function FacialExpressions({ data, isRefreshing, showSkeletons }: FacialExpressionsProps) {
  if (showSkeletons) {
    return <FacialExpressionsSkeleton />
  }

  const { totalExpressions } = calculateTotals(data)

  const expressionsData = [
    {
      key: "neutral" as const,
      label: "Neutral",
      count: data.expressions.neutral,
      emoji: EXPRESSION_EMOJIS.neutral,
    },
    {
      key: "happy" as const,
      label: "Happy",
      count: data.expressions.happy,
      emoji: EXPRESSION_EMOJIS.happy,
    },
    {
      key: "angry" as const,
      label: "Angry",
      count: data.expressions.angry,
      emoji: EXPRESSION_EMOJIS.angry,
    },
    {
      key: "confused" as const,
      label: "Confused",
      count: data.expressions.confused,
      emoji: EXPRESSION_EMOJIS.confused,
    },
  ]

  return (
    <AnalyticsCard
      title="Facial Expressions"
      description="Distribution of detected expressions"
      icon={<Smile className="h-4 w-4" />}
      isRefreshing={isRefreshing}
    >
      {expressionsData.map((expression) => (
        <ExpressionCard
          key={expression.key}
          label={expression.label}
          count={expression.count.toString()}
          percentage={calculatePercentage(expression.count, totalExpressions)}
          emoji={expression.emoji}
          bgColor={DASHBOARD_CONFIG.colors.surface}
          borderColor={DASHBOARD_CONFIG.colors.border}
        />
      ))}
    </AnalyticsCard>
  )
}
