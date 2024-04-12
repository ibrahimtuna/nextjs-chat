export interface User {
  name: {
    title: string;
    first: string;
    last: string;
  };
  phone: number;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  id: string;
}


export interface Message {
  createdAt: number;
  content: string;
  role: "user" | "assistant";
  userId: string;
}
