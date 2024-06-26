import styled from "styled-components";
import {BALL_COLOR, BallColorValues} from "@/app/design-tokens";
import {useMemo} from "react";

export const BALL_DIAMETER = 50;

type BallProps = {
    position: { top?: string, left?: string, bottom?: string, right?: string }
    number: number,
}

type SphereProps = { color: BallColorValues } & Pick<BallProps, 'position'>

const Sphere = styled.div<SphereProps>`
    position: absolute;
    width: ${BALL_DIAMETER}px;
    height: ${BALL_DIAMETER}px;
    border-radius: 50%;
    background-image: radial-gradient(at 60% 40%, #fff, transparent 70%),
    radial-gradient(at 70% 80%, #000, transparent 70%);
    box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.6),
    0 10px 20px rgba(0, 0, 0, 0.5);

    ${({color, position: {top, left, bottom, right}}) => {
        return `
            background-color: ${color};
            ${top ? `top: ${top};` : ''}
            ${left ? `left: ${left};` : ''}
            ${bottom ? `bottom: ${bottom};` : ''}
            ${right ? `right: ${right};` : ''}
        `
    }}
`

export const Ball = ({position, number = 10}: BallProps) => {
    let isStripe = number > 8;
    let color = useMemo(() => {
        switch (number) {
            case 1:
                return BALL_COLOR.ONE;
            case 2:
                return BALL_COLOR.TWO;
            case 3:
                return BALL_COLOR.THREE;
            case 4:
                return BALL_COLOR.FOUR;
            case 5:
                return BALL_COLOR.FIVE;
            case 6:
                return BALL_COLOR.SIX;
            case 7:
                return BALL_COLOR.SEVEN;
            case 8:
                return BALL_COLOR.EIGHT;
            case 9:
                return BALL_COLOR.ONE;
            case 10:
                return BALL_COLOR.TWO;
            case 11:
                return BALL_COLOR.THREE;
            case 12:
                return BALL_COLOR.FOUR;
            case 13:
                return BALL_COLOR.FIVE;
            case 14:
                return BALL_COLOR.SIX;
            case 15:
                return BALL_COLOR.SEVEN;
            default:
                return BALL_COLOR.ONE;
        }
    }, [number])

    return (
        <Sphere position={position} color={color}/>
    )
}
