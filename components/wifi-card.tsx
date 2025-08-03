"use client"

import type React from "react"

import { Wifi, Navigation, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { WiFiSpot } from "@/lib/types"
import { useTranslation } from "react-i18next"

interface WiFiCardProps {
  wifiSpot: WiFiSpot
  onClick?: () => void
}

export function WiFiCard({ wifiSpot, onClick }: WiFiCardProps) {
  const { t } = useTranslation()

  const getSignalBars = (strength: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <div
        key={i}
        className={`w-1 bg-gray-300 rounded-sm ${i < strength ? "bg-green-500" : ""}`}
        style={{ height: `${(i + 1) * 3 + 2}px` }}
      />
    ))
  }

  const getWiFiTypeColor = (type: string) => {
    switch (type) {
      case "public":
        return "text-blue-600"
      case "cafe":
        return "text-orange-600"
      case "library":
        return "text-purple-600"
      case "station":
        return "text-green-600"
      default:
        return "text-gray-600"
    }
  }

  const handleDirections = (e: React.MouseEvent) => {
    e.stopPropagation()
    // Handle directions logic
  }

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation()
    // Handle share logic
  }

  return (
    <Card className="w-full shadow-sm cursor-pointer hover:shadow-md transition-shadow" onClick={onClick}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3 flex-1">
            <div className={`p-2 rounded-lg bg-gray-100 ${getWiFiTypeColor(wifiSpot.type)}`}>
              <Wifi className="h-5 w-5" />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 truncate">{wifiSpot.name}</h3>
              <p className="text-sm text-gray-600 truncate">{wifiSpot.location}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-gray-500">
                  {wifiSpot.distance}m {t("away")}
                </span>
                <div className="flex items-end gap-0.5">{getSignalBars(wifiSpot.signalStrength)}</div>
              </div>
            </div>
          </div>

          <div className="flex gap-2 ml-2">
            <Button variant="outline" size="sm" className="h-9 w-9 p-0 bg-transparent" onClick={handleDirections}>
              <Navigation className="h-4 w-4" />
              <span className="sr-only">{t("directions")}</span>
            </Button>
            <Button variant="outline" size="sm" className="h-9 w-9 p-0 bg-transparent" onClick={handleShare}>
              <Share2 className="h-4 w-4" />
              <span className="sr-only">{t("share")}</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
