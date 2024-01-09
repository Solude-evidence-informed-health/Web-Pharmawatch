import { Filters } from '@/types/entities/filters'
import { api } from '.'
import { ApiFilters } from '@/types/api/filters'
import { ApiMedicine } from '@/types/api/medicine'
import { MedicineListItem } from '@/types/entities/medicine-list-item'
import { useMedicinesFiltersStore } from '@/stores/medicines-filters-store'

function hasItems(arr: unknown[] = []) {
  return arr.length > 0
}

function formatDate(year: number, month: number) {
  const date = new Date(year, month, 1)

  return date.toLocaleDateString('pt-BR')
}

type GetMedicinesResponse = {
  page: number
  per_page: number
  total_pages: number
  total_records: number
  data: ApiMedicine[]
}

type GetMedicinesReturn = {
  data: MedicineListItem[]
  page: number
  totalCount: number
}

export async function getFilters(): Promise<Filters | undefined> {
  const { data } = await api.get<ApiFilters>('/materiais/filtros')

  const filters = {
    medicines: data.material.map((item) => ({
      value: item.id,
      label: item.descr_material,
    })),
    types: data.tipo.map((type) => ({
      value: type.id,
      label: type.descr_tipo,
    })),
    origins: data.origem.map((origin) => ({
      value: origin.id,
      label: origin.descr_origem,
    })),
  }

  return filters
}

export async function getMedicines(): Promise<GetMedicinesReturn> {
  const { page, perPage, sort, filters } = useMedicinesFiltersStore.getState()

  const {
    startMonth,
    startYear,
    endYear,
    endMonth,
    medicines,
    types,
    origins,
  } = filters

  const hasStartDate = startMonth !== undefined && startYear !== undefined
  const hasEndDate = endMonth !== undefined && endYear !== undefined
  const hasPeriod = hasStartDate && hasEndDate

  const isAscending = !sort?.includes('-')
  const sortParam = sort?.replace('-', '')

  const queryObject = {
    page: page + 1,
    per_page: perPage,
    ...(sortParam && { ordenacao: sortParam }),
    ...(isAscending && { ordenacao_crescente: 1 }),
    ...(hasPeriod && { data_inicio: formatDate(startYear, startMonth) }),
    ...(hasPeriod && { data_fim: formatDate(endYear, endMonth) }),
  }

  const queryParams = new URLSearchParams(queryObject)

  if (hasItems(medicines)) {
    for (const item of medicines) {
      queryParams.append('id_material', String(item))
    }
  }
  if (hasItems(types)) {
    for (const item of types) {
      queryParams.append('id_tipo', String(item))
    }
  }
  if (hasItems(origins)) {
    for (const item of origins) {
      queryParams.append('id_origem', String(item))
    }
  }

  const queryString = queryParams.toString()

  const { data } = await api.get<GetMedicinesResponse>(
    `/materiais/?${queryString}`,
  )

  const items: MedicineListItem[] = data.data.map((item) => ({
    medicine: item.material,
    type: item.tipo,
    quantity: item.quantidade_unidade,
    unityValue: item.valor_unidade,
    totalValue: item.valor_total,
    consPercentage: item.percentual_valor_total,
    curve: item.curva_abc,
    consVariation: item.variacao_cp,
  }))

  return {
    data: items,
    page: data.page,
    totalCount: data.total_records,
  }
}
