import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet'
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from '@/components/ui/accordion'
import {
  Button,
  Icon,
  VFlow,
  Checkbox,
  useStyles,
  MonthField,
  Text,
} from 'bold-ui'
import { Controller } from 'react-hook-form'
import { Select } from '@/components/ui/select'
import { Filters } from '@/types/entities/filters'
import { useFiltersForm } from '../hooks/useFiltersForm'

type FilterListProps = {
  filters: Filters
}

const handleCheckboxChange = (field, value, checked) => {
  const updatedValue = checked
    ? [...field.value, parseInt(value)]
    : field.value.filter((v) => parseInt(value) !== v)

  field.onChange(updatedValue)
}

export const FilterList = ({ filters }: FilterListProps) => {
  const { css } = useStyles()

  const { form, maxMonth, minMonth, onSubmit } = useFiltersForm(
    filters.medicines,
  )

  const startDate = form.watch('startDate')
  const endDate = form.watch('endDate')

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button kind="normal">
          <Icon icon="filterOutline" />
          Filtros
        </Button>
      </SheetTrigger>
      <SheetContent onOpenAutoFocus={(e) => e.preventDefault()}>
        <SheetHeader>
          <SheetTitle>Filtros</SheetTitle>
        </SheetHeader>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <VFlow style={{ margin: '24px 0 16px 0' }}>
            <VFlow vSpacing={0.25}>
              <Text color="normal" fontWeight={700} fontSize={1}>
                Medicamento
              </Text>
              <Controller
                name="medicines"
                control={form.control}
                defaultValue={[]}
                render={({ field }) => (
                  <Select
                    {...field}
                    placeholder="Todos"
                    options={filters.medicines}
                    isMulti
                    closeMenuOnSelect={false}
                  />
                )}
              />
            </VFlow>
            <VFlow vSpacing={0.25}>
              <Text color="normal" fontWeight={700} fontSize={1}>
                Período
              </Text>
              <Controller
                name="startDate"
                control={form.control}
                render={({ field }) => (
                  <MonthField
                    {...field}
                    readOnly
                    clearable={false}
                    minMonth={minMonth}
                    maxMonth={endDate}
                  />
                )}
              />
              <Text fontWeight={500}>Até</Text>
              <Controller
                name="endDate"
                control={form.control}
                render={({ field }) => (
                  <MonthField
                    {...field}
                    readOnly
                    clearable={false}
                    minMonth={startDate}
                    maxMonth={maxMonth}
                  />
                )}
              />
            </VFlow>
          </VFlow>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Tipo</AccordionTrigger>
              <AccordionContent className={css({ padding: 6 })}>
                <Controller
                  name="type"
                  control={form.control}
                  defaultValue={[]}
                  render={({ field }) => (
                    <VFlow>
                      {filters.types.map((type) => (
                        <Checkbox
                          checked={form.getValues('type')?.includes(type.value)}
                          key={type.value}
                          {...field}
                          value={type.value}
                          label={type.label}
                          onChange={(e) =>
                            handleCheckboxChange(
                              field,
                              e.target.value,
                              e.target.checked,
                            )
                          }
                        />
                      ))}
                    </VFlow>
                  )}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Origem</AccordionTrigger>
              <AccordionContent className={css({ padding: 6 })}>
                <Controller
                  name="origin"
                  control={form.control}
                  defaultValue={[]}
                  render={({ field }) => (
                    <VFlow>
                      {filters.origins.map((origin) => (
                        <Checkbox
                          checked={form
                            .getValues('origin')
                            ?.includes(origin.value)}
                          key={origin.value}
                          {...field}
                          value={origin.value}
                          label={origin.label}
                          onChange={(e) =>
                            handleCheckboxChange(
                              field,
                              e.target.value,
                              e.target.checked,
                            )
                          }
                        />
                      ))}
                    </VFlow>
                  )}
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <SheetClose asChild>
            <Button
              type="submit"
              kind="primary"
              block
              style={{ marginTop: 24 }}
            >
              Aplicar
            </Button>
          </SheetClose>
        </form>
      </SheetContent>
    </Sheet>
  )
}
