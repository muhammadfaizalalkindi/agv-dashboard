interface LoadingOverlayProps {
  isVisible: boolean
}

export function LoadingOverlay({ isVisible }: LoadingOverlayProps) {
  if (!isVisible) return null

  return (
    <div className="absolute inset-0 bg-background/40 backdrop-blur-sm flex items-center justify-center z-30">
      <div className="relative">
        <div className="w-8 h-8 rounded-full bg-teal-500/10 animate-pulse" />
        <div className="absolute inset-0 w-8 h-8 rounded-full border border-teal-500 border-t-transparent animate-spin" />
      </div>
    </div>
  )
}
