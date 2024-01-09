import { create } from 'zustand'
import { persist, StateStorage } from 'zustand/middleware'

export interface MedicineFilters {
  types: number[]
  medicines: number[]
  origins: number[]
  startMonth?: number
  startYear?: number
  endMonth?: number
  endYear?: number
}

export interface MedicineFiltersState {
  filters: MedicineFilters
  sort?: string
  page: number
  perPage: number
  set: (state: Partial<MedicineFiltersState>) => void
  setFilters: (f: MedicineFilters) => void
}

const getUrlSearch = () => {
  return window.location.search.slice(1)
}

const persistentStorage: StateStorage = {
  getItem: (key): string => {
    if (getUrlSearch()) {
      const searchParams = new URLSearchParams(getUrlSearch())
      const storedValue = searchParams.get(key)
      return JSON.parse(storedValue)
    }
    return JSON.parse(localStorage.getItem(key))
  },
  setItem: (key, newValue): void => {
    if (window.location.pathname === '/medicines') {
      const searchParams = new URLSearchParams(getUrlSearch())
      searchParams.set(key, JSON.stringify(newValue))
      window.history.replaceState(null, null, `?${searchParams.toString()}`)
    }

    localStorage.setItem(key, JSON.stringify(newValue))
  },
  removeItem: (key): void => {
    if (!(window.location.pathname === '/medicines')) return
    const searchParams = new URLSearchParams(getUrlSearch())
    searchParams.delete(key)
    window.location.search = searchParams.toString()
  },
}

export const useMedicinesFiltersStore = create<MedicineFiltersState>()(
  persist(
    (set) => ({
      sort: 'variacao_cp',
      perPage: 10,
      page: 0,
      filters: {
        medicines: [],
        types: [],
        origins: [],
      },
      setFilters: (newFilters) => set(() => ({ filters: newFilters })),
      set: (newValues) => set((state) => ({ ...state, ...newValues })),
    }),
    { name: 'filters', storage: persistentStorage },
  ),
)
