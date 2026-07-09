/**
 * He Said What? — Male-speak to plain English translator
 */

import React, {useCallback, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';
import {EXAMPLE_PHRASES} from './src/data/translations';
import {translateMaleSpeak} from './src/translate';

const COLORS = {
  background: '#FFF5F7',
  surface: '#FFFFFF',
  primary: '#C2185B',
  primaryDark: '#880E4F',
  accent: '#F8BBD0',
  text: '#3E2723',
  muted: '#8D6E63',
  border: '#F3D0DA',
  outputBg: '#FCE4EC',
};

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const insets = useSafeAreaInsets();
  const [input, setInput] = useState('');
  const [translation, setTranslation] = useState('');

  const handleTranslate = useCallback(() => {
    setTranslation(translateMaleSpeak(input));
  }, [input]);

  const handleExample = useCallback((phrase: string) => {
    setInput(phrase);
    setTranslation(translateMaleSpeak(phrase));
  }, []);

  const handleClear = useCallback(() => {
    setInput('');
    setTranslation('');
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          {paddingTop: insets.top + 16, paddingBottom: insets.bottom + 24},
        ]}
        keyboardShouldPersistTaps="handled">
        <View style={styles.header}>
          <Text style={styles.emoji}>🔄</Text>
          <Text style={styles.title}>He Said What?</Text>
          <Text style={styles.subtitle}>
            Paste what he said. Get the translation he won't give you.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>What he said</Text>
          <TextInput
            style={styles.input}
            placeholder={`"I'm not looking for anything serious"`}
            placeholderTextColor={COLORS.muted}
            value={input}
            onChangeText={setInput}
            multiline
            textAlignVertical="top"
            accessibilityLabel="What he said input"
          />
          <View style={styles.actions}>
            <Pressable
              style={({pressed}) => [
                styles.buttonSecondary,
                pressed && styles.buttonPressed,
              ]}
              onPress={handleClear}
              accessibilityRole="button"
              accessibilityLabel="Clear">
              <Text style={styles.buttonSecondaryText}>Clear</Text>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                styles.buttonPrimary,
                pressed && styles.buttonPressed,
              ]}
              onPress={handleTranslate}
              accessibilityRole="button"
              accessibilityLabel="Translate">
              <Text style={styles.buttonPrimaryText}>Translate ✨</Text>
            </Pressable>
          </View>
        </View>

        {translation ? (
          <View style={[styles.card, styles.outputCard]}>
            <Text style={styles.label}>What he actually means</Text>
            <Text style={styles.translation}>{translation}</Text>
          </View>
        ) : null}

        <View style={styles.examplesSection}>
          <Text style={styles.examplesTitle}>Try an example</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.examplesRow}>
            {EXAMPLE_PHRASES.map(phrase => (
              <Pressable
                key={phrase}
                style={({pressed}) => [
                  styles.chip,
                  pressed && styles.chipPressed,
                ]}
                onPress={() => handleExample(phrase)}
                accessibilityRole="button"
                accessibilityLabel={`Example: ${phrase}`}>
                <Text style={styles.chipText}>{phrase}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        <Text style={styles.disclaimer}>
          For entertainment and clarity. Trust patterns, not promises. 💅
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingHorizontal: 20,
    gap: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 4,
  },
  emoji: {
    fontSize: 40,
    marginBottom: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: COLORS.primaryDark,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 15,
    color: COLORS.muted,
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 22,
    paddingHorizontal: 12,
  },
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: COLORS.primary,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  outputCard: {
    backgroundColor: COLORS.outputBg,
    borderColor: COLORS.accent,
  },
  label: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.primary,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 10,
  },
  input: {
    minHeight: 110,
    fontSize: 17,
    lineHeight: 24,
    color: COLORS.text,
    backgroundColor: COLORS.background,
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 14,
  },
  buttonPrimary: {
    flex: 1,
    backgroundColor: COLORS.primary,
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonSecondary: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.surface,
  },
  buttonPrimaryText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  buttonSecondaryText: {
    color: COLORS.muted,
    fontSize: 16,
    fontWeight: '600',
  },
  buttonPressed: {
    opacity: 0.85,
    transform: [{scale: 0.98}],
  },
  translation: {
    fontSize: 18,
    lineHeight: 28,
    color: COLORS.text,
    fontWeight: '500',
  },
  examplesSection: {
    gap: 10,
  },
  examplesTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.muted,
  },
  examplesRow: {
    gap: 10,
    paddingRight: 8,
  },
  chip: {
    backgroundColor: COLORS.surface,
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
    maxWidth: 260,
  },
  chipPressed: {
    backgroundColor: COLORS.outputBg,
    borderColor: COLORS.primary,
  },
  chipText: {
    fontSize: 14,
    color: COLORS.text,
    lineHeight: 20,
  },
  disclaimer: {
    fontSize: 12,
    color: COLORS.muted,
    textAlign: 'center',
    lineHeight: 18,
    marginTop: 8,
    paddingHorizontal: 16,
  },
});

export default App;
