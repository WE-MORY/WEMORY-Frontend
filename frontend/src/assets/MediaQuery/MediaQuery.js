
import { useMediaQuery } from 'react-responsive';

const Desktop = ({ children }) => {
    // 적어도 width가 600보다 클 경우, DESKTOP 
    const isDesktop = useMediaQuery({minWidth: 600})
    return isDesktop ? children : null
}
const Mobile = ({ children }) => {
    // 최대 width가 600까지 출력하는, Mobile
    const isMobile = useMediaQuery({maxWidth: 600})
    return isMobile ? children : null
}

export {Desktop, Mobile};
