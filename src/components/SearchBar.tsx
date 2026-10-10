import type { SearchBarProps } from '../interfaces/SearchBarProps'

const SearchBar = ({ setNewValue }: SearchBarProps) => {
  return (
    <>
      <input
        className="border-amber-300 rounded-xl p-2 min-w-3 text-black bg-green-200"
        type="text"
        onChange={(e) => setNewValue(e.target.value)}
      />
    </>
  )
}

export default SearchBar
