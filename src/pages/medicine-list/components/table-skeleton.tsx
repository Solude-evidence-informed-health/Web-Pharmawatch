import { Skeleton } from '@/components/ui/skeleton'
import { useStyles } from 'bold-ui'

export function TableSkeleton() {
  const cells = [...Array(9 * 10).keys()]
  const { css, theme } = useStyles()
  return (
    <div
      className={css({
        padding: 16,
        border: `${theme.pallete.divider} 1px solid`,
      })}
    >
      <div
        className={css({
          display: 'grid',
          gridTemplateColumns: '3fr repeat(7, 1fr) 40px',
          columnGap: 20,
          rowGap: 24,
        })}
      >
        {cells.map((key) => (
          <Skeleton
            key={key}
            className={css({
              height: '18px',
            })}
          />
        ))}
      </div>
      <Skeleton
        className={css({
          height: '18px',
          marginTop: 16,
          width: '100%',
        })}
      />
    </div>
  )
}
