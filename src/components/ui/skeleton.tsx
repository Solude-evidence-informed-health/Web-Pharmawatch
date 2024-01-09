import { pulse } from '@/animations/pulse'
import { useStyles } from 'bold-ui'

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { css, theme } = useStyles()
  return (
    <div
      className={css(
        {
          animation: `${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
          backgroundColor: theme.pallete.gray.c80,
          borderRadius: theme.radius.button,
        },
        className,
      )}
      {...props}
    />
  )
}

export { Skeleton }
