import styled from "styled-components";

export const SectionContainer = styled.div`
  padding: 20px;
  text-align: left;
  border-bottom: 1px solid ${({ theme }) => theme.black[10]};
`;

export const Title = styled.p.attrs({
  className: "font-H4 text-black-50 font-semibold",
})`
  padding-bottom: 16px;
`;

export const ChoiceContainer = styled.div.attrs({
  className: "flex",
})`
  flex-wrap: wrap;
  margin: 0 -8px;
`;

export const ChoiceItem = styled.div`
  padding: 0 8px;
`;
