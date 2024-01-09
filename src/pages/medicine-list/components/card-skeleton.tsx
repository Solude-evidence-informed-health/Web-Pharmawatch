import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { VFlow, HFlow, useStyles } from 'bold-ui'

export function MedicineCardSkeleton() {
  const { css, theme } = useStyles()

  return (
    <li
      className={css({
        backgroundColor: theme.pallete.surface.main,
        borderRadius: theme.radius.paper,
        padding: 16,
        boxShadow: theme.shadows.outer[10],
      })}
    >
      <VFlow vSpacing={0.5}>
        <HFlow hSpacing={0.5} alignItems="center">
          <Skeleton
            className={css({
              height: 24,
              width: 24,
              borderRadius: theme.radius.tag,
            })}
          />
          <Skeleton
            className={css({
              height: 24,
              width: 72,
              borderRadius: theme.radius.tag,
            })}
          />{' '}
          <Skeleton
            className={css({
              height: 24,
              width: 60,
              borderRadius: theme.radius.tag,
            })}
          />
        </HFlow>
        <div
          className={css({
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            columnGap: 16,
            rowGap: 0,
          })}
        >
          <Skeleton
            className={css({
              height: 24,
              width: '60%',
            })}
          />
          <Skeleton
            className={css({
              height: 21,
              width: 68,
            })}
          />
        </div>
      </VFlow>
      <VFlow vSpacing={0.375} style={{ margin: '16px 0' }}>
        <Separator />
        <HFlow justifyContent="space-between" alignItems="center">
          <Skeleton
            className={css({
              height: 19.5,
              width: 55,
            })}
          />
          <Skeleton
            className={css({
              height: 24,
              width: 30,
            })}
          />
        </HFlow>
        <Separator />
        <HFlow justifyContent="space-between" alignItems="center">
          <Skeleton
            className={css({
              height: 19.5,
              width: 78,
            })}
          />
          <Skeleton
            className={css({
              height: 24,
              width: 64,
            })}
          />
        </HFlow>
        <Separator />
        <HFlow justifyContent="space-between" alignItems="center">
          <Skeleton
            className={css({
              height: 19.5,
              width: 55,
            })}
          />
          <Skeleton
            className={css({
              height: 24,
              width: 88,
            })}
          />
        </HFlow>
      </VFlow>
      <Skeleton
        className={css({
          height: 32,
          width: '100%',
        })}
      />
    </li>
  )
}
