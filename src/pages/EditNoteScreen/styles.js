import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    backgroundColor: #333
`;

export const TitleInput = styled.TextInput`
    font-size: 20px;
    padding: 15px;
    font-weight: bold;
    color: #FFF
`;

export const BodyInput = styled.TextInput`
    flex: 1;
    padding: 15px;
    font-size: 15px;
    color: #FFF;
`;

export const SaveButton = styled.TouchableHighlight`
    margin-right: 15px;
`;

export const SaveButtonImage = styled.Image`
    width: 25px;
    height: 25px;
`;

export const CloseButton = styled.TouchableHighlight`
    margin-left: 15px;
`;

export const CloseButtonImage = styled.Image`
    width: 15px;
    height: 15px;
`;

export const DeleteButton = styled.TouchableHighlight`
    justify-content: center;
    align-items: center;
    height: 50px;
    backgroundColor: #870000;
`;

export const DeleteButtonText = styled.Text`
    fontSize: 20px;
    color: #FFF
`;