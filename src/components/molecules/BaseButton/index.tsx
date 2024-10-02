import Caption from "../../atoms/Caption"
import { Button } from "./styles"

export default function BaseButton({ children }: { children: React.ReactNode }) {
  return (
    <Button>
      <Caption>{children}</Caption>
    </Button>
  )
}
