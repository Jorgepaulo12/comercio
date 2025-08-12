import React, { useState } from 'react';
import { Search, Filter, Grid, List, Star, ShoppingCart, Eye, Package } from 'lucide-react';
import OrderModal from '../components/OrderModal';
import ProductDetailsModal from '../components/ProductDetailsModal';

const Products = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [orderModal, setOrderModal] = useState<{
    isOpen: boolean;
    product: any;
  }>({
    isOpen: false,
    product: null,
  });
  const [detailsModal, setDetailsModal] = useState<{
    isOpen: boolean;
    product: any;
  }>({
    isOpen: false,
    product: null,
  });

  // Get search term from URL params
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    if (searchParam) {
      setSearchTerm(searchParam);
    }
  }, []);

  const categories = [
    { id: 'all', name: 'Todos os Produtos' },
    { id: 'technology', name: 'Tecnologia' },
    { id: 'automotive', name: 'Automóvel' },
    { id: 'telecommunications', name: 'Telecomunicações' },
    { id: 'audiovisual', name: 'Audiovisual' },
    { id: 'appliances', name: 'Eletrodomésticos' },
    { id: 'furniture', name: 'Mobiliário' },
    { id: 'stationery', name: 'Papelaria' },
    { id: 'sports', name: 'Desporto' },
    { id: 'clothing', name: 'Vestuário' },
    { id: 'shoes', name: 'Calçado' },
  ];

  const products = [
    {
      id: 1,
      name: 'MacBook Pro 16" M3',
      category: 'technology',
      price: '€2,499.99',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg',
      discount: '10%',
      description: 'Laptop profissional com chip M3 para máximo desempenho',
    },
    {
      id: 2,
      name: 'Sistema Audio Premium',
      category: 'audiovisual',
      price: '€1,899.99',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg',
      discount: null,
      description: 'Sistema de som profissional para eventos e apresentações',
    },
    {
      id: 3,
      name: 'Cadeira Executive Pro',
      category: 'furniture',
      price: '€599.99',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/586078/pexels-photo-586078.jpeg',
      discount: '15%',
      description: 'Cadeira ergonômica de couro para escritório executivo',
    },
    {
      id: 4,
      name: 'Kit Papelaria Completo',
      category: 'stationery',
      price: '€89.99',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg',
      discount: null,
      description: 'Kit completo com todos os materiais essenciais de escritório',
    },
    {
      id: 5,
      name: 'Smartphone Samsung Galaxy',
      category: 'telecommunications',
      price: '€899.99',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg',
      discount: '20%',
      description: 'Smartphone de última geração com câmera profissional',
    },
    {
      id: 6,
      name: 'Frigorífico Inox 500L',
      category: 'appliances',
      price: '€1,299.99',
      rating: 4.5,
      image: 'https://images.pexels.com/photos/280230/pexels-photo-280230.jpeg',
      discount: null,
      description: 'Frigorífico de inox com tecnologia No Frost',
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

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossos <span className="bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent">Produtos</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore nossa extensa gama de produtos de alta qualidade para todas as necessidades do seu negócio
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 items-center w-full lg:w-auto">
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors duration-300"
                />
              </div>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors duration-300"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  viewMode === 'grid' 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-gray-700 text-gray-400 hover:text-white'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  viewMode === 'list' 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-gray-700 text-gray-400 hover:text-white'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/10 ${
                viewMode === 'list' ? 'flex flex-row' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-1/3' : 'w-full'}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={`object-cover group-hover:scale-110 transition-transform duration-300 ${
                    viewMode === 'list' ? 'w-full h-full' : 'w-full h-48'
                  }`}
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

              <div className={`p-6 ${viewMode === 'list' ? 'w-2/3 flex flex-col justify-between' : ''}`}>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-emerald-400 font-medium capitalize">
                      {categories.find(c => c.id === product.category)?.name}
                    </span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300 ml-1">{product.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent">
                    {product.price}
                  </span>
                  <button 
                    onClick={() => handleOrderClick(product)}
                    className="bg-gradient-to-r from-emerald-500 to-violet-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 flex items-center"
                  >
                    <Package className="mr-1 h-4 w-4" />
                    Pedir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-center">
              <Search className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <p className="text-xl text-gray-400 mb-2">Nenhum produto encontrado</p>
              <p className="text-gray-500">Tente ajustar os filtros ou termo de pesquisa</p>
            </div>
          </div>
        )}

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
    </div>
  );
};

export default Products;