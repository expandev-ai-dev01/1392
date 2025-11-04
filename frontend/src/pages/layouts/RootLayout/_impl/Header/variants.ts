import { clsx } from 'clsx';

export interface HeaderLinkVariantProps {
  isActive: boolean;
}

export function getHeaderLinkClassName(props: HeaderLinkVariantProps): string {
  const { isActive } = props;

  return clsx('text-base font-medium transition-colors', {
    'text-primary-600': isActive,
    'text-gray-600 hover:text-primary-600': !isActive,
  });
}
