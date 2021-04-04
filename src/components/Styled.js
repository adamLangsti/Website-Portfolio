import styled from 'styled-components';

export const Page = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: ${(props) => props.theme.pageBackground};
    color: ${(props) => props.theme.fontColor};
    transition: all 0.5s ease;
`;
export const Toggle = styled.button`
    position: relative;
    top: 100px;
    right: 550px;
    cursor: pointer;
    border-radius: 100%;
    border: none;
    background-color: ${(props) => props.theme.toggleColor};
    color: ${(props) => props.theme.pageBackground};
    &:focus {
        outline: #fff;
    }
    transition: all 0.5s ease;
`;
