import type { JSX } from 'react';
import { useState } from 'react';

import './SimpleColorPicker.css';

const PRESET_COLORS = [
  '#3b82f6', // Blue
  '#ef4444', // Red
  '#10b981', // Green
  '#f59e0b', // Yellow
  '#8b5cf6', // Purple
  '#f97316', // Orange
  '#06b6d4', // Cyan
  '#84cc16', // Lime
  '#ec4899', // Pink
  '#6b7280', // Gray
  '#1f2937', // Dark Gray
  '#000000', // Black
];

type Props = Readonly<{
  color: string;
  onChange: (color: string) => void;
  label?: string;
}>;

export default function SimpleColorPicker({ color, onChange, label }: Props): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [customColor, setCustomColor] = useState(color);

  const handleColorSelect = (selectedColor: string) => {
    onChange(selectedColor);
    setCustomColor(selectedColor);
    setIsOpen(false);
  };

  const handleCustomColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setCustomColor(newColor);
    onChange(newColor);
  };

  return (
    <div className="simple-color-picker">
      {label && <label className="simple-color-picker__label">{label}</label>}
      <div className="simple-color-picker__container">
        <button
          type="button"
          className="simple-color-picker__trigger"
          onClick={() => setIsOpen(!isOpen)}
          style={{ backgroundColor: color }}
          aria-label="Select color"
        >
          <span className="simple-color-picker__preview" style={{ backgroundColor: color }} />
        </button>

        {isOpen && (
          <div className="simple-color-picker__dropdown">
            <div className="simple-color-picker__presets">
              {PRESET_COLORS.map((presetColor) => (
                <button
                  key={presetColor}
                  type="button"
                  className={`simple-color-picker__preset ${color === presetColor ? 'simple-color-picker__preset--active' : ''}`}
                  style={{ backgroundColor: presetColor }}
                  onClick={() => handleColorSelect(presetColor)}
                  aria-label={`Select ${presetColor}`}
                />
              ))}
            </div>
            <div className="simple-color-picker__custom">
              <input
                type="color"
                value={customColor}
                onChange={handleCustomColorChange}
                className="simple-color-picker__input"
              />
              <span className="simple-color-picker__custom-label">Custom</span>
            </div>
          </div>
        )}
      </div>

      {isOpen && <div className="simple-color-picker__overlay" onClick={() => setIsOpen(false)} />}
    </div>
  );
}
