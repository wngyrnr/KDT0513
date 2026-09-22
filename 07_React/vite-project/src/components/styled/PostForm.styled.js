import styled from 'styled-components';

export const FormContainer = styled.form`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const FormTitle = styled.h2`
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

export const ErrorMessage = styled.div`
  color: #dc3545;
  padding: 10px;
  margin-bottom: 15px;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  
  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
  
  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
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