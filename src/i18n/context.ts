import { createContext, useContext } from 'react'
import type { Lang, TKey } from './dictionary'

export type Vars = Record<string, string | number>

export type LangContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  toggle: () => void
  t: (key: TKey, vars?: Vars) => string
}

export const LangContext = createContext<LangContextValue | null>(null)

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
