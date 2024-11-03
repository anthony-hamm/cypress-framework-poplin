class DateTimeParser {
  parseTimeAndDate(dateTime, groupName) {
    if (dateTime.includes('/')) {
      const [month, day, year] = dateTime.split('/')
      return new Date(Number(year) + 2000, month - 1, day)
    } else {
      const newDateTime = dateTime.replace(':', ' ')
      let [hour, minute, meridiem] = newDateTime.split(' ')
      if (meridiem === 'PM' && hour !== '12') {
        hour = String(Number(hour) + 12)
      }
      if (meridiem === 'AM' && hour === '12') {
        hour = '0'
      }
      const finalDate = new Date()
      if (groupName === 'Yesterday') {
        finalDate.setDate(finalDate.getDate() - 1)
      }
      return new Date(
        finalDate.getFullYear(),
        finalDate.getMonth(),
        finalDate.getDate(),
        hour,
        minute,
        0,
      )
    }
  }
}

export default DateTimeParser
