import { Theme } from 'bold-ui'
import { CSSProperties } from 'react'

export const styles = (theme: Theme) => ({
  linkActive: {
    color: theme.pallete.primary.main,
    backgroundColor: theme.pallete.gray.c90,
  } as CSSProperties,

  linkNormal: {
    color: theme.pallete.text.secondary,
  } as CSSProperties,

  link: {
    display: 'flex',
    padding: '8px',
    borderRadius: theme.radius.button,
    textDecoration: 'none',
    fontFamily: theme.typography.fontFamily,
    transition: '.15s ease',
    transform: 'translateX(-8px)',
    fontWeight: 500,
    fontSize: 14,
    ':hover': {
      color: theme.pallete.primary.main,
      backgroundColor: theme.pallete.gray.c90,
    },
  } as CSSProperties,

  menuToggle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  } as CSSProperties,

  menuContainer: {
    maxWidth: '75%',
    '@media (min-width:640px)': {
      maxWidth: 288,
    },
  } as CSSProperties,

  menuContent: {
    display: 'block',
    position: 'relative',
    top: 0,
    bottom: 0,
    backgroundColor: theme.pallete.gray.c100,
  } as CSSProperties,

  logo: { width: 32 } as CSSProperties,
})
