import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { FiSearch, FiX } from 'react-icons/fi'

import { useDesign } from '../../hooks/useDesign'

export const Searching = () => {
  const [search, setSearch] = useState('')
  const { query } = useRouter()
  const { handleSearch } = useDesign()

  useEffect(() => {
    if (query.search) setSearch(String(query.search))
    else setSearch('')
  }, [query])

  return (
    <div className="mx-8 mt-8 flex gap-1 md:hidden">
      <span className="flex items-center gap-1">
        <FiSearch size={14} /> Pesquisando:
      </span>
      <button
        className="flex items-center gap-1 rounded-lg bg-slate-100 p-2 font-semibold"
        onClick={() => handleSearch('')}
      >
        <span className="max-w-[calc(100vw-200px)] truncate">{search}</span>
        <FiX className="text-brand-600" />
      </button>
    </div>
  )
}
