import styled from "@emotion/styled";

export const TopHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 2000px;
  max-height: 50px;
  margin: 0 auto;
  padding: 0 20px;
`;
export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  max-width: 2000px;
  align-items: center;
  margin: 0 auto;
  padding: 20px 0;
  justify-content: space-between;
  @media (min-width: 960px) {
    justify-content: initial;
  }
`;
