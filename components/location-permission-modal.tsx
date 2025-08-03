"use client"

import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useTranslation } from "react-i18next"

interface LocationPermissionModalProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  onAllow: () => void
}

export function LocationPermissionModal({ isOpen, onOpenChange, onAllow }: LocationPermissionModalProps) {
  const { t } = useTranslation()

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
            <MapPin className="h-8 w-8 text-blue-600" />
          </div>
          <DialogTitle>{t("locationPermission")}</DialogTitle>
          <DialogDescription>{t("locationPermissionDesc")}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex gap-2 sm:gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
            {t("cancel")}
          </Button>
          <Button onClick={onAllow} className="flex-1 bg-blue-500 hover:bg-blue-600">
            {t("allow")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
