export type FilterItem = {
  value: number
  label: string
}

export interface Filters {
  medicines: FilterItem[]
  types: FilterItem[]
  origins: FilterItem[]
}
