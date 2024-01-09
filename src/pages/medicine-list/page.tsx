import { Heading, useStyles, HFlow, Text } from 'bold-ui'

import { FilterList } from './components/filter-list'
import { MedicineTable } from './components/medicine-table'
import { MedicineList } from './components/medicine-list'
import { Pagination } from '@/components/ui/pagitation'
import { useMedicinesFiltersStore } from '@/stores/medicines-filters-store'
import { TableSkeleton } from './components/table-skeleton'
import { MedicineListSkeleton } from './components/medicine-list-skeleton'
import { FilterSkeleton } from './components/filter-skeleton'
import { useMedicineListPage } from './hooks/useMedicineListPage'

export const MedicineListPage = () => {
  const { css, theme } = useStyles()
  const { filters, medicines } = useMedicineListPage()
  const { page, perPage, set } = useMedicinesFiltersStore((state) => ({
    page: state.page,
    perPage: state.perPage,
    set: state.set,
  }))

  if (medicines.isError) {
    return (
      <Heading level={1}>
        Erro ao carregar os dados. Tente novamente mais tarde.
      </Heading>
    )
  }

  return (
    <>
      <HFlow justifyContent="space-between" alignItems="center">
        <Heading level={1}>Medicamentos</Heading>
        {filters.isLoading ? (
          <FilterSkeleton />
        ) : (
          filters.data && <FilterList filters={filters.data} />
        )}
      </HFlow>
      <div className={css({ marginBottom: 32 })} />
      <div
        className={css({
          backgroundColor: theme.pallete.surface.main,
          '@media(max-width:768px)': {
            display: 'none',
          },
        })}
      >
        {medicines.isLoading ? (
          <TableSkeleton />
        ) : (
          <MedicineTable
            data={medicines.data.data ?? []}
            totalCount={medicines.data?.totalCount ?? 0}
            isFetching={medicines.isFetching}
          />
        )}
      </div>
      <div
        className={css({
          display: 'none',
          gap: 24,
          flexDirection: 'column',
          '@media(max-width:768px)': {
            display: 'flex',
          },
        })}
      >
        {medicines.isLoading || medicines.isFetching ? (
          <MedicineListSkeleton />
        ) : medicines.data?.data.length === 0 ? (
          <Text fontSize={1} style={{ textAlign: 'center' }} color="secondary">
            Nenhum registro encontrado
          </Text>
        ) : (
          <>
            <MedicineList data={medicines.data.data} />
            <Pagination
              page={page}
              totalPages={Math.ceil(medicines.data?.totalCount / perPage)}
              onPageChange={(page) => set({ page })}
            />
          </>
        )}
      </div>
    </>
  )
}
