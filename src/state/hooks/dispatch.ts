import { useDispatch } from 'react-redux'
import { Dispatch } from 'src/models'

export const useThunk = useDispatch as ( () => Dispatch )
