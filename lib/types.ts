export interface WiFiSpot {
  id: string
  name: string
  location: string
  distance: number
  signalStrength: number
  coordinates: {
    lat: number
    lng: number
  }
  type: "public" | "cafe" | "library" | "station"
}

export interface BottomSheetState {
  isOpen: boolean
  snapPoint: "peek" | "half" | "full"
}
