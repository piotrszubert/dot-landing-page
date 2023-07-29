import React, { useState, useEffect } from 'react';
import styles from '@/styles/Cursor.module.css';

export default function CursorCircle() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={styles.cursor}
      style={{ left: cursorPosition.x, top: cursorPosition.y }}
    />
  );
};
