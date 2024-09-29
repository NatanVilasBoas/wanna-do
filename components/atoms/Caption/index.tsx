import { StyledText } from "./styles";

export default function Caption({children}: {children: React.ReactNode}){
    return(
        <StyledText>
            {children}
        </StyledText>
    )
}