export type MedicineListItem = {
  medicine: string
  type: string
  quantity: number
  unityValue: number
  totalValue: number
  consPercentage: number
  curve: 'A' | 'B' | 'C'
  consVariation: number
}
