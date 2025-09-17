import React, { useCallback, useState } from 'react'

const useCustomModalRenderer = <T extends string>(types: T[]) => {
  const [activeTypes, setActiveTypes] = useState<T[]>([])
  const [data, setData] = useState<{ [key: string]: any }>({})

  const push = useCallback(
    (type: T, data?: React.SetStateAction<{ [key: string]: any }>) => {
      if (!types.includes(type)) {
        return
      }
      setActiveTypes((currentTypes) => {
        if (currentTypes.includes(type)) {
          return currentTypes
        }
        return [...currentTypes, type]
      })
      if (data !== undefined) {
        setData(data)
      }
    },
    [setActiveTypes, types],
  )

  const pop = useCallback(
    (type: T, data?: React.SetStateAction<{ [key: string]: any }>) => {
      setActiveTypes((currentTypes) => {
        if (!currentTypes.includes(type)) {
          return currentTypes
        }
        return currentTypes.filter((t) => t !== type)
      })
      if (data !== undefined) {
        setData(data)
      } else {
        setData({})
      }
    },
    [setActiveTypes],
  )

  return {
    activeTypes,
    push,
    pop,
    data,
    setData
  }
}

export default useCustomModalRenderer