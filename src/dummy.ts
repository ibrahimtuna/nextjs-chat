export type ChatMessage = {
  message: string;
  role: "user" | "assistant";
  createdAt: number;
};
