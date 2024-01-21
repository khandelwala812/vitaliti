import { FC, ReactNode, createContext, useMemo, useState } from 'react'

interface IScanProviderProps {
    children: ReactNode
}

export interface IScan {
    uri: string 
    rating: string
}

export interface IScanContext {
    scans: IScan[]
    setScans: (scans: IScan[]) => void
}

export const ScanContext = createContext<IScanContext | null>(null)

export const ScanProvider: FC<IScanProviderProps> = ({ children }) => {
    const [scans, setScans] = useState<IScan[]>([])
    const memoizedContextValue = useMemo(
        () => ({
            scans,
            setScans
        }),
        [scans, setScans]
    )

    return (
        <ScanContext.Provider value={memoizedContextValue}>
            {children}
        </ScanContext.Provider>
    )
} 