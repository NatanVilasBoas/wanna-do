export const dateFormat = (date: Date) => {
  return date
    .toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    })
    .toString()
}

export const timeFormat = (value: Date) => {
  return value.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })
}
