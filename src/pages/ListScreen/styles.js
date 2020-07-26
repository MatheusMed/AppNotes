import styled from 'styled-components/native';


export const Container = styled.View`
    flex:1;
    background-color:#333;
    justify-content:center;
    align-items:center;
`;


export const NotesList = styled.FlatList`
    flex:1;
    width:100%;
`;

export const AddButton = styled.TouchableHighlight`
    margin-right:10px;
`;

export const NoNotes = styled.View`
    align-items:center;
    justify-content:center;
`;

export const NoNoteText = styled.Text`
    font-size:20px;
    color:#fff;
`;