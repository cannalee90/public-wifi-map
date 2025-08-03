"use client"

import type React from "react"

import { useState, useRef } from "react"
import { WiFiCard } from "./wifi-card"
import { mockWiFiSpots } from "@/lib/data"
import { useTranslation } from "react-i18next"

interface BottomSheetProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  snapPoint: "peek" | "half" | "full"
  onSnapPointChange: (snapPoint: "peek" | "half" | "full") => void
}

export function BottomSheet({ isOpen, onOpenChange, snapPoint, onSnapPointChange }: BottomSheetProps) {
  const { t } = useTranslation()
  const [isDragging, setIsDragging] = useState(false)
  const startY = useRef(0)
  const currentY = useRef(0)

  const getSheetHeight = () => {
    switch (snapPoint) {
      case "peek":
        return "120px"
      case "half":
        return "50vh"
      case "full":
        return "90vh"
      default:
        return "120px"
    }
  }

  // Handle drag handle click to expand
  const handleDragHandleClick = () => {
    if (snapPoint === "peek") {
      onSnapPointChange("half")
    } else if (snapPoint === "half") {
      onSnapPointChange("full")
    } else {
      onSnapPointChange("peek")
    }
  }

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    startY.current = e.touches[0].clientY
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    currentY.current = e.touches[0].clientY
  }

  const handleTouchEnd = () => {
    if (!isDragging) return
    setIsDragging(false)

    const deltaY = currentY.current - startY.current
    const threshold = 50

    if (deltaY > threshold) {
      // Dragging down
      if (snapPoint === "full") onSnapPointChange("half")
      else if (snapPoint === "half") onSnapPointChange("peek")
    } else if (deltaY < -threshold) {
      // Dragging up
      if (snapPoint === "peek") onSnapPointChange("half")
      else if (snapPoint === "half") onSnapPointChange("full")
    }
  }

  // Mouse events for desktop testing
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    startY.current = e.clientY
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    currentY.current = e.clientY
  }

  const handleMouseUp = () => {
    if (!isDragging) return
    setIsDragging(false)

    const deltaY = currentY.current - startY.current
    const threshold = 50

    if (deltaY > threshold) {
      // Dragging down
      if (snapPoint === "full") onSnapPointChange("half")
      else if (snapPoint === "half") onSnapPointChange("peek")
    } else if (deltaY < -threshold) {
      // Dragging up
      if (snapPoint === "peek") onSnapPointChange("half")
      else if (snapPoint === "half") onSnapPointChange("full")
    }
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 bg-white rounded-t-xl shadow-lg transition-all duration-300 ease-out ${
        isOpen ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ height: getSheetHeight() }}
    >
      {/* Drag handle */}
      <div
        className="flex justify-center py-3 cursor-pointer select-none"
        onClick={handleDragHandleClick}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div className="w-12 h-1 bg-gray-300 rounded-full hover:bg-gray-400 transition-colors" />
      </div>

      {/* Content */}
      <div className="px-4 pb-4 overflow-y-auto" style={{ height: "calc(100% - 40px)" }}>
        <h2 className="text-lg font-semibold mb-4">{t("nearestWiFi")}</h2>
        <div className="space-y-3">
          {mockWiFiSpots.slice(0, snapPoint === "peek" ? 1 : undefined).map((spot) => (
            <WiFiCard
              key={spot.id}
              wifiSpot={spot}
              onClick={() => {
                if (snapPoint === "peek") {
                  onSnapPointChange("half")
                } else if (snapPoint === "half") {
                  onSnapPointChange("full")
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
