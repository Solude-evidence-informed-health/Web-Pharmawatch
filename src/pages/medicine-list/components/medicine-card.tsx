import { MedicineListItem } from '@/types/entities/medicine-list-item'
import { Separator } from '@/components/ui/separator'
import {
  VFlow,
  HFlow,
  Tooltip,
  Tag,
  Button,
  Icon,
  useStyles,
  Text,
  Currency,
} from 'bold-ui'
import { TagType } from 'bold-ui/lib/components/Tag/Tag'

const mapCurve: {
  A: TagType
  B: TagType
  C: TagType
} = {
  A: 'success',
  B: 'normal',
  C: 'danger',
}

export function MedicineCard({
  consPercentage,
  consVariation,
  curve,
  medicine,
  quantity,
  totalValue,
  type,
  unityValue,
}: MedicineListItem) {
  const { css, theme } = useStyles()

  const curveTagType = mapCurve[curve]
  const consVariationTagType = consVariation >= 0 ? 'success' : 'danger'

  return (
    <li
      className={css({
        backgroundColor: theme.pallete.surface.main,
        borderRadius: theme.radius.paper,
        padding: 16,
        boxShadow: theme.shadows.outer[10],
      })}
    >
      <VFlow vSpacing={0.5}>
        <HFlow hSpacing={0.5} alignItems="center">
          <Tooltip placement="bottom" text="Curva ABC" offset={1}>
            <Tag type={curveTagType}>{curve}</Tag>
          </Tooltip>
          <Tooltip placement="bottom" text="Percentual do consumo" offset={1}>
            <Tag type="normal">{consPercentage} %</Tag>
          </Tooltip>
          <Tooltip
            placement="bottom"
            text="Variação em relação ao consumo padrão"
            offset={1}
          >
            <Tag type={consVariationTagType}>{consVariation} %</Tag>
          </Tooltip>
        </HFlow>
        <div
          className={css({
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            columnGap: 16,
            rowGap: 0,
          })}
        >
          <Text fontSize={1} fontWeight={500}>
            {medicine}
          </Text>
          <Text color="secondary" fontWeight={400} fontSize={0.875}>
            {type}
          </Text>
        </div>
      </VFlow>
      <VFlow vSpacing={0.375} style={{ margin: '16px 0' }}>
        <Separator />
        <HFlow justifyContent="space-between" alignItems="center">
          <Text color="secondary" fontWeight={400}>
            Unidades
          </Text>
          <Text fontWeight={700} fontSize={1}>
            {quantity}
          </Text>
        </HFlow>
        <Separator />
        <HFlow justifyContent="space-between" alignItems="center">
          <Text color="secondary" fontWeight={400}>
            Valor unitário
          </Text>
          <Text fontWeight={700} fontSize={1}>
            <Currency currency="BRL" value={unityValue} />
          </Text>
        </HFlow>
        <Separator />
        <HFlow justifyContent="space-between" alignItems="center">
          <Text color="secondary" fontWeight={400}>
            Consumo
          </Text>
          <Text fontWeight={700} fontSize={1}>
            <Currency currency="BRL" value={totalValue} />
          </Text>
        </HFlow>
      </VFlow>
      <Button size="small" kind="primary" skin="outline" block>
        <Icon icon="pollOutline" />
        Análise
      </Button>
    </li>
  )
}
