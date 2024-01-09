import { HFlow, Heading, Icon, VFlow, useStyles } from 'bold-ui'
import Logo from '@/assets/logo.png'

import { Link, useLocation } from 'react-router-dom'
import { SheetTrigger, SheetContent, SheetClose, Sheet } from '../../ui/sheet'
import { Separator } from '@/components/ui/separator'
import { cva } from 'class-variance-authority'
import { styles } from './styles'
import { getItems } from '../getItems'

export const MobileSidebar = () => {
  const { css, classes } = useStyles(styles)
  const { pathname } = useLocation()

  const linkVariants = cva(classes.link, {
    variants: {
      active: { true: classes.linkActive, false: classes.linkNormal },
    },
  })

  const items = getItems(pathname)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <span className={classes.menuToggle}>
          <Icon icon="hamburguerMenu" size={2} />
        </span>
      </SheetTrigger>
      <SheetContent side="left" className={classes.menuContainer}>
        <aside className={classes.menuContent}>
          <VFlow vSpacing={0}>
            <img src={Logo} alt="Logo" className={classes.logo} />
            <Heading level={2}>Pharmawatch</Heading>
          </VFlow>
          <Separator className={css({ margin: '12px 0 16px 0' })} />
          <nav>
            <VFlow vSpacing={0.5}>
              {items.map((item) => (
                <SheetClose key={item.href} asChild>
                  <Link
                    reloadDocument
                    to={item.href}
                    className={linkVariants({ active: item.active })}
                  >
                    <HFlow alignItems="center" hSpacing={0.5}>
                      <Icon icon={item.icon} />
                      {item.label}
                    </HFlow>
                  </Link>
                </SheetClose>
              ))}
            </VFlow>
          </nav>
        </aside>
      </SheetContent>
    </Sheet>
  )
}
