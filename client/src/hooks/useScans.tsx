import { useContext } from 'react'
import { ScanContext } from '../context/ScanProvider'

export const useScans = () => {
    const scanContext = useContext(ScanContext)

    if (!scanContext) throw Error('Need context')

    return scanContext
}