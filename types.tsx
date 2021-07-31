/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

 export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Contacts: undefined;
  ChatRoom: undefined;
};

export type MainTabParamList = {
  CAMERA: undefined;
  CHATS: undefined;
  STATUS: undefined;
  CALLS: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type Message = {
  id: String;
  content: String;
  createdAt: String;
  user: User;
}

export type User = {
  id: String;
  name: String;
  imageUri: String;
  status: String;
}

export type ChatRoom = {
  id: String,
  users: User[];
  lastMessage: Message;

}
