import { Button, useStyles, Text, Icon } from 'bold-ui'
import { useState } from 'react'

type PaginationProps = {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(page)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    onPageChange(page)
  }

  const { css } = useStyles()
  return (
    <div
      className={css({
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
      })}
    >
      <Text color="secondary" fontSize={0.875} fontWeight={100}>
        Página {currentPage + 1} de {totalPages}
      </Text>
      <div
        className={css({
          display: 'flex',
          gap: 16,
        })}
      >
        <Button
          size="small"
          disabled={currentPage === 0}
          onClick={() => handlePageChange(currentPage - 1)}
          block
        >
          <Icon icon="angleLeft" />
        </Button>

        <Button
          size="small"
          disabled={currentPage + 1 === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          block
        >
          <Icon icon="angleRight" />
        </Button>
      </div>
    </div>
  )
}
