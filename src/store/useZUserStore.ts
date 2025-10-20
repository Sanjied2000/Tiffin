import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ZUser {
  id: string
  name: string
  email: string
}

interface ZUserState {
  zuser: ZUser | null
  setZUser: (zuser: ZUser) => void
  clearZUser: () => void
}

export const useZUserStore = create<ZUserState>()(
  persist(
    (set) => ({
      zuser: null,
      setZUser: (zuser) => set({ zuser }),
      clearZUser: () => set({ zuser: null }),
    }),
    {
      name: 'zuser-storage', 
    }
  )
)
