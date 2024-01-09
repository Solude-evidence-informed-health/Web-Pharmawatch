import { Theme } from 'bold-ui'

import { keyframes } from '@emotion/react'
import { CSSProperties } from 'react'

export const accordionDown = keyframes`
    from { height: 0 }
    to { height: var(--radix-accordion-content-height) }
`
export const accordionUp = keyframes`
    from { height: var(--radix-accordion-content-height) }
    to { height: 0 }
`

export const accordionItemStyles = (theme: Theme) => ({
  accordionItem: {
    borderBottom: `1px solid ${theme.pallete.divider}`,
  } as CSSProperties,
})

export const accordionTriggerStyles = (theme: Theme) => ({
  accordionTrigger: {
    display: 'flex',
    flex: '1',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: 'none',
    color: theme.pallete.text.main,
    backgroundColor: theme.pallete.surface.main,
    padding: '1rem 0', // corresponds to py-4
    fontSize: '0.875rem', // corresponds to text-sm
    fontWeight: 500, // corresponds to font-medium
    transition: 'all',
    '&:hover': {
      textDecoration: 'underline',
    },
    '&[data-state=open] > span': {
      transform: 'rotate(180deg)',
    },
  } as CSSProperties,

  icon: {
    height: '1rem',
    width: '1rem',
    flexShrink: 0,
    transition: 'transform 200ms',
    color: theme.pallete.text.secondary,
  } as CSSProperties,
})

export const accodionContentStyles = () => ({
  accodionContent: {
    overflow: 'hidden',
    fontSize: '0.875rem',
    '&[data-state=closed]': {
      animation: `${accordionUp} .2s ease-out forwards`,
    },
    '&[data-state=open]': {
      animation: `${accordionDown} .2s ease-out forwards`,
    },
  } as CSSProperties,
})
