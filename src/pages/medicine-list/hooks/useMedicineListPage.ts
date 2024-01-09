import { getFilters, getMedicines } from '@/api/medicines'
import { useMedicinesFiltersStore } from '@/stores/medicines-filters-store'
import { keepPreviousData, useQuery } from '@tanstack/react-query'

export function useMedicineListPage() {
  const state = useMedicinesFiltersStore()

  const filters = useQuery({
    queryKey: ['medicine-filters'],
    queryFn: getFilters,
  })

  const medicines = useQuery({
    queryKey: [
      'medicine-list',
      [
        state.page,
        state.perPage,
        state.sort,
        state.filters?.endMonth,
        state.filters?.endYear,
        state.filters?.startMonth,
        state.filters?.startYear,
        JSON.stringify(state.filters?.types),
        JSON.stringify(state.filters?.medicines),
        JSON.stringify(state.filters?.origins),
      ],
    ],
    queryFn: getMedicines,
    placeholderData: keepPreviousData,
  })

  return { filters, medicines }
}
