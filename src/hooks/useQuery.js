import { useLocation } from 'react-router-dom'

export function useQuery() {
  const { search } = useLocation()
  const queryIterator = new URLSearchParams(search)

  const obj = {}

  const keys = queryIterator.keys()

  for (const key of queryIterator.keys()) {
    const values = queryIterator.getAll(key)
    if (values.length > 1) {
      obj[key] = values
    } else {
      obj[key] = queryIterator.get(key)
    }
  }

  return obj
}

