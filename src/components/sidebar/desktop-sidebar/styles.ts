import { Theme } from 'bold-ui'
import { CSSProperties } from 'react'

export const styles = (theme: Theme) => ({
  link: {
    display: 'flex',
    padding: '6px',
    borderRadius: theme.radius.button,
    textDecoration: 'none',
    fontFamily: theme.typography.fontFamily,
    transition: '.15s ease',
    fontWeight: 500,
    fontSize: 14,
    ':hover': {
      color: theme.pallete.primary.main,
      backgroundColor: theme.pallete.gray.c90,
    },
  } as CSSProperties,

  linkNormal: {
    color: theme.pallete.text.secondary,
  } as CSSProperties,
  linkActive: {
    color: theme.pallete.primary.main,
    backgroundColor: theme.pallete.gray.c90,
  } as CSSProperties,

  container: {
    position: 'sticky',
    width: 'min-content',
    height: '100dvh',
    top: 0,
    bottom: 0,
    backgroundColor: theme.pallete.gray.c100,
    padding: 12,
    borderRight: `1px solid ${theme.pallete.divider}`,
    display: 'none',
    '@media (min-width: 1024px)': {
      display: 'flex',
    },
    alignItems: 'center',
    flexDirection: 'column',
  } as CSSProperties,
  logo: { width: 36 },
})
