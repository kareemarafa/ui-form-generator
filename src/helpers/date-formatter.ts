import moment from "moment";

export const DateFormatter = (date: Date) => {
  return moment(date).format('yyyy-MM-DD')
}
