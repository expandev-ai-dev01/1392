import { Link } from 'react-router-dom';
import { Container } from '@/core/components/Container';
import { Button } from '@/core/components/Button';

/**
 * @page HomePage
 * @summary Landing page with hero section and call-to-action
 * @domain core
 * @type landing-page
 * @category public
 */
export const HomePage = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">As Melhores Pizzas da Cidade</h1>
            <p className="text-xl mb-8">
              Ingredientes frescos, massa artesanal e muito sabor. Peça agora e receba em casa!
            </p>
            <div className="flex gap-4">
              <Link to="/cardapio">
                <Button size="lg" variant="secondary">
                  Ver Cardápio
                </Button>
              </Link>
              <Link to="/sobre">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary-600"
                >
                  Sobre Nós
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">Por Que Escolher Nossa Pizzaria?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🍕</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Ingredientes Frescos</h3>
              <p className="text-gray-600">
                Utilizamos apenas ingredientes selecionados e de alta qualidade.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Entrega Rápida</h3>
              <p className="text-gray-600">Sua pizza quentinha em até 40 minutos na sua casa.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Feito com Amor</h3>
              <p className="text-gray-600">Cada pizza é preparada com carinho e dedicação.</p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
