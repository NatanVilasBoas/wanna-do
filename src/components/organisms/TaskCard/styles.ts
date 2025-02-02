import styled from "styled-components/native"

interface BorderProps {
  priority: "low" | "medium" | "high"
}

interface StatusTagProps {
  status: "todo" | "doing" | "done"
}

export const Container = styled.TouchableOpacity.attrs<BorderProps>(() => ({
  activeOpacity: 0.8
}))`
  width: 100%;
  padding: 24px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.primaryLight};
  border-left-width: 8px;
  border-left-color: ${({ theme, priority }) => {
    switch (priority) {
      case "high":
        return theme.colors.feedbackError
      case "medium":
        return theme.colors.secondaryLight
      case "low":
        return theme.colors.primaryMain
    }
  }};
`

export const TitleContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 32px;
  justify-content: space-between;
  background-color: transparent;
  margin: 0px 24px;
`

export const TooltipContainer = styled.View`
  gap: 24px;
`

export const StatusTagContainer = styled.View<StatusTagProps>`
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: ${({ status }) => {
    switch (status) {
      case "todo":
        return "#F9C74F"
      case "doing":
        return "#F9844A"
      case "done":
        return "#43AA8B"
      default:
        return "#FFF"
    }
  }};
  border-radius: 48px;
  justify-content: center;
  align-items: center;
  padding: 4px 12px;
`
