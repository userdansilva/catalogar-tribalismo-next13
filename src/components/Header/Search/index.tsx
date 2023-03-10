import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { FiSearch } from 'react-icons/fi'

import { useDesign } from '../../../hooks/useDesign'

interface SearchProps {
  onSearch?: () => void
}

export const Search = ({ onSearch }: SearchProps) => {
  const { handleSearch } = useDesign()
  const [search, setSearch] = useState('')

  const router = useRouter()

  useEffect(() => {
    const { search } = router.query
    if (search) setSearch(search as string)
  }, [router.query])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (onSearch) onSearch()
    handleSearch(search)
  }

  return (
    <div className="relative h-10">
      <FiSearch className="absolute left-4 top-3" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pesquisar"
          value={search}
          onChange={event => setSearch(event.target.value)}
          className="h-10 w-full rounded-lg bg-slate-100 pl-12 outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 md:w-auto"
        />
      </form>
    </div>
  )
}
