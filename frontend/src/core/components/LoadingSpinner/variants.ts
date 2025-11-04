import { clsx } from 'clsx';
import type { LoadingSpinnerProps } from './types';

export function getLoadingSpinnerClassName(props: LoadingSpinnerProps): string {
  const { size = 'medium', className } = props;

  return clsx(
    'animate-spin rounded-full border-4 border-gray-200 border-t-primary-600',
    {
      'h-6 w-6': size === 'small',
      'h-10 w-10': size === 'medium',
      'h-16 w-16': size === 'large',
    },
    className
  );
}
