import { useMedicinesFiltersStore } from '@/stores/medicines-filters-store'
import { FilterItem } from '@/types/entities/filters'
import { ReferenceMonth } from 'bold-ui'
import { useForm, SubmitHandler } from 'react-hook-form'

type FormFields = {
  medicines: { label: string; value: number }[]
  type: number[]
  origin: number[]
  startDate?: ReferenceMonth
  endDate?: ReferenceMonth
}

export function useFiltersForm(medicines: FilterItem[]) {
  const [filters, setFilters] = useMedicinesFiltersStore((state) => [
    state.filters,
    state.setFilters,
  ])

  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth()

  const minMonth = {
    month: 0,
    year: 2021,
  }

  const maxMonth = {
    month: currentMonth,
    year: currentYear,
  }

  const defaultValues = {
    medicines: medicines.filter(
      ({ value }) => filters?.medicines?.includes(value),
    ),
    type: filters?.types,
    origin: filters?.origins,
    startDate: {
      month: filters?.startMonth ?? 0,
      year: filters?.startYear ?? 2021,
    },
    endDate: {
      month: filters?.endMonth ?? currentMonth,
      year: filters?.endYear ?? currentYear,
    },
  }

  const form = useForm<FormFields>({
    defaultValues,
  })

  const onSubmit: SubmitHandler<FormFields> = (values) => {
    setFilters({
      medicines:
        values.medicines?.length === 0
          ? undefined
          : values.medicines.map((medicine) => medicine.value),
      types: !values.type ? undefined : values.type,
      origins: !values.origin ? undefined : values.origin,
      startMonth: values.startDate?.month,
      startYear: values.startDate?.year,
      endMonth: values.endDate?.month,
      endYear: values.endDate?.year,
    })
  }

  return { form, onSubmit, minMonth, maxMonth }
}
