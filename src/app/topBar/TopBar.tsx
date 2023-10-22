import { TopbarStyled } from "./topbar.style"
import { Logo } from "./Logo"


const TopBar = () => {
    return <TopbarStyled>
        <div>
            <Logo />
        </div>
    </TopbarStyled>
}

export { TopBar }