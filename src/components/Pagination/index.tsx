import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

interface PaginationProps {
  total: number
  limit: number
  currentPage: number
  goToPage: (page: number) => void
}

export const Pagination = (props: PaginationProps) => {
  const { total, limit, currentPage, goToPage } = props

  const totalPages = Math.ceil(total / limit)

  const createIndexes = () => {
    const initial = []

    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      if (i <= totalPages && i >= 1) {
        initial.push(
          <button
            className={`${i == currentPage && 'border-b-2 border-brand-600'}`}
            key={i}
            onClick={() => goToPage(i)}
          >
            {i}
          </button>
        )
      }
    }

    return initial
  }

  return (
    <div className="mt-12 flex justify-center">
      <div className="flex gap-4 child:p-4">
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage - 1 < 1}>
          <FiChevronLeft />
        </button>
        {currentPage == totalPages && currentPage - 2 > 0 && (
          <button onClick={() => goToPage(currentPage - 2)}>{currentPage - 2}</button>
        )}
        {createIndexes()}
        {currentPage == 1 && currentPage + 2 <= totalPages && (
          <button onClick={() => goToPage(currentPage + 2)}>{currentPage + 2}</button>
        )}
        <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage + 1 >= totalPages}>
          <FiChevronRight />
        </button>
      </div>
    </div>
  )
}
