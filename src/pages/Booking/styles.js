import styled from "styled-components";

// const BookingContainer = styled.div`
//   padding: 24px;
//   max-width: 1200px;
//   margin: auto;
//   display: grid;
//   grid-template-columns: 100%;

//   @media (min-width: 1024px) {
//     grid-template-columns: 50% 50%;
//   }
// `;

const BookingContainer = styled.div.attrs({
  className: "grid grid-cols-1 sm:grid-cols-2",
})``;

export default BookingContainer;
