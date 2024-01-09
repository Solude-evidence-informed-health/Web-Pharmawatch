import { Skeleton } from '@/components/ui/skeleton'
import { useStyles } from 'bold-ui'

export function FilterSkeleton() {
  const { css } = useStyles()
  return (
    <Skeleton
      className={css({
        height: 48,
        width: 100,
      })}
    />
  )
}
