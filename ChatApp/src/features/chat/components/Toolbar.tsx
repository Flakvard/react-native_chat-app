import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


interface ToolbarProps {
    isFocused: boolean;
    onChangeFocus: (isFocused: boolean) => void;
    onSubmit: (text: string) => void;
    onPressCamera: () => void;
  }

interface ToolbarButtonProps {
    title: string;
    onPress: () => void;
  }

const ToolbarButton: React.FC<ToolbarButtonProps> = ({ title, onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.button}>{title}</Text>
    </TouchableOpacity>
  );



const Toolbar: React.FC<ToolbarProps> = ({
    isFocused,
    onChangeFocus,
    onSubmit,
    onPressCamera,
  }) => {

    const [text, setText] = useState<string>('');
    const inputRef = useRef<TextInput>(null);

    const handleChangeText = (inputText: string) => {
        setText(inputText);
    };

    const handleSubmitEditing = (event: any) => {
        //const text = inputRef.current?.context || '';  // Access value from ref
        const text = event.nativeEvent.text || '';
        if (!text) return;
        onSubmit(text as string);
        setText('');
    };

    const handleFocus = () => {
        onChangeFocus(true);
    };

    const handleBlur = () => {
        onChangeFocus(false);
    };

    useEffect(() => {
        if (isFocused) {
        inputRef.current?.focus();
        } else {
        inputRef.current?.blur();
        }
    }, [isFocused]);


    return (
    <View style={styles.toolbar}>
        {/* Use emojis for icons instead! */}
        {/* Other UI components */}
        <ToolbarButton title={'📷'} onPress={onPressCamera} />
        <View style={styles.inputContainer}>
        <TextInput
            value={text}
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Type something!"
            blurOnSubmit={false}
            ref={inputRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={newText => handleChangeText(newText) }
            onSubmitEditing={handleSubmitEditing}
            editable={true}
            returnKeyType='send'
        />
        </View>
    </View>
    );
};

export default Toolbar

const styles = StyleSheet.create({
    toolbar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        paddingLeft: 16,
        backgroundColor: 'white',
    },
    button: {
        top: -2,
        marginRight: 12,
        fontSize: 20,
        color: 'grey',
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.04)',
        borderRadius: 16,
        paddingVertical: 4,
        paddingHorizontal: 12,
        backgroundColor: 'rgba(0,0,0,0.02)',
    },
    input: {
        flex: 1,
        fontSize: 18,
    },
})