export const lightTheme = {
  background: '#FFFFFF',
  backgroundSecondary: '#F5F7FA',
  text: '#1A1F36',
  textSecondary: '#4A5568',
  primary: '#6B46C1',
  primaryGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  secondary: '#3182CE',
  accent: '#F6AD55',
  gold: '#ECC94B',
  glassBg: 'rgba(255, 255, 255, 0.25)',
  glassBackdrop: 'blur(10px)',
  cardShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  border: 'rgba(255, 255, 255, 0.18)',
};

export const darkTheme = {
  background: '#0A0E27',
  backgroundSecondary: '#1A1F36',
  text: '#E2E8F0',
  textSecondary: '#A0AEC0',
  primary: '#9F7AEA',
  primaryGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  secondary: '#4299E1',
  accent: '#F6AD55',
  gold: '#F6E05E',
  glassBg: 'rgba(255, 255, 255, 0.05)',
  glassBackdrop: 'blur(16px)',
  cardShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  border: 'rgba(255, 255, 255, 0.1)',
};

export type ThemeType = typeof lightTheme;