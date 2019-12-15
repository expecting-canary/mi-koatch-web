import { ABORTED, DONE, ONGOING, PAUSED, TODO } from 'src/models'

export type Progress = typeof TODO | typeof ONGOING | typeof PAUSED | typeof ABORTED | typeof DONE
