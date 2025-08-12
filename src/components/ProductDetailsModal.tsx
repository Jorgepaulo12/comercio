import React, { useState } from 'react';
import { X, Star, ShoppingCart, Package, Heart, Share2, Truck, Shield, Award, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  product?: {
    id: number;
    name: string;
    category: string;
    price: string;
    rating: number;
    image: string;
    discount?: string | null;
    description: string;
  } | null;
  onOrder: (product: any) => void;
}

const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({ 
  isOpen, 
  onClose, 
  product,
  onOrder 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !product) return null;

  // Simular múltiplas imagens do produto
  const productImages = [
    product.image,
    'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg',
    'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg',
  ];

  const specifications = [
    { label: 'Marca', value: 'Premium Brand' },
    { label: 'Modelo', value: 'Professional Series' },
    { label: 'Garantia', value: '2 Anos' },
    { label: 'Origem', value: 'União Europeia' },
    { label: 'Certificação', value: 'CE, ISO 9001' },
  ];

  const features = [
    'Design ergonômico e moderno',
    'Tecnologia de última geração',
    'Eficiência energética classe A+',
    'Compatível com sistemas existentes',
    'Suporte técnico especializado',
    'Instalação e configuração incluídas',
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const handleOrder = () => {
    onOrder({
      ...product,
      quantity,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75" onClick={onClose}></div>

        <div className="inline-block w-full max-w-6xl my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-800 shadow-xl rounded-2xl border border-gray-700">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <h2 className="text-2xl font-bold text-white">Detalhes do Produto</h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square bg-gray-700 rounded-xl overflow-hidden">
                <img
                  src={productImages[currentImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.discount && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-violet-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                    -{product.discount}
                  </div>
                )}
                
                {/* Navigation arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Thumbnail images */}
              <div className="flex space-x-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors duration-200 ${
                      currentImageIndex === index 
                        ? 'border-emerald-500' 
                        : 'border-gray-600 hover:border-gray-500'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-emerald-400 font-medium capitalize">
                    {product.category}
                  </span>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-red-400 transition-colors duration-200">
                      <Heart className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <h1 className="text-3xl font-bold text-white mb-4">{product.name}</h1>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                    <span className="text-white ml-2 font-medium">{product.rating}</span>
                  </div>
                  <span className="text-gray-400">(127 avaliações)</span>
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent">
                    {product.price}
                  </span>
                  {product.discount && (
                    <span className="text-xl text-gray-500 line-through">
                      €{(parseFloat(product.price.replace('€', '').replace(',', '')) * 1.2).toFixed(2)}
                    </span>
                  )}
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {product.description}. Este produto representa o que há de melhor em qualidade e inovação, 
                  desenvolvido especificamente para atender às necessidades mais exigentes do mercado profissional.
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Características Principais</h3>
                <div className="grid grid-cols-1 gap-2">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Especificações</h3>
                <div className="bg-gray-700/50 rounded-lg p-4 space-y-3">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-400">{spec.label}:</span>
                      <span className="text-white font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantity and Order */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Quantidade
                  </label>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="text-white font-medium text-lg w-12 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleOrder}
                  className="w-full bg-gradient-to-r from-emerald-500 to-violet-500 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Package className="mr-2 h-5 w-5" />
                  Fazer Pedido
                </button>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-700">
                <div className="text-center">
                  <Truck className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-300">Entrega Rápida</p>
                </div>
                <div className="text-center">
                  <Shield className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-300">Garantia 2 Anos</p>
                </div>
                <div className="text-center">
                  <Award className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-300">Qualidade Premium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;