import { useStyles } from 'bold-ui'
import { MedicineCardSkeleton } from './card-skeleton'

export function MedicineListSkeleton() {
  const { css } = useStyles()
  const keys = [...Array(10).keys()]

  return (
    <ul
      className={css({
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        listStyle: 'none',
      })}
    >
      {keys.map((key) => (
        <MedicineCardSkeleton key={key} />
      ))}
    </ul>
  )
}
