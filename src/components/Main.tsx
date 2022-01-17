import styled from 'styled-components';

const Main = styled.main`
  min-width: 90vw;
  max-width: 90vw;
  min-height: 80vh;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
  margin-top: 5vh;
  margin-bottom: 5vh;
  margin-left: auto;
  margin-right: auto;
  padding: 1vw 2vw;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0.5px 3.6px rgba(0, 0, 0, 0.019),
    0px 1.5px 10px rgba(0, 0, 0, 0.026), 0px 3.6px 24.1px rgba(0, 0, 0, 0.034),
    0px 12px 80px rgba(0, 0, 0, 0.07);
`;

export default Main;
