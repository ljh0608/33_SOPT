import styled from "styled-components";
import { ReactNode } from "react";
type TextProps = {
  children: ReactNode;
};
const MainText = ({ children }: TextProps) => {
  return <MainTextWrapper>{children}</MainTextWrapper>;
};

const MainTextWrapper = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.head1};
`;

export default MainText;
