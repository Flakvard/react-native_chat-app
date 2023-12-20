import React from 'react';
import PropTypes from 'prop-types';
import { MessageShape } from '../utils/MessageUtils';
import { FlatList, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Block, Button, Text } from '../../../common/components';
// import MapView from 'react-native-maps';


const keyExtractor = (item: { id: { toString: () => any; }; }) => item.id.toString();

export default class MessageList extends React.Component {

    static propTypes = {
        messages: PropTypes.arrayOf(MessageShape).isRequired,
        onPressMessage: PropTypes.func,
    };

    static defaultProps = {
        onPressMessage: () => {},
        };
    
    renderMessageItem = ({ item }: any) => {
        const { onPressMessage }: any = this.props;
        return (
            <Block key={item.id} style={styles.messageRow}>
            <TouchableWithoutFeedback onPress={() => onPressMessage(item)}>
            {this.renderMessageBody(item)}
            </TouchableWithoutFeedback>
            </Block>
        );
    };

    renderMessageBody = ({ type, text, uri }: any) => {
        switch (type) {
            case 'text':
                return (
                    <Block style={styles.messageBubble}>
                    <Text style={styles.text}>{text}</Text>
                    </Block>
                );
            case 'image':
                return <Image style={styles.image} source={{ uri }} />;
            default:
                return null;
            }
            };

    render() {
        const { messages }:any = this.props;
        return (
            <FlatList
                style={styles.container}
                inverted
                data={messages}
                renderItem={this.renderMessageItem}
                keyExtractor={keyExtractor}
                keyboardShouldPersistTaps={'handled'}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'visible', 
    },
    messageRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 4,
        marginRight: 10,
        marginLeft: 60,
    },
    messageBubble: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: 'rgb(16,135,255)',
        borderRadius: 20,
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
});