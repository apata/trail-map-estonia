import styled, { css } from "styled-components";

interface Marginless {
  marginless?: boolean;
}

const TypographyBase = css`
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

export const Heading1 = styled.h1<Marginless>`
  ${TypographyBase};
  font-size: ${({ theme }) => theme.typography.h1.fontSize}px;
  font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
  line-height: ${({ theme }) => theme.typography.h1.lineHeight};
  margin-top: ${({ theme, marginless }) =>
    !marginless ? `${theme.spacing.d2}px` : 0};
`;

export const Heading2 = styled.h2<Marginless>`
  ${TypographyBase};
  font-size: ${({ theme }) => theme.typography.h2.fontSize}px;
  font-weight: ${({ theme }) => theme.typography.h2.fontWeight};
  line-height: ${({ theme }) => theme.typography.h2.lineHeight};
  margin-top: ${({ theme, marginless }) =>
    !marginless ? `${theme.spacing.d1}px` : 0};
`;

export const Heading3 = styled.h3<Marginless>`
  ${TypographyBase};
  font-size: ${({ theme }) => theme.typography.h3.fontSize}px;
  font-weight: ${({ theme }) => theme.typography.h3.fontWeight};
  line-height: ${({ theme }) => theme.typography.h3.lineHeight};
  margin-top: ${({ theme, marginless }) =>
    !marginless ? `${theme.spacing.d1}px` : 0};
`;

export const Heading4 = styled.h4<Marginless>`
  ${TypographyBase};
  font-size: ${({ theme }) => theme.typography.h4.fontSize}px;
  font-weight: ${({ theme }) => theme.typography.h4.fontWeight};
  line-height: ${({ theme }) => theme.typography.h4.lineHeight};
  margin-top: ${({ theme, marginless }) =>
    !marginless ? `${theme.spacing.d0_5}px` : 0};
`;

export const Paragraph = styled.p<Marginless>`
  ${TypographyBase};
  font-size: ${({ theme }) => theme.typography.body1.fontSize}px;
  font-weight: ${({ theme }) => theme.typography.body1.fontWeight};
  line-height: ${({ theme }) => theme.typography.body1.lineHeight};
  margin-top: ${({ theme, marginless }) =>
    !marginless ? `${theme.spacing.d1}px` : 0};
`;
