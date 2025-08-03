"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { WiFiCard } from "./wifi-card"
import { mockWiFiSpots } from "@/lib/data"
import { useState } from "react"
import { useTranslation } from "react-i18next"

interface ListViewProps {
  isOpen: boolean
  onClose: () => void
}

export function ListView({ isOpen, onClose }: ListViewProps) {
  const { t } = useTranslation()
  const [searchQuery, setSearchQuery] = useState("")

  const filteredSpots = mockWiFiSpots.filter(
    (spot) =>
      spot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      spot.location.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-white">
      <div className="pt-14 h-full flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder={t("search")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-3">
            {filteredSpots.map((spot) => (
              <WiFiCard key={spot.id} wifiSpot={spot} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
