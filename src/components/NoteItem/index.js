import React from 'react';
import { Box,Title,Container } from './styles';
import AntIcon from 'react-native-vector-icons/AntDesign';

export default ({index,data,onPress}) => {
    return(
        <Container>
            <AntIcon name='filetext1' size={20} color='#ccc' />
            <Box underlayColor='#444' onPress={()=>onPress(index)}>
                <Title>{data.title}</Title>
            </Box>
        </Container>
    );
}