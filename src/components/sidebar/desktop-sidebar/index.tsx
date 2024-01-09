import { HFlow, Icon, VFlow, useStyles, Tooltip } from 'bold-ui'
import Logo from '@/assets/logo.png'

import { Link, useLocation } from 'react-router-dom'
import { cva } from 'class-variance-authority'
import { styles } from './styles'
import { getItems } from '../getItems'

export const DesktopSidebar = () => {
  const { classes } = useStyles(styles)
  const { pathname } = useLocation()

  const linkVariants = cva(classes.link, {
    variants: {
      active: { true: classes.linkActive, false: classes.linkNormal },
    },
  })

  const items = getItems(pathname)
  return (
    <aside className={classes.container}>
      <img src={Logo} alt="Logo" className={classes.logo} />
      <nav style={{ marginTop: '24px' }}>
        <VFlow vSpacing={0.5}>
          {items.map((item) => (
            <Tooltip key={item.href} text={item.label} placement="right">
              <Link
                reloadDocument
                to={item.href}
                className={linkVariants({ active: item.active })}
              >
                <HFlow alignItems="center" hSpacing={0.5}>
                  <Icon icon={item.icon} size={1.75} />
                </HFlow>
              </Link>
            </Tooltip>
          ))}
        </VFlow>
      </nav>
    </aside>
  )
}
