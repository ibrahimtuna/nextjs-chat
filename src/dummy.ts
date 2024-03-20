export const MESSAGES: Message[] = [
  {
    assistant: "Minicity",
    photoUrl: "/minicity.png",
    lastMessage: "Merhaba size nasıl yardımcı olabilirim ?",
  },
  {
    assistant: "Vatkalı",
    photoUrl: "/vatkali.png",
    lastMessage: "Merhaba size nasıl yardımcı olabilirim ?",
  },
];

export const CHAT: ChatMessage[] = [
  {
    message: "Merhaba Vatkalı Kadını, sana nasıl yardımcı olabilirim?",
    createdAt: new Date().getTime(),
    role: "assistant",
  },
  {
    message: "lore",
    createdAt: new Date().getTime(),
    role: "user",
  },
  {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet assumenda cupiditate debitis doloremque dolorum eum, hic impedit inventore minima nobis pariatur provident sequi tempora veniam. Asperiores nihil possimus praesentium?",
    createdAt: new Date().getTime(),
    role: "user",
  },
  {
    message: "Merhaba Vatkalı Kadını, sana nasıl yardımcı olabilirim?",
    createdAt: new Date().getTime(),
    role: "assistant",
  },
  {
    message: "Merhaba Vatkalı Kadını, sana nasıl yardımcı olabilirim?",
    createdAt: new Date().getTime(),
    role: "assistant",
  },
  {
    message: "lore",
    createdAt: new Date().getTime(),
    role: "user",
  },
  {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet assumenda cupiditate debitis doloremque dolorum eum, hic impedit inventore minima nobis pariatur provident sequi tempora veniam. Asperiores nihil possimus praesentium?",
    createdAt: new Date().getTime(),
    role: "user",
  },
  {
    message: "Merhaba Vatkalı Kadını, sana nasıl yardımcı olabilirim?",
    createdAt: new Date().getTime(),
    role: "assistant",
  },
  {
    message: "Merhaba Vatkalı Kadını, sana nasıl yardımcı olabilirim?",
    createdAt: new Date().getTime(),
    role: "assistant",
  },
  {
    message: "lore",
    createdAt: new Date().getTime(),
    role: "user",
  },
  {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet assumenda cupiditate debitis doloremque dolorum eum, hic impedit inventore minima nobis pariatur provident sequi tempora veniam. Asperiores nihil possimus praesentium?",
    createdAt: new Date().getTime(),
    role: "user",
  },
  {
    message: "Merhaba Vatkalı Kadını, sana nasıl yardımcı olabilirim?",
    createdAt: new Date().getTime(),
    role: "assistant",
  },
  {
    message: "Merhaba Vatkalı Kadını, sana nasıl yardımcı olabilirim?",
    createdAt: new Date().getTime(),
    role: "assistant",
  },
  {
    message: "lore",
    createdAt: new Date().getTime(),
    role: "user",
  },
  {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet assumenda cupiditate debitis doloremque dolorum eum, hic impedit inventore minima nobis pariatur provident sequi tempora veniam. Asperiores nihil possimus praesentium?",
    createdAt: new Date().getTime(),
    role: "user",
  },
  {
    message: "Merhaba Vatkalı Kadını, sana nasıl yardımcı olabilirim?",
    createdAt: new Date().getTime(),
    role: "assistant",
  },
];

export type Message = {
  assistant: string;
  photoUrl: string;
  lastMessage: string;
};

export type ChatMessage = {
  message: string;
  role: "user" | "assistant";
  createdAt: number;
};
