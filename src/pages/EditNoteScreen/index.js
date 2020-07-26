import React,{useState,useEffect,useLayoutEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {StatusBar} from 'react-native';
import {useRoute,useNavigation} from '@react-navigation/native';

import BtnIcon from 'react-native-vector-icons/Ionicons';

import { 
Container,
TileInput,
BodyInput,
SaveButton,
DeletButton,
DeleteNote
} from './styles';

export default () => {

    const navigation = useNavigation();
    const route = useRoute();
    
    const dispatch = useDispatch();
    const list = useSelector(state => state.notes.list);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const [status,setStatus] = useState('new');

    useEffect(()=>{
        if(route.params?.key != undefined && list[route.params.key]) {
            setStatus('edit');
            setTitle(list[route.params.key].title);
            setBody(list[route.params.key].body);
        }
    },[]);

    useLayoutEffect(()=>{
        navigation.setOptions({
            title: status == 'new' ? 'Nova Anotação' : 'Editar Anotação',
            headerRight:()=>(
                <SaveButton underlayColor='transparent' onPress={handleSaveBtn} >
                    <BtnIcon name='ios-save' size={27} color='#ccc' />
                </SaveButton>
            )
        });
    }, [status, title, body ]);

    const handleSaveBtn = () => {
        if(title != '' && body != '' ){
            if(status == 'edit'){
                dispatch({
                    type:'EDIT_NOTE',
                    payload:{
                        key: route.params.key,
                        title,
                        body
                    }
                });
            }else{
                dispatch({
                    type: 'ADD_NOTE',
                    payload:{title,body}
                })
            }
            navigation.goBack();
        }else{
            alert('Preencha o titulo e corpo')
        }
    }

    /*const handleDeletBtn = () => {
        navigation.goBack();
    }
    */

    const DeletEdit = () => {
        dispatch({
            type:'DELET_NOTE',
            payload:{
                key:route.params.key
            }
        });
        navigation.goBack();
    }

    return(
        <Container>
            <StatusBar barStyle='light-content' backgroundColor='#333' />
            <TileInput 
                value={title}
                onChangeText={t=>setTitle(t)}
                placeholder='Digite o Titulo da Anotação'
                placeholderTextColor='#ccc'
                autoFocus={true}
            />
            <BodyInput 
                value={body}
                onChangeText={t=>setBody(t)}
                placeholder='Começe a Digitar a Sua Anotaçao...'
                placeholderTextColor='#ccc'
                multiline={true}
                textAlignVertical='top'

            />
            {status == 'edit' && 
                <DeleteNote underlayColor='trasnparent' onPress={DeletEdit} >
                    <BtnIcon name='ios-trash-bin' size={27} color='#00352c' />
                </DeleteNote>
            }
        </Container>
    );
}