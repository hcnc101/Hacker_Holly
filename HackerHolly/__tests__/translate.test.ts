import {translateMaleSpeak} from '../src/translate';

describe('translateMaleSpeak', () => {
  it('returns a prompt for empty input', () => {
    expect(translateMaleSpeak('')).toBe(
      "Paste something he said and I'll translate the subtext.",
    );
    expect(translateMaleSpeak('   ')).toBe(
      "Paste something he said and I'll translate the subtext.",
    );
  });

  it('translates known phrases', () => {
    expect(translateMaleSpeak("I'm not looking for anything serious")).toContain(
      'accountability',
    );
    expect(translateMaleSpeak("You're overthinking it")).toContain(
      "don't want to address",
    );
    expect(translateMaleSpeak('u up?')).toContain('convenience');
  });

  it('returns a fallback for unknown phrases', () => {
    const result = translateMaleSpeak('The weather is nice today');
    expect(result.length).toBeGreaterThan(20);
  });

  it('is consistent for the same unknown input', () => {
    const input = 'Something completely random xyz';
    expect(translateMaleSpeak(input)).toBe(translateMaleSpeak(input));
  });
});
