import React, { useEffect, useState, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";

import {
    Container,
    TitleInput,
    BodyInput
} from './styles';

export default () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const route = useRoute();
    const list = useSelector(state => state.notes.list);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [status, setStatus] = useState('new');
    

    useEffect(() => {
        if(route.params?.key != undefined && list[route.params.key]) {
            setStatus('edit');
            setTitle( list[route.params.key].title );
            setBody( list[route.params.key].body );
        }
    }, []);

    return (
        <Container>
            <TitleInput 
                value={title}
                onChangeText={t=>setTitle(t)}
                placeholder="Digite o título da anotação."
                placeholderTextColor="#CCC"
                autoFocus={true}
            />
            <BodyInput 
                value={body}
                onChangeText={t=>setBody(t)}
                placeholder="Digite o corpo da anotação."
                placeholderTextColor="#CCC"
                multiline={true}
                textAlignVertical="top"
            />
        </Container>
    );
}