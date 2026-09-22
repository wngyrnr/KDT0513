import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  color: #333;
  margin: 0;
`;

export const Button = styled.button`
  background-color: ${props => props.type === 'button' ? '#6c757d' : '#007bff'};
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
  
  &:hover {
    background-color: ${props => props.type === 'button' ? '#5a6268' : '#0056b3'};
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const Loading = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 18px;
  color: #666;
`;

export const Error = styled.div`
  color: #dc3545;
  padding: 20px;
  text-align: center;
  font-size: 18px;
`;

export const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  
  div {
    background: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`; 