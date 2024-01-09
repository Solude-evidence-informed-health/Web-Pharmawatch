import { useStyles } from 'bold-ui'
import React from 'react'
import ReactSelect, { Props } from 'react-select'

export const Select = React.forwardRef<HTMLSelectElement, Props>(
  (props, ref) => {
    const { theme } = useStyles()
    return (
      <ReactSelect
        ref={ref}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderRadius: theme.radius.input,
            backgroundColor: theme.pallete.surface.main,
            color: theme.pallete.text.main,
            borderColor: theme.pallete.gray.c60,
            transition: '.2s',
            boxShadow: state.isFocused
              ? '0 0 0 2px #f0f0f5, 0 0 0 4px #0069d0'
              : 'none',
            ':hover': {
              borderColor: theme.pallete.gray.c50,
            },
          }),
          valueContainer: (baseStyles) => ({
            ...baseStyles,
          }),
          input: (baseStyles) => ({
            ...baseStyles,
          }),
          placeholder: (baseStyles) => ({
            ...baseStyles,
            fontSize: theme.typography.sizes.button,
            color: theme.pallete.text.main,
          }),
          indicatorSeparator: (baseStyles) => ({
            ...baseStyles,
            margin: 0,
          }),
          dropdownIndicator: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: state.isFocused
              ? theme.pallete.gray.c80
              : theme.pallete.surface.background,
            padding: '6px 7px',
            height: '100%',
            alignItems: 'center',
            color: theme.pallete.text.main,
            ':hover': {},
          }),
          clearIndicator: (baseStyles) => ({
            ...baseStyles,
            padding: '6px 7px',
          }),
          menu: (baseStyles) => ({
            ...baseStyles,
            boxShadow: theme.shadows.outer[20],
          }),
          menuList: (baseStyles) => ({
            ...baseStyles,
            boxShadow: theme.shadows.outer[10],
          }),
          multiValue: (baseStyles) => ({
            ...baseStyles,
            border: `1px solid ${theme.pallete.gray.c60}`,
            backgroundColor: theme.pallete.surface.main,
            borderRadius: theme.radius.input,
          }),
          multiValueLabel: (baseStyles, state) => ({
            ...baseStyles,
            color: theme.pallete.text.main,
            padding: '2px 3px',
          }),
          multiValueRemove: (baseStyles, state) => ({
            ...baseStyles,
            borderRadius: theme.radius.input,
            ':hover': {
              backgroundColor: theme.pallete.status.danger.background,
              color: theme.pallete.status.danger.main,
            },
          }),
        }}
        theme={(selectTheme) => ({
          ...selectTheme,
          spacing: {
            ...selectTheme.spacing,
            controlHeight: 32,
          },
          colors: {
            ...selectTheme.colors,
            primary25: theme.pallete.surface.background,
            primary50: theme.pallete.primary.c80,
          },
        })}
        {...props}
      />
    )
  },
)

Select.displayName = 'Select'
