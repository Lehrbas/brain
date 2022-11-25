export interface ISpentDto {
  id?: string,
  type: string,
  tag: string,
  amount: number,
  date: string,
}

export interface ISpentDateRangeDto {
  startsAt: Date,
  endsAt: Date,
}

export interface ISpentAmountRangeDto {
  initialAmount: number,
  finalAmount: number,
}