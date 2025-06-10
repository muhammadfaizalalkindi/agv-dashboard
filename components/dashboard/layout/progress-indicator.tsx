interface ProgressIndicatorProps {
  isVisible: boolean
  progress: number
}

export function ProgressIndicator({ isVisible, progress }: ProgressIndicatorProps) {
  if (!isVisible) return null

  return (
    <div className="absolute top-0 left-0 right-0 z-40">
      <div className="h-0.5 bg-teal-50">
        <div
          className="h-full bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 transition-all duration-75 ease-out will-change-transform"
          style={{
            width: `${progress}%`,
            transform: `translateZ(0)`,
          }}
        />
      </div>
    </div>
  )
}
