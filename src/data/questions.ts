export type VibeType = "Brainy" | "Hype" | "Chill" | "Chaotic";

export interface Question {
  question: string;
  options: {
    text: string;
    vibe: VibeType;
  }[];
}

export const questions: Question[] = [
  {
    question: "What’s your ideal Friday night?",
    options: [
      { text: "📚 Reading a book", vibe: "Brainy" },
      { text: "🎉 House party", vibe: "Hype" },
      { text: "🌌 Stargazing", vibe: "Chill" },
      { text: "📞 Making prank calls", vibe: "Chaotic" },
    ],
  },
  {
    question: "Pick a drink:",
    options: [
      { text: "🍵 Herbal tea", vibe: "Chill" },
      { text: "☕ Espresso shot", vibe: "Brainy" },
      { text: "🐂 Red Bull", vibe: "Hype" },
      { text: "🍸 Mystery cocktail", vibe: "Chaotic" },
    ],
  },
  {
    question: "Your group project role?",
    options: [
      { text: "📋 The planner", vibe: "Brainy" },
      { text: "💃 The hype person", vibe: "Hype" },
      { text: "🧘 The calming presence", vibe: "Chill" },
      { text: "🃏 The wildcard", vibe: "Chaotic" },
    ],
  },
  {
    question: "What’s your dream vacation?",
    options: [
      { text: "🏛️ Museum tour in Europe", vibe: "Brainy" },
      { text: "🎢 Amusement park adventure", vibe: "Hype" },
      { text: "🏝️ Beach resort and nap", vibe: "Chill" },
      { text: "🌪️ Backpacking with no plan", vibe: "Chaotic" },
    ],
  },
  {
    question: "Your fashion style?",
    options: [
      { text: "👓 Clean and classic", vibe: "Brainy" },
      { text: "🧢 Bold and bright", vibe: "Hype" },
      { text: "🧦 Cozy and comfy", vibe: "Chill" },
      { text: "🧥 Whatever’s weirdest", vibe: "Chaotic" },
    ],
  },
  {
    question: "Favorite kind of music?",
    options: [
      { text: "🎻 Classical or lo-fi", vibe: "Brainy" },
      { text: "🎤 Pop or hip-hop", vibe: "Hype" },
      { text: "🌊 Ambient or acoustic", vibe: "Chill" },
      { text: "🧨 Experimental or meme songs", vibe: "Chaotic" },
    ],
  },
  {
    question: "In a group chat, you’re the one who…",
    options: [
      { text: "🧠 Drops facts", vibe: "Brainy" },
      { text: "🔥 Sends fire memes", vibe: "Hype" },
      { text: "💤 Leaves hearts and 'ok'", vibe: "Chill" },
      { text: "🐸 Creates chaos and polls", vibe: "Chaotic" },
    ],
  },
  {
    question: "If your life was a TV show, it’d be…",
    options: [
      { text: "🧪 Science documentary", vibe: "Brainy" },
      { text: "🏆 Reality competition", vibe: "Hype" },
      { text: "📺 Slow-burn slice of life", vibe: "Chill" },
      { text: "🌀 Surreal comedy", vibe: "Chaotic" },
    ],
  },
  {
    question: "When faced with a problem…",
    options: [
      { text: "🔍 Research and analyze", vibe: "Brainy" },
      { text: "🗣️ Talk it out with people", vibe: "Hype" },
      { text: "🍃 Meditate and reflect", vibe: "Chill" },
      { text: "🎲 Wing it", vibe: "Chaotic" },
    ],
  },
  {
    question: "Your ideal pet?",
    options: [
      { text: "🐢 Tortoise", vibe: "Chill" },
      { text: "🐕 Golden Retriever", vibe: "Hype" },
      { text: "🧠 Owl", vibe: "Brainy" },
      { text: "🐍 Snake or something wild", vibe: "Chaotic" },
    ],
  },
];
