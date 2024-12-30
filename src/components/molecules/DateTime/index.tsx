import dayjs from "dayjs"

import { DaysOfWeek } from "../../../shared/enums"
import theme from "../../../styles/theme"
import { Container, DateContainer, DateText, GreetingsText, TimeAndDayContainer, TimeText } from "./styles"

interface Props {
  key?: string
}

export default function DateTime({ key }: Props) {
  const hour = dayjs().hour()
  const getGreeting = () => {
    if (hour >= 6 && hour < 12) return "Bom dia"
    if (hour >= 12 && hour < 18) return "Boa tarde"
    return "Boa noite"
  }
  return (
    <Container key={key}>
      <GreetingsText>
        {getGreeting()}, <GreetingsText style={{ color: theme.colors.primaryMain }}>Natan</GreetingsText>
      </GreetingsText>
      <DateContainer>
        <DateText>{dayjs().format("DD.MM")}</DateText>
        <TimeAndDayContainer>
          <TimeText style={{ color: theme.colors.primaryMain }}>{DaysOfWeek[dayjs().day()].slice(0, 3)}</TimeText>
          <TimeText>{dayjs().format("HH:mm")}</TimeText>
        </TimeAndDayContainer>
      </DateContainer>
    </Container>
  )
}
