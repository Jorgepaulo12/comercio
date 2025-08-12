import React from 'react';
import { Star, ShoppingCart, Eye, Package } from 'lucide-react';
import OrderModal from './OrderModal';
import ProductDetailsModal from './ProductDetailsModal';

const FeaturedProducts = () => {
  const [orderModal, setOrderModal] = React.useState<{
    isOpen: boolean;
    product: any;
  }>({
    isOpen: false,
    product: null,
  });
  const [detailsModal, setDetailsModal] = React.useState<{
    isOpen: boolean;
    product: any;
  }>({
    isOpen: false,
    product: null,
  });

  const products = [
    {
      id: 1,
      name: 'Laptop Profissional HP',
      category: 'Tecnologia',
      price: '€899.99',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg',
      discount: '15%',
      description: 'Laptop profissional de alta performance para trabalho intensivo',
    },
    {
      id: 2,
      name: 'Sistema de Som Premium',
      category: 'Audiovisual',
      price: '€1,299.99',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg',
      discount: null,
      description: 'Sistema de som profissional com qualidade de estúdio',
    },
    {
      id: 3,
      name: 'Cadeira Ergonômica Executive',
      category: 'Mobiliário',
      price: '€459.99',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/586078/pexels-photo-586078.jpeg',
      discount: '20%',
      description: 'Cadeira ergonômica de couro premium para escritório',
    },
    {
      id: 4,
      name: 'Kit Completo Papelaria',
      category: 'Papelaria',
      price: '€79.99',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg',
      discount: null,
      description: 'Kit completo com todos os materiais essenciais de escritório',
    },
  ];

  const handleOrderClick = (product: any) => {
    setOrderModal({
      isOpen: true,
      product: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      },
    });
  };

  const handleDetailsClick = (product: any) => {
    setDetailsModal({
      isOpen: true,
      product,
    });
  };

  const closeOrderModal = () => {
    setOrderModal({
      isOpen: false,
      product: null,
    });
  };

  const closeDetailsModal = () => {
    setDetailsModal({
      isOpen: false,
      product: null,
    });
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Produtos em <span className="bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent">Destaque</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubra nossa seleção cuidadosamente escolhida dos melhores produtos em cada categoria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/10"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {product.discount && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-emerald-500 to-violet-500 text-white px-2 py-1 rounded-lg text-sm font-semibold">
                    -{product.discount}
                  </div>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <button 
                    onClick={() => handleDetailsClick(product)}
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                  >
                    <Eye className="h-5 w-5 text-gray-900" />
                  </button>
                  <button 
                    onClick={() => handleOrderClick(product)}
                    className="p-2 bg-emerald-500 rounded-full hover:bg-emerald-600 transition-colors duration-200"
                  >
                    <ShoppingCart className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-emerald-400 font-medium">{product.category}</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300 ml-1">{product.rating}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent">
                    {product.price}
                  </span>
                  <button 
                    onClick={() => handleOrderClick(product)}
                    className="text-emerald-400 hover:text-emerald-300 font-medium text-sm transition-colors duration-200 flex items-center"
                  >
                    <Package className="mr-1 h-4 w-4" />
                    Pedir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-emerald-500 to-violet-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105">
            Ver Todos os Produtos
          </button>
        </div>

        <OrderModal
          isOpen={orderModal.isOpen}
          onClose={closeOrderModal}
          product={orderModal.product}
        />
        <ProductDetailsModal
          isOpen={detailsModal.isOpen}
          onClose={closeDetailsModal}
          product={detailsModal.product}
          onOrder={handleOrderClick}
        />
      </div>
    </section>
  );
};

export default FeaturedProducts;