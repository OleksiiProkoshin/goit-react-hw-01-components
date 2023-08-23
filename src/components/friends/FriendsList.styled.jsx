import styled from 'styled-components';

export const List = styled.ul`
display: flex;
flex-wrap: no-wrap;
gap: 20px;
`;

export const ListItem = styled.li`
background-color: ${props => (props.isOnline ? 'green' : 'red')};
border: 2px solid black;
border-radius: 5px;
list-style: none;
text-align: center;
`;

export const ListImg = styled.img`
width: auto;
height: auto;
margin-top: 40px
`;

