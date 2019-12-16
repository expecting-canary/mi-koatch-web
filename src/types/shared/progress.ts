import { ABORTED, DONE, ONGOING, PAUSED, TODO } from 'src/types'

export type Progress = typeof TODO | typeof ONGOING | typeof PAUSED | typeof ABORTED | typeof DONE
