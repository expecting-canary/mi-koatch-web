import { useDispatch } from 'react-redux'
import { Dispatch } from 'src/types'

export const useThunk = useDispatch as ( () => Dispatch )
