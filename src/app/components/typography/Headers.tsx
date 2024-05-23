import styled from "styled-components";
import {BaseTypography, BaseTypographyProps} from "@/app/components/typography/BaseTypography";

type H1Props = {} & BaseTypographyProps<'h1'>;
export const H1 = styled(BaseTypography).attrs({as: 'h1'})<H1Props>``

type H2Props = {} & BaseTypographyProps<'h2'>;
export const H2 = styled(BaseTypography).attrs({as: 'h2'})<H2Props>``

type H3Props = {} & BaseTypographyProps<'h3'>;
export const H3 = styled(BaseTypography).attrs({as: 'h3'})<H3Props>``
