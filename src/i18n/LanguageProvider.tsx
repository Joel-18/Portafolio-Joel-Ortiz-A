import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { dictionaries, type Lang } from './dictionary'
import { LangContext, type LangContextValue } from './context'

const STORAGE_KEY = 'portfolio-lang'

function readStoredLang(): Lang {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'es') return stored
  } catch {
    /* localStorage no disponible */
  }
  return 'es'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(readStoredLang)

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = dictionaries[lang]['doc.title']
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* localStorage no disponible */
    }
  }, [lang])

  const value = useMemo<LangContextValue>(
    () => ({
      lang,
      setLang,
      toggle: () => setLang((prev) => (prev === 'es' ? 'en' : 'es')),
      t: (key, vars) => {
        let text: string = dictionaries[lang][key]
        if (vars) {
          for (const [name, val] of Object.entries(vars)) {
            text = text.replaceAll(`{${name}}`, String(val))
          }
        }
        return text
      },
    }),
    [lang],
  )

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}
