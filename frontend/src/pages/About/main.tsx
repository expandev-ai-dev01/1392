import { Container } from '@/core/components/Container';

/**
 * @page AboutPage
 * @summary About page with restaurant information
 * @domain about
 * @type content-page
 * @category public
 */
export const AboutPage = () => {
  return (
    <div className="py-12">
      <Container>
        <h1 className="text-4xl font-bold mb-8">Sobre Nós</h1>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Bem-vindo à nossa pizzaria! Somos apaixonados por criar as melhores pizzas da cidade,
            usando apenas ingredientes frescos e de alta qualidade.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Nossa História</h2>
          <p className="text-gray-600 mb-6">
            Fundada em 2020, nossa pizzaria nasceu do sonho de trazer sabores autênticos e uma
            experiência única para nossos clientes. Cada pizza é preparada com carinho e dedicação,
            seguindo receitas tradicionais e técnicas artesanais.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Nossos Valores</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Qualidade em primeiro lugar</li>
            <li>Ingredientes frescos e selecionados</li>
            <li>Atendimento excepcional</li>
            <li>Compromisso com a satisfação do cliente</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
