export type TranslationRule = {
  patterns: RegExp[];
  translation: string;
};

export const TRANSLATION_RULES: TranslationRule[] = [
  {
    patterns: [/not looking for anything serious/i, /keep things casual/i, /no labels/i],
    translation:
      'I want intimacy and attention without accountability, consistency, or emotional labor.',
  },
  {
    patterns: [/you'?re overthinking/i, /reading too much into/i, /making a big deal/i],
    translation:
      "I don't want to address what you brought up, so I'm framing your valid concern as irrational.",
  },
  {
    patterns: [/she'?s just a friend/i, /he'?s just a friend/i, /we'?re just friends/i],
    translation:
      "There's history, tension, or potential I'm not fully disclosing.",
  },
  {
    patterns: [/bad at texting/i, /sorry i'?m a bad texter/i, /not a phone person/i],
    translation:
      "I have time for my phone — you're just not a priority right now.",
  },
  {
    patterns: [/hang out sometime/i, /we should link up/i, /let'?s grab drinks/i],
    translation:
      'I have zero intention of making concrete plans unless you chase me for them.',
  },
  {
    patterns: [/need (some )?space/i, /need time to (myself|think)/i, /going through a lot/i],
    translation:
      'I want distance without losing access to you, or I want to explore other options guilt-free.',
  },
  {
    patterns: [/too good for me/i, /you deserve better/i, /i'?m not ready/i],
    translation:
      "I'm about to disappoint you and want a built-in excuse so it doesn't look like my fault.",
  },
  {
    patterns: [/it'?s not you,? it'?s me/i],
    translation:
      "It is you, but I don't want to have that conversation.",
  },
  {
    patterns: [/was just busy/i, /work has been crazy/i, /lot going on/i],
    translation:
      'I had time for other things — just not for responding to you in a timely way.',
  },
  {
    patterns: [/\bidk\b/i, /i don'?t know/i, /not sure yet/i, /we'?ll see/i],
    translation:
      'I know — I just don\'t want to commit to an answer that might inconvenience me.',
  },
  {
    patterns: [/my ex was crazy/i, /my ex is psycho/i, /all my exes are crazy/i],
    translation:
      'My ex had normal reactions to my behavior, and I\'m not taking accountability.',
  },
  {
    patterns: [/don'?t do drama/i, /hate drama/i, /no drama/i],
    translation:
      "I don't handle being held accountable and I call that 'drama.'",
  },
  {
    patterns: [/sorry you feel that way/i, /if you feel that way/i],
    translation:
      "I'm not actually sorry — I'm dismissing your feelings while sounding polite.",
  },
  {
    patterns: [/you'?re being (too )?emotional/i, /calm down/i, /relax/i, /why are you mad/i],
    translation:
      'Your reaction is inconvenient for me, so I\'m making you the problem instead of my behavior.',
  },
  {
    patterns: [/just being honest/i, /brutally honest/i, /telling it like it is/i],
    translation:
      "I'm about to say something rude and I want credit for 'honesty' instead of basic respect.",
  },
  {
    patterns: [/not like other guys/i, /i'?m different/i, /nice guy/i],
    translation:
      "I want credit for baseline decency without actually proving it through actions.",
  },
  {
    patterns: [/where is this going/i, /what are we/i, /define (the )?relationship/i],
    translation:
      "I'm feeling insecure and want you to do the emotional labor of defining us so I don't have to risk rejection.",
  },
  {
    patterns: [/i didn'?t mean it like that/i, /that'?s not what i meant/i, /you took it the wrong way/i],
    translation:
      'I meant it exactly like that — I just don\'t like the consequences of you hearing it clearly.',
  },
  {
    patterns: [/trust me/i, /you can trust me/i, /i would never/i],
    translation:
      "You probably shouldn't — I'm asking for trust instead of earning it.",
  },
  {
    patterns: [/it was a joke/i, /can'?t you take a joke/i, /lighten up/i],
    translation:
      'I said something hurtful and I want you to accept it without me apologizing.',
  },
  {
    patterns: [/i miss you/i, /thinking about you/i, /been thinking about us/i],
    translation:
      "I'm lonely or bored — not necessarily willing to change the behavior that caused the distance.",
  },
  {
    patterns: [/u up\??/i, /wyd/i, /you awake\??/i, /come over/i],
    translation:
      "I'm reaching out late with low effort because I want convenience, not a real conversation.",
  },
  {
    patterns: [/i'?m fine/i, /nothing'?s wrong/i, /i'?m good/i],
    translation:
      "Something is wrong, but I expect you to guess what's bothering me instead of me using my words.",
  },
  {
    patterns: [/let'?s see where it goes/i, /no pressure/i, /go with the flow/i],
    translation:
      'I want benefits now and decisions never — especially not ones that require commitment from me.',
  },
  {
    patterns: [/my mom would love you/i, /you should meet my friends/i, /you'?re wife material/i],
    translation:
      "I'm love-bombing early to accelerate intimacy before I've proven I'm consistent or trustworthy.",
  },
  {
    patterns: [/i'?m not mad/i, /i'?m not upset/i],
    translation:
      "I'm mad. I'm just going to punish you with silence until you apologize for something.",
  },
  {
    patterns: [/i don'?t want to fight/i, /can we not argue/i],
    translation:
      "I don't want to resolve this — I want you to drop it so I don't have to change.",
  },
  {
    patterns: [/you always/i, /you never/i],
    translation:
      "I'm generalizing because I'm frustrated and want to win the argument, not solve the problem.",
  },
  {
    patterns: [/i'?m not like that/i, /that'?s not who i am/i],
    translation:
      'That is exactly who I am in this moment — I just don\'t want to be seen that way.',
  },
  {
    patterns: [/no offense but/i, /don'?t take this the wrong way/i],
    translation:
      "I'm about to say something offensive and I want immunity from your reaction.",
  },
];

export const EXAMPLE_PHRASES = [
  "I'm not looking for anything serious",
  "You're overthinking it",
  "She's just a friend",
  "I'm bad at texting",
  "Let's hang out sometime",
  "I need space",
  "My ex was crazy",
  "Sorry you feel that way",
  "u up?",
  "I'm fine",
];

export const FALLBACK_TRANSLATIONS = [
  "I said something vague so I can deny intent later if this goes badly.",
  "I'm communicating in subtext and hoping you'll do the emotional labor of decoding me.",
  "This sounds neutral on the surface, but the subtext probably isn't working in your favor.",
  "I want the outcome that benefits me while sounding reasonable — read between the lines.",
];
