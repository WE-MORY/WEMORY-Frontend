
// 4. 29. 
// 민석 :: 미디어 쿼리 설정 [데스크톱 / 모바일 환경]
import { useMediaQuery } from 'react-responsive';

const Desktop = ({ children }) => {
    // 적어도 width가 450보다 클 경우, DESKTOP 
    const isDesktop = useMediaQuery({minWidth: 450})
    return isDesktop ? children : null
}
const Mobile = ({ children }) => {
    // 최대 width가 450까지 출력하는, Mobile
    const isMobile = useMediaQuery({maxWidth: 450})
    return isMobile ? children : null
}

// export로 components 단위로 사용
export {Desktop, Mobile};
