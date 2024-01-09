import { Cell, Grid, useStyles } from 'bold-ui'
import { Header } from '@/components/header'
import { Outlet } from 'react-router-dom'
import { DesktopSidebar } from '@/components/sidebar/desktop-sidebar'

export const RootLayout = () => {
  const { css, theme } = useStyles()
  return (
    <Grid wrap={false} gap={0}>
      <Cell
        style={{
          padding: 0,
        }}
      >
        <DesktopSidebar />
      </Cell>
      <Cell flexGrow={1}>
        <Header />
        <main
          className={css({
            padding: '24px 16px',
            backgroundColor: theme.pallete.surface.background,
            minHeight: '100vh',
          })}
        >
          <Outlet />
        </main>
      </Cell>
    </Grid>
  )
}
