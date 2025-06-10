export const formatCurrentTime = (date: Date): { time: string; period: string } => {
  const timeString = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  })

  const time = timeString.replace(/AM|PM/, "")
  const period = timeString.match(/AM|PM/)?.[0] || ""

  return { time, period }
}
