"use client"

import { MapPin, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MapPlaceholderProps {
  onMarkerClick: () => void
}

export function MapPlaceholder({ onMarkerClick }: MapPlaceholderProps) {
  return (
    <div className="relative w-full h-full bg-gray-50 overflow-hidden">
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Center map pin */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Button
          variant="ghost"
          size="lg"
          onClick={onMarkerClick}
          className="h-16 w-16 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg"
        >
          <MapPin className="h-8 w-8" />
        </Button>
      </div>

      {/* Zoom controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <Button variant="outline" size="sm" className="h-12 w-12 rounded-full bg-white shadow-md">
          <Plus className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="sm" className="h-12 w-12 rounded-full bg-white shadow-md">
          <Minus className="h-5 w-5" />
        </Button>
      </div>

      {/* Mock WiFi markers */}
      <div className="absolute top-1/4 left-1/3">
        <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
      </div>
      <div className="absolute top-1/3 right-1/4">
        <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
      </div>
      <div className="absolute bottom-1/3 left-1/4">
        <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  )
}
