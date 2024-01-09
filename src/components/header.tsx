import { Cell, Grid, SelectAsync, useStyles } from 'bold-ui'
import { MobileSidebar } from '@/components/sidebar/mobile-sidebar'

export const Header = () => {
  const { css, theme } = useStyles()
  return (
    <header
      className={css({
        position: 'relative',
        width: '100%',
        padding: '12px 16px',
        boxShadow: theme.shadows.outer[10],
      })}
    >
      <Grid alignItems="center" gap={1}>
        <Cell
          style={{
            display: 'flex',
            '@media (min-width: 1024px)': {
              display: 'none',
            },
          }}
        >
          <MobileSidebar />
        </Cell>
        <Cell flexGrow={1}>
          <div
            className={css({
              width: '100%',
              '@media (min-width: 640px)': {
                maxWidth: 300,
              },
            })}
          >
            <SelectAsync
              width={'100%'}
              clearable
              error=""
              itemIsEqual={function noRefCheck() {}}
              itemToString={function noRefCheck() {}}
              loadItems={function noRefCheck() {}}
              name="repository"
              onBlur={function noRefCheck() {}}
              onChange={function noRefCheck() {}}
              onFocus={function noRefCheck() {}}
              openOnFocus
              placeholder="Pesquisar medicamentos"
            />
          </div>
        </Cell>
      </Grid>
    </header>
  )
}
