import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import NoteItem from "../../components/NoteItem";

import {
    Container,
    AddButton,
    AddButtonImage,
    NotesList,
    NoNotes,
    NoNotesImage,
    NoNotesText
} from './styles';

export default () => {
    const navigation = useNavigation();

    const handleNotePress = (index) => {
        navigation.navigate('EditNote'), {
            key: index
        }
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Suas Notas',
            headerRight: () => (
                <AddButton underlayColor="transparent"  onPress={()=>navigation.navigate('EditNote')}>
                    <AddButtonImage source={require('../../assets/images/more.png')} />
                </AddButton>
            )
        });
    }, [])

    const list = useSelector(state => state.notes.list);

    return (
        <Container>
            {list.length > 0 &&
                <NotesList 
                    data={list}
                    renderItem={({item, index}) => (
                        <NoteItem 
                            data={item}
                            index={index}
                            onPress={handleNotePress}
                        />
                    )}
                    keyExtrator={(item, index)=>index.toString()}
                />
                
            }
            {list.length == 0 &&
                <NoNotes>
                    <NoNotesImage source={require('../../assets/images/note.png')}/>
                    <NoNotesText>Nenhuma Nota</NoNotesText>
                </NoNotes>
            }
        </Container>
    );
}