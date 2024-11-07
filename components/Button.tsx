import { LinearGradient } from 'expo-linear-gradient';
import React, { forwardRef } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '~/constants/Colors';

type ButtonProps = React.ComponentPropsWithoutRef<typeof TouchableOpacity> & {
  variant: 'primary' | 'secondary';
};

const Button = forwardRef<React.ElementRef<typeof TouchableOpacity>, ButtonProps>(
  ({ variant, style, children, ...props }, ref) => {
    const colors =
      variant === 'primary'
        ? [COLORS.babyBlueEyes, COLORS.jordyBlue]
        : [COLORS.metallicPink, COLORS.brightLavender];

    return (
      <TouchableOpacity ref={ref} style={[styles.button, style]} {...props}>
        <LinearGradient start={[0, 0]} end={[1, 0]} colors={colors} style={styles.linearGradient}>
          {children}
        </LinearGradient>
      </TouchableOpacity>
    );
  }
);
Button.displayName = 'Button';

const styles = StyleSheet.create({
  button: {
    overflow: 'hidden',
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { Button };
