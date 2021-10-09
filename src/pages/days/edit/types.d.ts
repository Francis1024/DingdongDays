export interface DayParams {
  _id?: string
  title: string
  status: number
  time: string | number
}

export interface getDayDetailsParams {
  id: string | string[] | null
}
