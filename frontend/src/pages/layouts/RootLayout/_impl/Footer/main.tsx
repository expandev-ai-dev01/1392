import { Container } from '@/core/components/Container';

/**
 * @component Footer
 * @summary Application footer with contact information
 * @domain core
 * @type layout-component
 * @category layout
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Pizzaria</h3>
            <p className="text-gray-400">
              As melhores pizzas da cidade, feitas com ingredientes frescos e muito amor.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Telefone: (11) 1234-5678</li>
              <li>Email: contato@pizzaria.com</li>
              <li>Endereço: Rua das Pizzas, 123</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Horário</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Segunda a Quinta: 18h - 23h</li>
              <li>Sexta e Sábado: 18h - 00h</li>
              <li>Domingo: 18h - 22h</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} Pizzaria. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
};
