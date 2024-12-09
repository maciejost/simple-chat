import { Chat, User } from "./model";

// The chats and timestamps are LLM-generated, seemed like the correct place to cut corners when developing the assignment.

export const chatFactory = (sender: User, receiver: User): Chat => {
  const now = new Date();
  const messages = [
    {
      message: `Hey ${receiver.name}, how are you?`,
      sentBy: sender.id,
      sentAt: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000),
    },
    {
      message: `Hi ${sender.name}! I'm good, how about you?`,
      sentBy: receiver.id,
      // I would never write a calculated date like this btw, the readability here is horrible 👇
      sentAt: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000 + 5 * 60 * 1000),
    },
    {
      message: `Doing well, thanks! Did you finish the project?`,
      sentBy: sender.id,
      sentAt: new Date(
        now.getTime() - 2 * 24 * 60 * 60 * 1000 + 10 * 60 * 1000,
      ),
    },
    {
      message: `Almost there, just need to finalize the report.`,
      sentBy: receiver.id,
      sentAt: new Date(
        now.getTime() - 2 * 24 * 60 * 60 * 1000 + 15 * 60 * 1000,
      ),
    },
    {
      message: `Great! Let me know if you need any help.`,
      sentBy: sender.id,
      sentAt: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000),
    },
    {
      message: `Will do. Thanks for offering!`,
      sentBy: receiver.id,
      sentAt: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000 + 5 * 60 * 1000),
    },
    {
      message: `No problem. What are your plans for the weekend?`,
      sentBy: sender.id,
      sentAt: new Date(
        now.getTime() - 1 * 24 * 60 * 60 * 1000 + 30 * 60 * 1000,
      ),
    },
    {
      message: `Not sure yet. Maybe hiking if the weather's good.`,
      sentBy: receiver.id,
      sentAt: new Date(
        now.getTime() - 1 * 24 * 60 * 60 * 1000 + 35 * 60 * 1000,
      ),
    },
    {
      message: `Sounds fun! I might join if you don't mind.`,
      sentBy: sender.id,
      sentAt: new Date(
        now.getTime() - 1 * 24 * 60 * 60 * 1000 + 40 * 60 * 1000,
      ),
    },
    {
      message: `Of course! The more, the merrier.`,
      sentBy: receiver.id,
      sentAt: new Date(
        now.getTime() - 1 * 24 * 60 * 60 * 1000 + 45 * 60 * 1000,
      ),
    },
    {
      message: `Cool! Let’s check the weather forecast tomorrow.`,
      sentBy: sender.id,
      sentAt: new Date(
        now.getTime() - 1 * 24 * 60 * 60 * 1000 + 50 * 60 * 1000,
      ),
    },
    {
      message: `Good idea. I’ll text you in the morning.`,
      sentBy: receiver.id,
      sentAt: new Date(
        now.getTime() - 1 * 24 * 60 * 60 * 1000 + 55 * 60 * 1000,
      ),
    },
    {
      message: `Perfect. Have a good night, ${receiver.name}.`,
      sentBy: sender.id,
      sentAt: new Date(
        now.getTime() - 1 * 24 * 60 * 60 * 1000 + 60 * 60 * 1000,
      ),
    },
    {
      message: `Good night, ${sender.name}!`,
      sentBy: receiver.id,
      sentAt: new Date(
        now.getTime() - 1 * 24 * 60 * 60 * 1000 + 65 * 60 * 1000,
      ),
    },
    {
      message: `Morning, ${receiver.name}! Looks like sunny skies today!`,
      sentBy: sender.id,
      sentAt: new Date(now.getTime() - 12 * 60 * 60 * 1000),
    },
    {
      message: `Hey ${sender.name}! Awesome, hiking it is then.`,
      sentBy: receiver.id,
      sentAt: new Date(now.getTime() - 12 * 60 * 60 * 1000 + 5 * 60 * 1000),
    },
    {
      message: `What time do you want to start?`,
      sentBy: sender.id,
      sentAt: new Date(now.getTime() - 12 * 60 * 60 * 1000 + 10 * 60 * 1000),
    },
    {
      message: `How about 9 AM?`,
      sentBy: receiver.id,
      sentAt: new Date(now.getTime() - 12 * 60 * 60 * 1000 + 15 * 60 * 1000),
    },
    {
      message: `Works for me. Where should we meet?`,
      sentBy: sender.id,
      sentAt: new Date(now.getTime() - 12 * 60 * 60 * 1000 + 20 * 60 * 1000),
    },
    {
      message: `Let’s meet at the park entrance.`,
      sentBy: receiver.id,
      sentAt: new Date(now.getTime() - 12 * 60 * 60 * 1000 + 25 * 60 * 1000),
    },
    {
      message: `Got it. See you then!`,
      sentBy: sender.id,
      sentAt: new Date(now.getTime() - 12 * 60 * 60 * 1000 + 30 * 60 * 1000),
    },
    {
      message: `See you soon!`,
      sentBy: receiver.id,
      sentAt: new Date(now.getTime() - 12 * 60 * 60 * 1000 + 35 * 60 * 1000),
    },
    {
      message: `Hey, I’m at the entrance. Where are you?`,
      sentBy: sender.id,
      sentAt: new Date(now.getTime() - 30 * 60 * 1000),
    },
    {
      message: `Just parking my car. Be there in 5 mins.`,
      sentBy: receiver.id,
      sentAt: new Date(now.getTime() - 25 * 60 * 1000),
    },
    {
      message: `Cool. I’ll wait by the bench.`,
      sentBy: sender.id,
      sentAt: new Date(now.getTime() - 20 * 60 * 1000),
    },
    {
      message: `Thanks. Heading your way now.`,
      sentBy: receiver.id,
      sentAt: new Date(now.getTime() - 15 * 60 * 1000),
    },
    {
      message: `No rush. Got plenty of snacks!`,
      sentBy: sender.id,
      sentAt: new Date(now.getTime() - 10 * 60 * 1000),
    },
    {
      message: `Haha, nice! Let’s get moving once I arrive.`,
      sentBy: receiver.id,
      sentAt: new Date(now.getTime() - 5 * 60 * 1000),
    },
    {
      message: `Sure thing. It’s a beautiful day for hiking.`,
      sentBy: sender.id,
      sentAt: new Date(),
    },
    {
      message: `Couldn’t agree more, ${sender.name}! Let’s make the most of it!`,
      sentBy: receiver.id,
      sentAt: new Date(),
    },
  ];

  return {
    id: `chat-${sender.id}-${receiver.id}`,
    participants: [sender.id, receiver.id],
    messages,
  };
};
