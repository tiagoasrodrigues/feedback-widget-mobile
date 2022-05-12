import React from 'react';
import {
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import { Camera, Trash } from 'phosphor-react-native';

import { styles } from './styles';
import { theme } from '../../theme';

interface Props {
  screenshot: string | null;
  onTakeShot: () => void;
  onRemoveShot: () => void;
}

export function ScreenshotButton({ screenshot, onTakeShot, onRemoveShot }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={screenshot ? onRemoveShot : onTakeShot}
    >
      {
        screenshot
          ?
          <Trash
            size={22}
            color={theme.colors.text_secondary}
            weight="fill"
            style={styles.removeIcon}
          />
          :
          <Camera 
          size={24}
          color={theme.colors.text_primary}
          weight="bold"
          />
      }
    </TouchableOpacity>
  );
}