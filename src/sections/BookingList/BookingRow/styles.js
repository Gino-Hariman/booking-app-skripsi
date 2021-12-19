import styled from "styled-components";

export const RowContainer = styled.div.attrs({
  className: "w-100 flex",
})`
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  border-bottom: 1px solid #e6e6e6;
`;

export const Id = styled.p.attrs({
  className: "text-body text-black-500",
})`
  color: ${({ theme }) => theme.black[40]};
`;

export const Headline = styled.div.attrs({
  className: "w-100 flex align-center",
})`
  padding-bottom: 12px;
`;

export const BookingPlace = styled.p.attrs({
  className: "text-H4 font-semibold",
})`
  color: ${({ theme }) => theme.black[70]};
`;

export const StudentName = styled(BookingPlace).attrs({
  className: "text-black-500",
})`
  color: ${({ theme }) => theme.black[40]};
`;
