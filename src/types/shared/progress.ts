import {
  PROGRESS_ABORTED,
  PROGRESS_DONE,
  PROGRESS_ONGOING,
  PROGRESS_PAUSED,
  PROGRESS_TODO,
} from 'src/types'

export type IProgress =
  | typeof PROGRESS_TODO
  | typeof PROGRESS_ONGOING
  | typeof PROGRESS_PAUSED
  | typeof PROGRESS_ABORTED
  | typeof PROGRESS_DONE
