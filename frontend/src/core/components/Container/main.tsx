import { getContainerClassName } from './variants';
import type { ContainerProps } from './types';

/**
 * @component Container
 * @summary Responsive container component for content layout
 * @domain core
 * @type layout-component
 * @category layout
 */
export const Container = ({ children, size = 'default', className }: ContainerProps) => {
  return <div className={getContainerClassName({ size, className })}>{children}</div>;
};
