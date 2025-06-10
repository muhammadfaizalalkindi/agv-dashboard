import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function GenderDistributionSkeleton() {
  return (
    <Card className="h-full">
      <CardHeader className="py-1.5 px-3">
        <div className="flex justify-between items-center">
          <div>
            <div className="h-3 w-28 bg-gray-200 rounded mb-1 animate-pulse" />
            <div className="h-2.5 w-32 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="h-4 w-4 bg-gray-200 rounded animate-pulse" />
        </div>
      </CardHeader>
      <CardContent className="px-3 pb-2 pt-0 grid grid-cols-2 gap-2">
        {[1, 2].map((index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-2 flex flex-col justify-between h-full">
            <div>
              <div className="h-2.5 w-14 bg-gray-200 rounded mb-1.5 animate-pulse" />
              <div className="h-4 w-8 bg-gray-200 rounded animate-pulse" />
            </div>
            <div>
              <div className="h-2 w-10 bg-gray-200 rounded mb-1 animate-pulse" />
              <div className="h-1.5 w-full bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
