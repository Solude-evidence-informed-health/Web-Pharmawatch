import { useMedicinesFiltersStore } from '@/stores/medicines-filters-store'
import { MedicineListItem } from '@/types/entities/medicine-list-item'
import { PagedTable, Button, Icon, Currency } from 'bold-ui'

type MedicineTableProps = {
  data: MedicineListItem[]
  isFetching: boolean
  totalCount: number
}

export function MedicineTable({
  data,
  isFetching,
  totalCount,
}: MedicineTableProps) {
  const state = useMedicinesFiltersStore()
  return (
    <PagedTable<MedicineListItem>
      hovered
      loading={isFetching}
      columns={[
        {
          header: 'Medicamento',
          name: 'material',
          render: (item) => item.medicine,
          sortable: true,
        },
        {
          header: 'Tipo',
          name: 'tipo',
          render: (item) => item.type,
          sortable: true,
        },
        {
          header: 'Quantidade',
          name: 'quantidade_unidade',
          render: (item) => item.quantity,
          sortable: true,
        },
        {
          header: 'Valor unitário',
          name: 'valor_unidade',
          render: (item) => <Currency value={item.unityValue} currency="BRL" />,
          sortable: true,
        },
        {
          header: 'Consumo',
          name: 'valor_total',
          render: (item) => <Currency value={item.totalValue} currency="BRL" />,
          sortable: true,
        },
        {
          header: '% do consumo',
          name: 'percentual_valor_total',
          render: (item) => item.consPercentage + ' %',
          sortable: true,
        },
        {
          header: 'Curva ABC',
          name: 'curva_abc',
          render: (item) => item.curve,
          sortable: true,
        },
        {
          header: 'Variação CP',
          name: 'variacao_cp',
          render: (item) => item.consVariation + ' %',
          sortable: true,
        },
        {
          name: 'actions',
          align: 'right',
          render: () => (
            <Button size="small" kind="primary">
              <Icon icon="pollOutline" size={1.5} />
            </Button>
          ),
        },
      ]}
      onPageChange={(page) => state.set({ page })}
      onSizeChange={(perPage) => state.set({ perPage })}
      onSortChange={(column) => state.set({ sort: column[0] })}
      page={state.page}
      rows={data ?? []}
      size={state.perPage}
      sizeOptions={[10, 20, 40, 50, 100]}
      sort={[state.sort ?? '']}
      totalElements={totalCount}
      totalPages={10}
    />
  )
}
