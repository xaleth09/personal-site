import styled from "styled-components";
import {COLORS} from "@/app/design-tokens";

export const Diamond = styled.div<{ orientation?: 'vertical' | 'horizontal' }>`
    width: 20px;
    height: 20px;
    background-color: ${COLORS.WHITE};
    transform: rotate(${({orientation = 'vertical'}) => orientation === 'vertical' ? 45 : 135}deg) skew(20deg, 20deg);
`
