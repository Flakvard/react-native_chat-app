export interface MessageShape {
    id: number;
    type: 'textCre' | 'textRec' | 'imageCre'| 'imageRec';
    text?: string;
    uri?: string;
}


// TODO: Firebase id
let messageId = 0;

function getNextId() {
    messageId += 1;
    return messageId;
}

export function createTextMessage(text: string): MessageShape {
    return {
        type: 'textCre',
        id: getNextId(),
        text,
    };
}

export function receiveTextMessage(text: string): MessageShape {
    return {
        type: 'textRec', // I corrected the typo from 'textReq' to 'textRec'
        id: getNextId(),
        text,
    };
}

export function createImageMessage(uri: string): MessageShape {
    return {
        type: 'imageCre',
        id: getNextId(),
        uri,
    };
}

export function receiveImageMessage(uri: string): MessageShape {
    return {
        type: 'imageRec',
        id: getNextId(),
        uri,
    };
}