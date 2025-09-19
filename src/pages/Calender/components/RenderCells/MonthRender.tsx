import type { Dayjs } from "dayjs";

const MonthRender = ({bookings,current}:{bookings:Array<any>,current:Dayjs}) => {
    console.log("bookings",bookings)
    console.log("current",current)
  return (
    <div>MonthRender</div>
  )
}

export default MonthRender