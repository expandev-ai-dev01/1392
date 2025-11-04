import { Link, useLocation } from 'react-router-dom';
import { Container } from '@/core/components/Container';
import { getHeaderLinkClassName } from './variants';

/**
 * @component Header
 * @summary Application header with navigation
 * @domain core
 * @type layout-component
 * @category navigation
 */
export const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-primary-600">
            Pizzaria
          </Link>

          <nav className="flex gap-6">
            <Link to="/" className={getHeaderLinkClassName({ isActive: isActive('/') })}>
              Início
            </Link>
            <Link
              to="/cardapio"
              className={getHeaderLinkClassName({ isActive: isActive('/cardapio') })}
            >
              Cardápio
            </Link>
            <Link to="/sobre" className={getHeaderLinkClassName({ isActive: isActive('/sobre') })}>
              Sobre
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
};
