'use client'

import { useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { useZUserStore } from '@/store/useZUserStore'

export const ZUserSetter = () => {
  const { user, isLoaded } = useUser()
  const setZUser = useZUserStore((state) => state.setZUser)

  useEffect(() => {
    if (!isLoaded || !user) return

    const userData = {
      id: user.id,
      name: user.firstName ?? '',
      email: user.emailAddresses[0]?.emailAddress ?? '',
    }

    setZUser(userData)
  }, [isLoaded, user, setZUser])

  return null
}
