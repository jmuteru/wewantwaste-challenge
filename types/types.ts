export interface NavigationButtonsProps {
  goBack: () => void;
  goForward: () => void;
  canGoForward: boolean;
}

export interface ProgressBarProps {
  currentStep: number;
}

export interface Skip {
  id: string;
  name: string;
  size: string;
  price: number;
  hirePeriod: string;
  description: string;
  imageUrl: string;
}

export interface SkipCardProps {
  skip: Skip;
  isSelected: boolean;
  onSelect: () => void;
}

export interface SkipGridProps {
  skips: Skip[];
  selectedSkip: string | null;
  onSelectSkip: (skipId: string) => void;
  loading: boolean;
}
