import type { WiFiSpot } from "./types"

export const mockWiFiSpots: WiFiSpot[] = [
  {
    id: "1",
    name: "Seoul Station Free WiFi",
    location: "Seoul Station, Jung-gu",
    distance: 50,
    signalStrength: 4,
    coordinates: { lat: 37.5547, lng: 126.9706 },
    type: "station",
  },
  {
    id: "2",
    name: "Starbucks Myeongdong",
    location: "Myeongdong 2-ga, Jung-gu",
    distance: 120,
    signalStrength: 5,
    coordinates: { lat: 37.5636, lng: 126.9834 },
    type: "cafe",
  },
  {
    id: "3",
    name: "Hongdae Public WiFi",
    location: "Hongik University area",
    distance: 200,
    signalStrength: 3,
    coordinates: { lat: 37.5563, lng: 126.9236 },
    type: "public",
  },
  {
    id: "4",
    name: "Gangnam Library WiFi",
    location: "Gangnam-gu Library",
    distance: 350,
    signalStrength: 4,
    coordinates: { lat: 37.4979, lng: 127.0276 },
    type: "library",
  },
  {
    id: "5",
    name: "Itaewon Free Zone",
    location: "Itaewon-dong, Yongsan-gu",
    distance: 450,
    signalStrength: 3,
    coordinates: { lat: 37.5344, lng: 126.9944 },
    type: "public",
  },
]
