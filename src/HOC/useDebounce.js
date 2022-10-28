import React, { useState, useEffect } from 'react'

export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    if (value !== '') {
      const timer = setTimeout(() => setDebouncedValue(value), delay || 2000)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [value, delay])

  return debouncedValue
}
