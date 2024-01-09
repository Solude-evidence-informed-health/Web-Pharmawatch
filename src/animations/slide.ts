import { keyframes } from '@emotion/react'

export const slideInRight = keyframes`
from {
  transform:translateX(100%)
}
to {
  transform:translateX(0)
}
`
export const slideInLeft = keyframes`
from {
  transform:translateX(-100%)
}
to {
  transform:translateX(0)
}
`
export const slideInTop = keyframes`
from {
  transform:translateY(-100%)
}
to {
  transform:translateX(0)
}
`

export const slideInBottom = keyframes`
from {
  transform:translateY(100%)
}
to {
  transform:translateX(0)
}
`

export const slideOutRight = keyframes`
from {
  transform:translateX(0)
}
to {
  transform:translateX(100%)
}
`
export const slideOutLeft = keyframes`
from {
  transform:translateX(0)
}
to {
  transform:translateX(-100%)
}
`
export const slideOutTop = keyframes`
from {
  transform:translateX(0)
}
to {
  transform:translateY(-100%)
}
`

export const slideOutBottom = keyframes`
from {
  transform:translateX(0)
}
to {
  transform:translateY(100%)
}
`
