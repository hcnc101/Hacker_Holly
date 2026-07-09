import {
  FALLBACK_TRANSLATIONS,
  TRANSLATION_RULES,
} from './data/translations';

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = Math.imul(31, hash) + value.charCodeAt(i);
  }
  return Math.abs(hash);
}

export function translateMaleSpeak(input: string): string {
  const trimmed = input.trim();
  if (!trimmed) {
    return 'Paste something he said and I\'ll translate the subtext.';
  }

  for (const rule of TRANSLATION_RULES) {
    if (rule.patterns.some(pattern => pattern.test(trimmed))) {
      return rule.translation;
    }
  }

  const index = hashString(trimmed.toLowerCase()) % FALLBACK_TRANSLATIONS.length;
  return FALLBACK_TRANSLATIONS[index];
}
