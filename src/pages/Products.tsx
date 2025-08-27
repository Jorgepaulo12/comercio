import React, { useState } from 'react';
import { Search, Grid, List, Star, ShoppingCart, Eye, Package } from 'lucide-react';
import OrderModal from '../components/OrderModal';
import ProductDetailsModal from '../components/ProductDetailsModal';

const Products = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
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

  type ApiProduct = {
    nome: string;
    categoria: string;
    descricao: string;
    preco: number;
    especificacoes?: string;
    caracteristicas_principais?: string;
    id: number;
    foto: string;
    created_at?: string;
  };

  type UiProduct = {
    id: number;
    name: string;
    category: string;
    price: number;
    rating: number;
    image: string;
    discount: string | null;
    description: string;
    specifications?: string;
    mainFeatures?: string;
  };

  const [products, setProducts] = useState<UiProduct[]>([]);
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([
    { id: 'all', name: 'Todos os Produtos' },
  ]);

  const formatMZN = (value: number) =>
    value > 0
      ? new Intl.NumberFormat('pt-MZ', { style: 'currency', currency: 'MZN', minimumFractionDigits: 2 }).format(value)
      : 'Sob consulta';

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const res = await fetch('https://maubica.onrender.com/products?skip=0&limit=100', { headers: { accept: 'application/json' } });
        if (!res.ok) throw new Error(`Erro ao carregar produtos (${res.status})`);
        const data: ApiProduct[] = await res.json();
        const mapped: UiProduct[] = data.map((p) => {
          const image = p.foto?.startsWith('http') ? p.foto : `https://maubica.onrender.com/${p.foto}`;
          return {
            id: p.id,
            name: p.nome,
            category: p.categoria,
            price: p.preco,
            rating: 4.7,
            image,
            discount: null,
            description: p.descricao,
            specifications: p.especificacoes,
            mainFeatures: p.caracteristicas_principais,
          };
        });
        setProducts(mapped);
        const unique = Array.from(new Set(mapped.map((p) => p.category))).filter(Boolean);
        setCategories([{ id: 'all', name: 'Todos os Produtos' }, ...unique.map((c) => ({ id: c, name: c }))]);
      } catch (e: any) {
        setError(e?.message || 'Falha ao carregar produtos');
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // removed static categories and products; now loaded from API above

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
                    {formatMZN(product.price)}
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

        {isLoading && (
          <div className="text-center py-8 text-gray-400">Carregando produtos...</div>
        )}

        {error && !isLoading && (
          <div className="text-center py-8 text-red-400">{error}</div>
        )}

        {filteredProducts.length === 0 && !isLoading && !error && (
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