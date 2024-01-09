import { useStyles } from 'bold-ui'

export const DashboardPage = () => {
  const { css, theme } = useStyles()
  return (
    <section
      className={css({
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '4fr 1fr',
        gap: 24,
      })}
    >
      <div
        className={css({
          padding: '164px 0',
          backgroundColor: theme.pallete.surface.main,
          borderRadius: theme.radius.paper,
          border: `1px solid ${theme.pallete.divider}`,
          backgroundImage: `repeating-linear-gradient(45deg, 
            ${theme.pallete.gray.c90} 10px,
            ${theme.pallete.gray.c90} 12px,
            transparent 12px,
            transparent 24px);
        `,
        })}
      />
      <div
        className={css({
          padding: '164px 0',
          backgroundColor: theme.pallete.surface.main,
          borderRadius: theme.radius.paper,
          border: `1px solid ${theme.pallete.divider}`,
          backgroundImage: `repeating-linear-gradient(45deg, 
            ${theme.pallete.gray.c90} 10px,
            ${theme.pallete.gray.c90} 12px,
            transparent 12px,
            transparent 24px);
        `,
        })}
      />
      <div
        className={css({
          padding: '164px 0',
          backgroundColor: theme.pallete.surface.main,
          borderRadius: theme.radius.paper,
          border: `1px solid ${theme.pallete.divider}`,
          backgroundImage: `repeating-linear-gradient(45deg, 
            ${theme.pallete.gray.c90} 10px,
            ${theme.pallete.gray.c90} 12px,
            transparent 12px,
            transparent 24px);
        `,
          gridColumn: 'span 2',
        })}
      />
    </section>
  )
}
