import { ComponentProps, FC } from "react";
import { SelectStyled } from "./ui.style";

interface PagesProps extends Omit<ComponentProps<typeof SelectStyled>, 'onChange'> {
    count: number;
    perPage?: number;
    onChange: (p: number | undefined) => void
}
const Pages: FC<PagesProps> = ({ count, perPage = 10, onChange, ...props }) => {
    const remaining = count % perPage === 0 ? 0 : 1
    const numberOfPages = Math.floor(count / perPage) + remaining;

    return <SelectStyled {...props} onChange={e => onChange(Number(e.target.value) || undefined)}>
        {new Array(numberOfPages).fill(undefined).map((_, i) => <option key={i} value={i + 1}>{i + 1}</option>)}
        <option value={undefined}>show all</option>
    </SelectStyled>
}

export { Pages }