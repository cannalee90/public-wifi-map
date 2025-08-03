"use client"

import { MapPin, List, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"

interface FABGroupProps {
  onCurrentLocation: () => void
  onListView: () => void
  onFilter: () => void
}

export function FABGroup({ onCurrentLocation, onListView, onFilter }: FABGroupProps) {
  const { t } = useTranslation()

  return (
    <div className="fixed bottom-32 right-4 z-30 flex flex-col gap-3">
      <Button
        size="lg"
        onClick={onFilter}
        className="h-14 w-14 rounded-full bg-white hover:bg-gray-50 text-gray-700 shadow-lg border border-gray-200"
        variant="outline"
      >
        <Filter className="h-6 w-6" />
        <span className="sr-only">{t("filter")}</span>
      </Button>

      <Button
        size="lg"
        onClick={onListView}
        className="h-14 w-14 rounded-full bg-white hover:bg-gray-50 text-gray-700 shadow-lg border border-gray-200"
        variant="outline"
      >
        <List className="h-6 w-6" />
        <span className="sr-only">{t("listView")}</span>
      </Button>

      <Button
        size="lg"
        onClick={onCurrentLocation}
        className="h-14 w-14 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg"
      >
        <MapPin className="h-6 w-6" />
        <span className="sr-only">{t("currentLocation")}</span>
      </Button>
    </div>
  )
}
