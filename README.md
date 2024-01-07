# Table of Contents

- [Introduction](#introduction)
    - [What is this project about?](#what-is-this-project-about)
    - [Simple gif preview of app?](simple-gif-preview-of-app)
- [Getting started](#getting-started)
- [Implementation](#implementation)
- [Making a plan](#making-a-plan)
    - [1 note](#1-notes)
    - [2 note](#2-notes)
- [Assignment](#assignment)
    - [1. Splash screen](#1-splash-screen)
    - [2. Login screen](#2-login-screen)
    - [3. Chat rooms](#3-chat-rooms)
    - [4. Open chat room](#4-open-chat-room)
    - [5. Send and receive messages](#5-send-and-receive-messages)
    - [6. Push functionality](#6-push-functionality)
    - [7. Image](#7-image)
- [Aftermath](#aftermath)
    - [Hours committed vs hours completed](#hours-committed-vs-hours-completed)
    - [Completeness of the project - MVP](#completeness-of-the-project-mvp)
- [Appendex](#appendex)
- [Log with comments](#log-with-comments)
- [Log total hours for each day](#log-total-hours-for-each-day)

- [Structure](#app-structure)


# Introduction
This is my first React Native app.
My goal for this app was to explore React Native and get a feel for structuring the UX/UI. 

## What is this project about?
Simple chat application using react native

# Simple gif preview of app
`It is only tested on Android, I do not have a MacBook.`

<img src="https://github.com/Flakvard/react-native_chat-app/blob/master/media/intro.gif" width="25%" height="25%"/>


<img src="https://github.com/Flakvard/react-native_chat-app/blob/master/media/rooms.jpg?raw=true" width="15%"></img> <img src="https://github.com/Flakvard/react-native_chat-app/blob/master/media/myUser.jpg?raw=true" width="15%"></img> <img src="https://github.com/Flakvard/react-native_chat-app/blob/master/media/chat.jpg?raw=true" width="15%"></img> <img src="https://github.com/Flakvard/react-native_chat-app/blob/master/media/contact.jpg?raw=true" width="15%"></img> <img src="https://github.com/Flakvard/react-native_chat-app/blob/master/media/login.jpg?raw=true" width="15%"></img> <img src="https://github.com/Flakvard/react-native_chat-app/blob/master/media/register.jpg?raw=true" width="15%"></img> 

# Getting started 
Clone via bash.
```bash
git clone https://github.com/Flakvard/react-native_chat-app.git && cd react-native_chat-app/ChatApp/ 
```
Intall all packages:
```bash
npm install
```
run Metro .
```bash
npm start
```
open new terminal
run android .
```bash
npm run android
```


# Implementation
The aim was to try an create an flexible, maintainable, and testable system that can adapt to changing requirements over time. 

This was done by:
- Making a plan
- Defining the structure of the project
- Try to hold SOLID principles on all levels to improve modularity and testability.
- Test everything
- Implementing Inversion of Control (IoC) using Dependency Injection (DI) between the components.
- Using Firebase as the backend `(This did not get implemeted)`

I tried my best to hold the YAGNI principles and **not** go by "ifs/maybes".

Because time was very limited at made shortcuts with the backend by using local `static` persistance/state, unfurtently.

# Making a plan
I estimate that this would take me
```
Best case : 67 hours
Expected estimate: 81 hours
Murphy's Law (Worst) : 143 hours
```

> ### 1. notes:
    I have set a minimum of 5 hours a day (e.g. weekend) for this, and delivery on 19-12-2023 (all day), which is my deadline. After that time, I cannot continue working on the assignment.

    This is calculated to 2.42% certainty that I complete all the project on the deadline, and 91.85% certainty that I complete 60% of the project on the deadline.
    It does not look so optimistic, but it is pure guesswork and there are many uncertainties which are difficult to estimate.
    Thus, I also have 2 exams in this period, which does not make it any easier.

calucaltion can be found on the excel spreadsheet.
> ### 2. notes:
    I log everything on the same google sheet `(now a excel spreadsheet)` and it ties in well with my github feature branches.
    If possible, I would like to postpone the deadline to 08-01-2024 due to the following points:

        1. I would like to prioritize the family during the Christmas holidays and New Year's Eve. I'm going to the Faroe Islands on 21 Dec and coming home on 01 Jan
        
        2. Loss of working time approx. 1.5 weeks due to illness. Which will be covered in the first week of January 2024 and maybe over the holidays if I'm really pressed.


# Assignment:
The following tasklist gives a brief overview
- [1. Splash screen](#1-splash-screen)
- [2. Login screen](#2-login-screen)
- [3. Chat rooms](#3-chat-rooms)
- [4. Open chat room](#4-open-chat-room)
- [5. Send and receive messages](#5-send-and-receive-messages)
- [6. Push functionality](#6-push-functionality)
- [7. Image](#7-image)

## 1. Splash screen
- [x] Splash loads while the application is loading up

- [x] When finish next screen should fade in
    - [x] If you are logged in, go to Chat rooms
    - [x] If you are not logged in, go to Login screen
### Comments
I did not add the splash screen to iOS, only on android
`/react-native/react-native_chat-app/ChatApp/android/app/src/main/res`

## 2. Login screen
- [x] Add two sign in methods
    - [] Facebook (added but not implemented on the backend)
    - [] Google (added but not implemented on the backend)
- [x] When signed in, i go to Chat rooms
- [] If error happens, user is shown a dialog
### Comments
I did not focus much on the backend to get auth working.
I felt this was not as important as spending time on than UX/UI.

## 3. Chat rooms
- [x] A list is shown with the name and a short description of each
room
- [ ] Each row have a chevron icon to the right indicating i can
press
- [ ] The list is sorted by newest message
- [ ] I can pull to refresh to reload the list
- [x] Pressing a room takes me to the send and receive screen `in my implementation it takes to you to the contact`
### Comments
This looked more like a contact list than a room. I had mistunderstood the task and I did not have time to fix it or add a new page just for rooms and keep contact list.

## 4. Open chat room
- [ ] A list is shown with the name and a short description of each
room
- [ ] Each row have a chevron icon to the right indicating i can
press
- [ ] The list is sorted by newest message
- [ ] I can pull to refresh to reload the list
- [ ] Pressing a room takes me to the send and receive screen
### Comments
I did not get the time to implement this part... there is a message chat, but no rooms really.

## 5. Send and receive messages
- [x] Last 50 messages is loaded when chat room is opened
- [x] Scroll to load more messages
- [x] When a message is received it is automatically added to the list
- [x] An input field at the bottom of the view should be shown
- [x] When pressed the keyboard opens
- [x] When message entered and user presses “Send” / “Enter”
- [x] message is sent and added to the list
- [x] A message consists of
- [x] Avatar of sender
- [x] Name of sender
- [x] Message date
- [x] Message text

`extra to the assignments`
- [x] Network status (not shown on the video..)
- [x] delete messages
- [x] fullscreen the images sent and received

### Comments
I did not get the time to implement the avatar, name and time/date on each message, unfortently. This would however not be a problem to implement, because it is implemented in the room

This is the part I spent most of my time on.
 
## 6. Push functionality 
- [ ] When i write a message inside a room, then i am asked if i want to have notifications from that room
- [ ] Every time someone writes a message in the room, a push message is sent to me
- [ ] When the user presses a push message, he or she should be taken directly to the room/message (using deep links)
### Comments
I did not get the time to implement this part...

## 7. Image
- [x] I can upload image from camera
- [x] I can upload image from phone gallery
- [x] Image is shown in the chat room in the same flow as messages


# Aftermath

## Hours committed vs hours completed
Log hours where holding up.

![logHour](https://github.com/Flakvard/react-native_chat-app/blob/master/media/logHours.png)


## Completeness of the project MVP
There are 40 assignment and 14 where not completeted. These are not weighted evenly, but would be I completed about 65% of the project - which holds up to the [91.85% calculated](#1-notes) in the beginning of the project.

I am happy with the results.

I had comitted 89 hours to the project and I did 101,3 hours total.

# Appendex

# Log with comments

| Hours  sum|	Date|	Start  clock|	End clock|	Hours	|Log|
|-----------|-------|---------------|------------|----------|---|
| 6,0  |	03/12/2023|	10:00|	16:00|	6,0|	Estimate the project timeline and objectives|
| 11,1 |	04/12/2023|	06:30|	11:37|	5,1|	Trying to get React-Native to work on Linux|
| 13,5 |	04/12/2023|	10:38|	12:30|	2,4|	Merge pull request #1 from Flakvard/init_react-native|
| 13,8 |	04/12/2023|	13:40|	14:09|	0,3|	Getting the app structure and layout done|
| 14,8 |	04/12/2023|	15:15|	16:15|	1,0|	Merge pull request #2 from Flakvard/app-structure|
| 19,5 |	04/12/2023|	20:18|	24:00|	4,7|	Theme and standard UI componants|
| 24,2 |	05/12/2023|	12:20|	16:10|	4,7|	Theme and standard UI componants|
| 24,2 |	06/12/2023|	00:00|	00:00|	0,0|	|
| 24,2 |	07/12/2023|	00:00|	00:00|	0,0|	|
| 24,2 |	08/12/2023|	00:00|	00:00|	0,0|	|
| 25,5 |	09/12/2023|	22:00|	23:20|	1,3|	Colors to Theme|
| 27,5 |	10/12/2023|	10:00|	12:00|	2,0|	Gimp (image editor) icon and logo|
| 30,6 |	11/12/2023|	12:10|	15:14|	3,1|	Icon og splash screen|
| 31,3 |	11/12/2023|	22:00|	22:45|	0,8|	Merge pull request #3 from Flakvard/UI-Components-lib|
| 33,5 |	12/12/2023|	00:00|	02:08|	2,1|	Navigation root and auth feature|
| 34,0 |	12/12/2023|	12:00|	12:33|	0,6|	Merge pull request #4 from Flakvard/navigation|
| 36,2 |	12/12/2023|	12:50|	14:45|	2,2|	State Management with Redux|
| 36,2 |	13/12/2023|	00:00|	00:00|	0,0|	|
| 36,2 |	14/12/2023|	00:00|	00:00|	0,0|	|
| 36,2 |	15/12/2023|	00:00|	00:00|	0,0|	|
| 36,2 |	16/12/2023|	00:00|	00:00|	0,0|	|
| 38,3 |	17/12/2023|	22:26|	24:30|	2,1|	State Management with Redux|
| 39,7 |	18/12/2023|	23:30|	24:54|	1,4|	Working State Management with redux |
| 41,7 |	19/12/2023|	00:55|	02:14|	2,1|	Message chat UI & structure + status|
| 44,5 |	19/12/2023|	21:16|	23:10|	2,7|	Message chat UI and structure, create img + msg functions |
| 46,6 |	20/12/2023|	00:50|	02:57|	2,1|	Message chat UI, toolbar +  create img + msg functions and img fullscreen|
| 46,6 |	21/12/2023|	00:00|	00:00|	0,0|	|
| 46,6 |	22/12/2023|	00:00|	00:00|	0,0|	|
| 46,6 |	23/12/2023|	00:00|	00:00|	0,0|	|
| 46,6 |	24/12/2023|	00:00|	00:00|	0,0|	|
| 46,6 |	25/12/2023|	00:00|	00:00|	0,0|	|
| 46,6 |	26/12/2023|	00:00|	00:00|	0,0|	|
| 48,1 |	27/12/2023|	22:00|	23:30|	1,5|	Message camera upload Grid|
| 48,8 |	28/12/2023|	23:18|	24:00|	0,7|	Message camera upload Grid|
| 49,0 |	29/12/2023|	23:50|	24:00|	0,2|	Message camera upload Grid|
| 50,3 |	30/12/2023|	00:00|	01:19|	1,3|	Message camera upload Grid|
| 50,5 |	30/12/2023|	01:20|	01:33|	0,2|	Google sheet clean up and reorganisation|
| 52,5 |	31/12/2023|	22:57|	24:00|	2,1|	|
| 52,5 |	01/01/2024|	00:00|	00:00|	0,0|	|
| 53,5 |	02/01/2024|	12:00|	13:00|	1,0|	Access Camera images Android: rn-fetch-blob package|
| 58,5 |	03/01/2024|	10:00|	15:00|	5,0|	Access Camera images Android: image-picker & rn-fetch-blob package|
| 61,3 |	03/01/2024|	18:10|	20:55|	2,8|	Access Camera images Android camera-rool package (https://github.com/react-native-cameraroll/react-native-cameraroll)|
| 63,6 |	04/01/2024|	08:30|	10:47|	2,3|	Access Camera images Android camera-rool package working|
| 64,7 |	04/01/2024|	10:48|	11:54|	1,1|	Camera images pagenation|
| 64,8 |	04/01/2024|	11:54|	12:30|	0,1|	Camera images sending images|
| 68,3 |	04/01/2024|	12:30|	15:00|	3,5|	Messaging Container, layout and Keyboard state|
| 75,5 |	05/01/2024|	08:45|	15:30|	7,3|	Messaging Container, layout and Keyboard state|
| 78,0 |	05/01/2024|	13:00|	15:30|	2,5|	Messaging Container animation|
| 79,4 |	05/01/2024|	21:30|	22:53|	1,4|	Messaging Container animation removed/discarded|
| 80,2 |	05/01/2024|	23:00|	23:45|	0,8|	Fix message sending via keyboard|
| 80,4 |	05/01/2024|	23:45|	24:00|	0,3|	Fix sending receiving message styling|
| 81,7 |	06/01/2024|	00:00|	01:15|	1,3|	Fix sending receiving message styling|
| 82,4 |	06/01/2024|	01:15|	02:07|	0,8|	Seed 50 messages and scroll to load more messages|
| 83,3 |	06/01/2024|	02:07|	02:58|	0,9|	Merge pull request #5 from Flakvard/Message-UI|
| 84,3 |	06/01/2024|	02:58|	03:59|	1,0|	RoomList and RoomListItem with dummy contacts via API|
| 86,3 |	06/01/2024|	14:00|	16:00|	2,0|	RoomList and RoomListItem with dummy contacts via API|
| 86,6 |	06/01/2024|	22:42|	23:36|	0,3|	Merge pull request #6 from Flakvard/ChatRoom-UI|
| 87,0 |	06/01/2024|	23:36|	24:00|	0,4|	Profile-UI, ContactThumbnail, DetailListItem + fixed navigation|
| 88,6 |	07/01/2024|	00:00|	01:36|	1,6|	Merge pull request #7 from Flakvard/Profile-UI|
| 91,0 |	07/01/2024|	01:36|	03:00|	2,4|	User UI  and Options|
| 95,0 |	07/01/2024|	03:00|	07:00|	4,0|	Rewrite navigation and stack, Theme applied everywhere|
| 97,4 |	07/01/2024|	10:03|	12:26|	2,4|	Merge pull request #8 from Flakvard/User-UI|
| 98,5 |	07/01/2024|	12:03|	13:13|	1,2|	Clean up and docs|
| 101,3 |	07/01/2024|	13:13|	15:00|	2,8|	Merge pull request #9 from Flakvard/Clean-up|
| 101,3 |	08/01/2024|	00:00|	00:00|	0,0|	|


# Log total hours for each day

| Burndown|	Burndown estimate|	Burndown	|Total hours each day|	Comitted|	Commit hours|	Completed hours|
|---------|------------------|--------------|--------------------|----------|---------------|------------------|
| 03/12/2023|	81,00|	75,0|	6,0|	4|	4|	6,0|
| 04/12/2023|	77,14|	61,5|	13,5|	5|	9|	19,5|
| 05/12/2023|	73,29|	56,8|	4,7|	5|	14|	24,2|
| 06/12/2023|	69,43|	56,8|	0,0|	5|	19|	24,2|
| 07/12/2023|	65,57|	56,8|	0,0|	5|	24|	24,2|
| 08/12/2023|	61,71|	56,8|	0,0|	5|	29|	24,2|
| 09/12/2023|	61,71|	55,5|	1,3|	0|	29|	25,5|
| 10/12/2023|	61,71|	53,5|	2,0|	0|	29|	27,5|
| 11/12/2023|	57,86|	49,7|	3,8|	5|	34|	31,3|
| 12/12/2023|	54,00|	44,8|	4,9|	5|	39|	36,2|
| 13/12/2023|	50,14|	44,8|	0,0|	5|	44|	36,2|
| 14/12/2023|	46,29|	44,8|	0,0|	5|	49|	36,2|
| 15/12/2023|	42,43|	44,8|	0,0|	5|	54|	36,2|
| 16/12/2023|	42,43|	44,8|	0,0|	0|	54|	36,2|
| 17/12/2023|	42,43|	42,8|	2,1|	0|	54|	38,3|
| 18/12/2023|	38,57|	41,4|	1,4|	5|	59|	39,7|
| 19/12/2023|	34,71|	36,5|	4,8|	5|	64|	44,5|
| 20/12/2023|	30,86|	34,4|	2,1|	5|	69|	46,6|
| 21/12/2023|	30,86|	34,4|	0,0|	0|	69|	46,6|
| 22/12/2023|	30,86|	34,4|	0,0|	0|	69|	46,6|
| 23/12/2023|	30,86|	34,4|	0,0|	0|	69|	46,6|
| 24/12/2023|	30,86|	34,4|	0,0|	0|	69|	46,6|
| 25/12/2023|	30,86|	34,4|	0,0|	0|	69|	46,6|
| 26/12/2023|	30,86|	34,4|	0,0|	0|	69|	46,6|
| 27/12/2023|	27,00|	32,9|	1,5|	0|	69|	48,1|
| 28/12/2023|	23,14|	32,2|	0,7|	0|	69|	48,8|
| 29/12/2023|	19,29|	32,1|	0,2|	0|	69|	49,0|
| 30/12/2023|	19,29|	30,5|	1,5|	0|	69|	50,5|
| 31/12/2023|	19,29|	28,5|	2,1|	0|	69|	52,5|
| 01/01/2024|	19,29|	28,5|	0,0|	0|	69|	52,5|
| 02/01/2024|	15,43|	27,5|	1,0|	5|	74|	53,5|
| 03/01/2024|	11,57|	19,7|	7,8|	5|	79|	61,3|
| 04/01/2024|	7,71|	12,7|	7,0|	5|	84|	68,3|
| 05/01/2024|	3,86|	0,6|	12,1|	5|	89|	80,4|
| 06/01/2024|	3,86|	-6,0|	6,6|	0|	89|	87,0|
| 07/01/2024|	3,86|	-20,3|	14,3|	0|	89|	101,3|
| 08/01/2024|	0,00|	-20,3|	0,0|	0|	89|	101,3|

# App Structure
```bash
├── App.tsx
├── assets
│   ├── fonts
│   ├── icons
│   └── images
├── common
│   ├── components  # Standard componants used across the app
│   │   ├── Block.tsx   
│   │   ├── Button.tsx
│   │   ├── ContactThumbnail.tsx
│   │   ├── DetailListItem.tsx
│   │   ├── index.tsx
│   │   ├── Input.tsx
│   │   └── Text.tsx
│   ├── constants
│   │   ├── index.ts
│   │   └── theme.ts  # Google/Apple standard UX/UI design.
│   ├── hooks
│   │   └── useTheme.tsx
│   ├── store.ts         # local presistance/state
│   └── utils
├── features
│   ├── auth
│   │   ├── AuthNavigator.tsx
│   │   └── components
│   │       ├── index.tsx
│   │       ├── Login.tsx
│   │       ├── Options.tsx
│   │       ├── Register.tsx
│   │       ├── Splash.tsx
│   │       └── User.tsx
│   ├── chat
│   │   ├── ChatNavigator.tsx
│   │   ├── components
│   │   │   ├── Grid.tsx
│   │   │   ├── ImageGrid.tsx
│   │   │   ├── index.tsx
│   │   │   ├── KeyboardState.tsx
│   │   │   ├── MeasureLayout.tsx
│   │   │   ├── MessageList.tsx
│   │   │   ├── Message.tsx
│   │   │   ├── MessagingContainer.tsx
│   │   │   ├── Status.tsx
│   │   │   └── Toolbar.tsx
│   │   └── utils
│   │       ├── MessageUtils.ts
│   │       └── types.ts
│   └── room
│       ├── components
│       │   ├── index.tsx
│       │   ├── Profile.tsx
│       │   ├── RoomListItem.tsx
│       │   └── RoomList.tsx
│       └── RoomNavigator.tsx
├── navigation
│   └── AppNavigator.tsx    # Main Stack navigator
└── services
    └── api
        └── api.ts # Dummy data give the app a simple touch 
```bash
