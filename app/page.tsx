"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { MapPlaceholder } from "@/components/map-placeholder"
import { BottomSheet } from "@/components/bottom-sheet"
import { FABGroup } from "@/components/fab-group"
import { LocationPermissionModal } from "@/components/location-permission-modal"
import { ListView } from "@/components/list-view"
import { FilterModal } from "@/components/filter-modal"
import "@/lib/i18n"

export default function Home() {
  const [bottomSheetOpen, setBottomSheetOpen] = useState(true)
  const [snapPoint, setSnapPoint] = useState<"peek" | "half" | "full">("peek")
  const [locationModalOpen, setLocationModalOpen] = useState(false)
  const [listViewOpen, setListViewOpen] = useState(false)
  const [filterModalOpen, setFilterModalOpen] = useState(false)

  const handleBack = () => {
    if (listViewOpen) {
      setListViewOpen(false)
    } else {
      // Handle app back navigation
      window.history.back()
    }
  }

  const handleMarkerClick = () => {
    setBottomSheetOpen(true)
    setSnapPoint("half")
  }

  const handleCurrentLocation = () => {
    setLocationModalOpen(true)
  }

  const handleLocationAllow = () => {
    setLocationModalOpen(false)
    // Handle location permission logic here
  }

  const handleListView = () => {
    setListViewOpen(true)
  }

  const handleFilter = () => {
    setFilterModalOpen(true)
  }

  const handleFilterApply = (sortBy: string) => {
    // Handle filter application logic here
    console.log("Applying filter:", sortBy)
  }

  return (
    <div className="h-screen bg-white overflow-hidden">
      <Header onBack={handleBack} />

      <main className="pt-14 h-full">
        <MapPlaceholder onMarkerClick={handleMarkerClick} />
      </main>

      <BottomSheet
        isOpen={bottomSheetOpen}
        onOpenChange={setBottomSheetOpen}
        snapPoint={snapPoint}
        onSnapPointChange={setSnapPoint}
      />

      <FABGroup onCurrentLocation={handleCurrentLocation} onListView={handleListView} onFilter={handleFilter} />

      <LocationPermissionModal
        isOpen={locationModalOpen}
        onOpenChange={setLocationModalOpen}
        onAllow={handleLocationAllow}
      />

      <ListView isOpen={listViewOpen} onClose={() => setListViewOpen(false)} />

      <FilterModal isOpen={filterModalOpen} onOpenChange={setFilterModalOpen} onApply={handleFilterApply} />
    </div>
  )
}
