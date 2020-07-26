import React , {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import AntIcon from 'react-native-vector-icons/AntDesign';
import NoIcon from 'react-native-vector-icons/MaterialIcons';

import NoteItem from '../../components/NoteItem';

import { 
Container,
AddButton,
NotesList,
NoNotes,
NoNoteText
 } from './styles';

export default () => {
    const navigation = useNavigation();
    const list = useSelector(state=>state.notes.list);
    // const list = [];

    useLayoutEffect(()=>{
        navigation.setOptions({
            title:'Suas Notas',
            headerRight: () => (
                <AddButton underlayColor='transparent' onPress={()=>navigation.navigate('EditNote')} >
                    <AntIcon name='addfile' size={25} color='#ccc' />
                </AddButton>
            )
        })
    },[]);

    const headleNotePress = (index) => {
        navigation.navigate('EditNote',{
            key:index
        });
    }

    return(
        <Container>
            {list.length > 0 && 
         <NotesList 
            data={list}
            renderItem={({item,index})=>(
                <NoteItem 
                    data={item}
                    index={index}
                    onPress={headleNotePress}
                />
            )}
            keyExtractor={(item,index)=>index.toString()}
        />
        }
        {list.length == 0 &&
            <NoNotes>
                <NoIcon name='note-add' size={100} color='#ccc' />
                <NoNoteText>Nenhuma Anotação</NoNoteText>
            </NoNotes>
        }
        </Container>
    );
}