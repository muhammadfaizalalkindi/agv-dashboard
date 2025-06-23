'use client';

import { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import { DASHBOARD_CONFIG } from "@/lib/constants/dashboard";
import { formatCurrentTime } from "@/lib/utils/time";

export function DashboardHeader() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // update setiap detik

    return () => clearInterval(interval);
  }, []);

  const { time, period } = formatCurrentTime(currentTime);

  return (
    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 flex-shrink-0">
      <div>
        <h1 className="text-lg font-bold" style={{ color: DASHBOARD_CONFIG.colors.primary }}>
          UFAS (UNNES AGV Facial Recognition Analytics System)
        </h1>
      </div>

      <div className="flex items-center self-end sm:self-auto">
        <div
          className="flex items-center gap-2 bg-background border rounded-full px-3 py-1"
          style={{ borderColor: DASHBOARD_CONFIG.colors.primary }}
        >
          <div
            className="h-6 w-6 flex items-center justify-center rounded-full flex-shrink-0"
            style={{ backgroundColor: DASHBOARD_CONFIG.colors.secondary }}
          >
            <Clock className="h-3 w-3" style={{ color: DASHBOARD_CONFIG.colors.primary }} />
          </div>
          <span className="text-sm">
            <span style={{ color: DASHBOARD_CONFIG.colors.primary }}>{time}</span>
            <span className="text-black">{period}</span>
          </span>
        </div>
      </div>
    </header>
  );
}
