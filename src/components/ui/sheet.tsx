import * as React from 'react'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import { Button, Icon, Theme, useStyles } from 'bold-ui'
import { cva } from 'class-variance-authority'
import {
  slideInBottom,
  slideInLeft,
  slideInRight,
  slideInTop,
  slideOutBottom,
  slideOutLeft,
  slideOutRight,
  slideOutTop,
} from '@/animations/slide'
import { fadeIn, fadeOut } from '@/animations/fade'

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => {
  const { css } = useStyles()

  return (
    <SheetPrimitive.Overlay
      className={css([
        className,
        {
          position: 'fixed',
          zIndex: 1050,
          inset: 0,
          backgroundColor: 'rgba(211, 212, 221, 0.7)',
          animationDuration: '.2s',
          animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          '&[data-state=open]': {
            animationName: fadeIn,
          },
          '&[data-state=closed]': {
            animationName: fadeOut,
          },
        },
      ])}
      {...props}
      ref={ref}
    />
  )
})
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetStyles = (theme: Theme) => ({
  base: {
    position: 'fixed',
    zIndex: 1250,
    gap: 16,
    backgroundColor: theme.pallete.surface.main,
    boxShadow: theme.shadows.outer[20],
    transition: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    padding: 24,
    animationDuration: '.4s',
    animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  } as React.CSSProperties,
  top: {
    left: 0,
    right: 0,
    top: 0,
    borderBottom: `1px solid ${theme.pallete.divider}`,
    '&[data-state=open]': {
      animationName: slideInTop,
    },
    '&[data-state=closed]': {
      animationName: slideOutTop,
    },
  } as React.CSSProperties,
  bottom: {
    left: 0,
    right: 0,
    bottom: 0,
    borderTop: `1px solid ${theme.pallete.divider}`,
    '&[data-state=open]': {
      animationName: slideInBottom,
    },
    '&[data-state=closed]': {
      animationName: slideOutBottom,
    },
  } as React.CSSProperties,
  left: {
    top: 0,
    bottom: 0,
    left: 0,
    height: '100%',
    width: '75%',
    borderRight: `1px solid ${theme.pallete.divider}`,
    '@media (min-width:640px)': {
      maxWidth: 384,
    },
    '&[data-state=open]': {
      animationName: slideInLeft,
    },
    '&[data-state=closed]': {
      animationName: slideOutLeft,
    },
  } as React.CSSProperties,
  right: {
    top: 0,
    bottom: 0,
    right: 0,
    height: '100%',
    width: '75%',
    borderLeft: `1px solid ${theme.pallete.divider}`,
    '@media (min-width:640px)': {
      maxWidth: 384,
    },
    '&[data-state=open]': {
      animationName: slideInRight,
    },
    '&[data-state=closed]': {
      animationName: slideOutRight,
    },
  } as React.CSSProperties,
})

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> {
  side?: 'top' | 'bottom' | 'left' | 'right'
}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = 'right', className, children, ...props }, ref) => {
  const { classes, css } = useStyles(sheetStyles)
  const sheetVariants = cva(classes.base, {
    variants: {
      side: {
        top: classes.top,
        bottom: classes.bottom,
        left: classes.left,
        right: classes.right,
      },
    },
    defaultVariants: {
      side: 'right',
    },
  })

  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        ref={ref}
        className={sheetVariants({ side, className })}
        {...props}
      >
        {children}
        <SheetPrimitive.Close asChild>
          <Button
            kind="normal"
            size="small"
            skin="ghost"
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
            }}
          >
            <Icon icon="timesDefault" />
            <span
              className={css({
                position: 'absolute',
                width: '1px',
                height: '1px',
                padding: '0',
                margin: '-1px',
                overflow: 'hidden',
                clip: 'rect(0, 0, 0, 0)',
                whiteSpace: 'nowrap',
                border: '0',
              })}
            >
              Close
            </span>
          </Button>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
})
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { css } = useStyles()
  return (
    <div
      className={css(
        {
          display: 'flex',
          flexDirection: 'column',
          '& > :not([hidden]) ~ :not([hidden])': {
            marginTop: '0.5rem',
          },
          textAlign: 'center',
          '@media (min-width: 640px)': {
            textAlign: 'left',
          },
        },
        className,
      )}
      {...props}
    />
  )
}
SheetHeader.displayName = 'SheetHeader'

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { css } = useStyles()

  return (
    <div
      className={css(
        {
          display: 'flex',
          flexDirection: 'column-reverse',
          '@media (min-width: 640px)': {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            '& > :not([hidden]) ~ :not([hidden])': {
              marginLeft: '0.5rem',
            },
          },
        },
        className,
      )}
      {...props}
    />
  )
}
SheetFooter.displayName = 'SheetFooter'

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => {
  const { css, theme } = useStyles()

  return (
    <SheetPrimitive.Title
      ref={ref}
      className={css(
        { fontSize: 20, fontWeight: 600, color: theme.pallete.text.main },
        className,
      )}
      {...props}
    />
  )
})
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => {
  const { css, theme } = useStyles()
  return (
    <SheetPrimitive.Description
      ref={ref}
      className={css(
        { fontSize: 13, color: theme.pallete.text.secondary },
        className,
      )}
      {...props}
    />
  )
})
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
