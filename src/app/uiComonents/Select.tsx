import { ComponentProps, FC } from "react"
import { InputStyled } from "./ui.style";


interface TextInputProps extends Omit<ComponentProps<typeof InputStyled>, 'onChange'> {
    onChange: (s: string) => void;
}


const TextInput: FC<TextInputProps> = ({ onChange, ...props }) => {
    return <InputStyled {...props} onChange={e => onChange(e.target.value)} />
}

export { TextInput }