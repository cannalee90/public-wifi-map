"use client"

import { ChevronLeft, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { useTranslation } from "react-i18next"

interface HeaderProps {
  onBack: () => void
}

export function Header({ onBack }: HeaderProps) {
  const { t, i18n } = useTranslation()

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between h-14 px-4">
        <Button variant="ghost" size="sm" onClick={onBack} className="h-12 w-12 p-0">
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">{t("back")}</span>
        </Button>

        <h1 className="text-lg font-semibold text-gray-900 truncate">{t("title")}</h1>

        <Select value={i18n.language} onValueChange={handleLanguageChange}>
          <SelectTrigger className="w-16 h-12 border-none shadow-none">
            <Globe className="h-5 w-5" />
          </SelectTrigger>
          <SelectContent align="end">
            <SelectItem value="en">EN</SelectItem>
            <SelectItem value="ko">한국어</SelectItem>
            <SelectItem value="zh">中文</SelectItem>
            <SelectItem value="ja">日本語</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </header>
  )
}
