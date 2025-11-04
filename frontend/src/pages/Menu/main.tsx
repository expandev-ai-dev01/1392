import { Container } from '@/core/components/Container';

/**
 * @page MenuPage
 * @summary Menu page displaying available products
 * @domain menu
 * @type list-page
 * @category public
 */
export const MenuPage = () => {
  return (
    <div className="py-12">
      <Container>
        <h1 className="text-4xl font-bold mb-8">Nosso Cardápio</h1>
        <p className="text-gray-600 mb-8">
          Em breve, você poderá visualizar todas as nossas deliciosas pizzas aqui!
        </p>
      </Container>
    </div>
  );
};

export default MenuPage;
