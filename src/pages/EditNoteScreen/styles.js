import styled from 'styled-components/native';


export const Container = styled.View`
    flex:1;
    background-color:#333;
`;


export const TileInput = styled.TextInput`
    font-size:20px;
    font-weight:bold;
    padding:15px;
    color:#fff;
    text-align:center;
`;


export const BodyInput = styled.TextInput`
    flex:1;
    padding:15px;
    background-color:#111;
    font-size:15px;
    color:#fff;
`;


export const SaveButton = styled.TouchableHighlight`
    margin-right:10px;
`;


export const DeletButton = styled.TouchableHighlight`
    margin-left:10px;
`;

export const DeleteNote = styled.TouchableHighlight`
    background-color:#ff1744;
    height:40px;
    justify-content:center;
    align-items:center;
`;