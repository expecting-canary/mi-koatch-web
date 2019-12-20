import { useDispatch as useReduxDispatch } from 'react-redux'
import { Dispatch } from 'src/types'

export const useDispatch = useReduxDispatch as ( () => Dispatch )
