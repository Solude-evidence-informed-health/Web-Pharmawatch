import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { Icon, useStyles } from 'bold-ui'
import {
  accordionItemStyles,
  accordionTriggerStyles,
  accodionContentStyles,
} from './styles'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => {
  const { css, classes } = useStyles(accordionItemStyles)
  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={css([classes.accordionItem, className])}
      {...props}
    />
  )
})
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const { css, classes } = useStyles(accordionTriggerStyles)
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={css([classes.accordionTrigger, className])}
        {...props}
      >
        {children}
        <span className={css(classes.icon)}>
          <Icon icon="angleDown" size={1} />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
})
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const { css, classes } = useStyles(accodionContentStyles)
  return (
    <AccordionPrimitive.Content
      ref={ref}
      className={css([classes.accodionContent, className])}
      {...props}
    >
      <div className={css({ padding: '0 0 16px 0' })}>{children}</div>
    </AccordionPrimitive.Content>
  )
})
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
