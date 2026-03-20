export interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  backgroundColor?: string;
  onChange?: (value: string) => void;
}
