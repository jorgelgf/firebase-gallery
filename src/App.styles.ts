import styled from "styled-components";
export const Container = styled.div`
  background-color: #27282f;
  color: #fff;
  min-height: 100vh;
  min-width: 100vw;
`;

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  padding: 30px 0;
`;

export const Header = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;
  margin-bottom: 30px;
`;

export const ScreenWarnig = styled.div`
  text-align: center;

  .emoji {
    font-size: 50px;
    margin-bottom: 20px;
  }
`;

export const PhotoList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  @media (max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const UploadingForm = styled.form`
  background-color: #3d3f43;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  margin-left: 150px;
  margin-right: 150px;
  align-items: center;
  @media (max-width: 650px) {
    flex-direction: column;
    width: 90vw;
    margin: 20px 0;
  }

  input[type="submit"] {
    background-color: #756df4;
    border: 0;
    color: #fff;
    padding: 8px 16px;
    font-size: 15px;
    border-radius: 10px;
    margin: 0 20px;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
    @media (max-width: 650px) {
      margin: 30px 0;
    }
  }
`;
