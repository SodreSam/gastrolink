import styled from 'styled-components';

export const Container = styled.header`
background: #D73035;
display: flex;
justify-content: center;
height: 198px;
align-items: center;
`;

export const Content = styled.div`
width: 100%;
max-width: 960px;
display: flex;
align-items: center;
justify-content: space-between;

.page-details {
    h1{
        color: #f5f5f5;
        font-size: 32px;
    }
    p{
        color: #f5f5f5;
        font-weight: 400;
        font-size: 16px;

    }
}
`
