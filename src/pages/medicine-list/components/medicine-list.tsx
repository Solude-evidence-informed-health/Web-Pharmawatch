import { MedicineCard } from './medicine-card'
import { MedicineListItem } from '@/types/entities/medicine-list-item'
import { useStyles } from 'bold-ui'

type MedicineListProps = {
  data: MedicineListItem[]
}

export function MedicineList({ data }: MedicineListProps) {
  const { css } = useStyles()
  return (
    <ul
      className={css({
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        listStyle: 'none',
      })}
    >
      {data.map((item) => (
        <MedicineCard key={item.medicine} {...item} />
      ))}
    </ul>
  )
}
