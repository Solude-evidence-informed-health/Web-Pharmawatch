type Medicine = {
  id: number
  descr_material: string
}
type Type = {
  id: number
  descr_tipo: string
}
type Origin = {
  id: number
  descr_origem: string
}

export interface ApiFilters {
  material: Medicine[]
  tipo: Type[]
  origem: Origin[]
}
