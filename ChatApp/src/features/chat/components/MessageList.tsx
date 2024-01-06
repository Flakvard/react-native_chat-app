import React from 'react';
import { FlatList, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Block, Text } from '../../../common/components';
import { Message } from '../utils/MessageUtils';

interface MessageListProps {
    messages: Message[];
    onPressMessage: (message: Message) => void;
}

const MessageList: React.FC<MessageListProps> = ({ messages, onPressMessage }) => {
    const keyExtractor = (item: Message) => item.id.toString();

    const renderMessageItem = ({ item, index }: { item: Message; index: number }) => (
        <Block key={item.id} style={styles.messageRow}>
            <TouchableWithoutFeedback onPress={() => onPressMessage(item)}>
                {renderMessageBody(item, index)}
            </TouchableWithoutFeedback>
        </Block>
    );

    const renderMessageBody = ({ type, text, uri }: Message, index: number) => {
        let messageBubbleStyle, messageTextStyle;

        switch (type) {
            case 'textCre':
                messageBubbleStyle = styles.creMessageBubble;
                messageTextStyle = styles.creMessageText;
                break;
            case 'textRec':
                messageBubbleStyle = styles.reqMessageBubble;
                messageTextStyle = styles.reqMessageText;
                break;
            case 'imageCre':
                return <Image style={styles.imageCre} source={{ uri }} />;
            case 'imageRec':
                return <Image style={styles.imageRec} source={{ uri }} />;
            default:
                return null;
        }


        return (
            <Block style={[ messageBubbleStyle,]}>
                <Text style={messageTextStyle}>{text}</Text>
            </Block>
        );
    };

    return (
        <FlatList
            style={styles.container}
            inverted
            data={messages}
            renderItem={renderMessageItem}
            keyExtractor={keyExtractor}
            keyboardShouldPersistTaps={'handled'}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'visible',
    },
    messageRow: {
        marginBottom: 4,
        marginRight: 10,
        marginLeft: 10,
    },
    creMessageBubble: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: 'rgb(16,135,255)',
        borderRadius: 20,
        alignSelf: 'flex-end',
    },
    reqMessageBubble: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: 'rgb(240,240,240)',
        borderRadius: 20,
        alignSelf: 'flex-start',
    },
    creMessageText: {
        fontSize: 18,
        color: 'white',
    },
    reqMessageText: {
        fontSize: 18,
        color: 'black',
    },
    imageCre: {
        width: 150,
        height: 150,
        borderRadius: 10,
        alignSelf: 'flex-end',
    },
    imageRec: {
        width: 150,
        height: 150,
        borderRadius: 10,
        alignSelf: 'flex-start',
    },
});

export default MessageList;
