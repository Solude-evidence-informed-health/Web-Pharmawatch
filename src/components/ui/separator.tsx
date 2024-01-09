import * as React from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

import { useStyles } from 'bold-ui'

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = 'horizontal', decorative = true, ...props },
    ref,
  ) => {
    const { css, theme } = useStyles()
    return (
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={css(
          { flexShrink: 0, backgroundColor: theme.pallete.divider },
          orientation === 'horizontal'
            ? { height: 1, width: '100%' }
            : { width: 1, height: '100%' },
          className,
        )}
        {...props}
      />
    )
  },
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
