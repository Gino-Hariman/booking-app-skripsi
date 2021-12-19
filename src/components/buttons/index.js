import styled from "styled-components";

const className =
  "px-12 py-3 border-transparent text-Body font-medium rounded-full";

export const SuccessButton = styled.button.attrs({
  className: `${className} text-success-main bg-success-surface hover:bg-success-hover`,
})`
  transition: all 0.3s;
`;

export const RedButton = styled.button.attrs({
  className: `${className} text-danger-main bg-danger-surface hover:bg-danger-hover`,
})`
  transition: all 0.3s;
`;
