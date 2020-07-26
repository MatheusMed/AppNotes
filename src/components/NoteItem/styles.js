import styled from 'styled-components/native';


export const Container = styled.View`
    flex-direction:row;
    align-items:center;
    margin:10px;
`;


export const Box = styled.TouchableHighlight`
    flex:1;
    height:50px;
    width:90%;
    padding-left:10px;
   justify-content:center;
   border-bottom-width:1px;
`;

export const Title = styled.Text`
    font-size:17px;
    color:#fff;
    text-align:left;
`;