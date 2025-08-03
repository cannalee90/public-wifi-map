"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useTranslation } from "react-i18next"

interface FilterModalProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  onApply: (sortBy: string) => void
}

export function FilterModal({ isOpen, onOpenChange, onApply }: FilterModalProps) {
  const { t } = useTranslation()
  const [sortBy, setSortBy] = useState("distance")

  const handleApply = () => {
    onApply(sortBy)
    onOpenChange(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t("filter")}</DialogTitle>
        </DialogHeader>

        <div className="py-4">
          <Label className="text-base font-medium">{t("sortBy")}</Label>
          <RadioGroup value={sortBy} onValueChange={setSortBy} className="mt-3">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="distance" id="distance" />
              <Label htmlFor="distance">{t("distance")}</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="signal" id="signal" />
              <Label htmlFor="signal">{t("signalStrength")}</Label>
            </div>
          </RadioGroup>
        </div>

        <DialogFooter className="flex gap-2 sm:gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
            {t("cancel")}
          </Button>
          <Button onClick={handleApply} className="flex-1 bg-blue-500 hover:bg-blue-600">
            {t("apply")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
