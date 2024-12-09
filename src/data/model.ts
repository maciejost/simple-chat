export type User = {
  id: string;
  name: string;
  avatar?: string;
};

export type Message = {
  message: string;
  sentBy: User["id"];
  sentAt: Date;
};

export type Chat = {
  id: string;
  participants: User["id"][];
  messages: Message[];
};
