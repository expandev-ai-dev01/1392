import { Link } from 'react-router-dom';
import { Container } from '@/core/components/Container';
import { Button } from '@/core/components/Button';

/**
 * @page NotFoundPage
 * @summary 404 error page
 * @domain core
 * @type error-page
 * @category public
 */
export const NotFoundPage = () => {
  return (
    <div className="py-20">
      <Container>
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-2xl text-gray-600 mb-8">Página não encontrada</p>
          <p className="text-gray-500 mb-8">
            A página que você está procurando não existe ou foi movida.
          </p>
          <Link to="/">
            <Button size="lg">Voltar para Início</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default NotFoundPage;
