import styled from "styled-components";

// export const PreviewContainer = styled.div`
//   position: relative;
//   overflow: hidden;
//   height: 100%;
//   min-height: 200px;
//   padding-top: 100px;
//   border-radius: 10px;
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center center;
// `;

export const PreviewContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  min-height: 200px;
  padding-top: 100px;
  border-radius: 10px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export const Content = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 40px 30px;
  background: linear-gradient(
    90.29deg,
    #000000 0.26%,
    rgba(0, 0, 0, 0) 147.66%
  );
`;

export const LocationName = styled.p.attrs({
  className: "text-white font-semibold font-body",
})``;

export const AvailSeats = styled.p.attrs({
  className: "text-white font-caption",
})`
  padding-top: 8px;
`;
