import React, { useState } from 'react';
import { X, User, MapPin, Phone, Mail, ShoppingCart, CheckCircle } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  product?: {
    id: number;
    name: string;
    price: number;
    image: string;
  } | null;
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, product }) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    contact: '',
    email: '',
    quantity: 1,
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!product) return;
    try {
      const payload = {
        nome: formData.name,
        endereco: formData.location,
        email: formData.email,
        contacto: formData.contact,
        mensagem: formData.notes,
        product_id: product.id,
        quantidade: Number(formData.quantity) || 1,
      };
      const res = await fetch('https://maubica.onrender.com/orders', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Falha ao enviar pedido');
      setIsSubmitted(true);

      // WhatsApp redirect com link do produto
      const phone = '258860289475';
      const productUrl = `${window.location.origin}/produtos?search=${encodeURIComponent(product.name)}&id=${product.id}`;
      const message = `Novo pedido%0A%0AProduto: ${encodeURIComponent(product.name)}%0APreco: ${encodeURIComponent(
        formatMZN(product.price)
      )}%0AQtd: ${payload.quantidade}%0ALink: ${encodeURIComponent(productUrl)}%0A%0ACliente: ${encodeURIComponent(payload.nome)}%0AContacto: ${encodeURIComponent(
        payload.contacto
      )}%0AEmail: ${encodeURIComponent(payload.email)}%0AEndereco: ${encodeURIComponent(payload.endereco)}%0AObservacoes: ${encodeURIComponent(
        payload.mensagem || ''
      )}`;
      window.open(`https://wa.me/${phone}?text=${message}`, '_blank');

      // Reset and close
      setFormData({
        name: '',
        location: '',
        contact: '',
        email: '',
        quantity: 1,
        notes: '',
      });
      onClose();
    } catch (err) {
      alert('Não foi possível enviar o pedido. Tente novamente.');
    }
  };

  if (!isOpen) return null;

  const formatMZN = (value: number) =>
    new Intl.NumberFormat('pt-MZ', { style: 'currency', currency: 'MZN', minimumFractionDigits: 2 }).format(value);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75" onClick={onClose}></div>

        <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-800 shadow-xl rounded-2xl border border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white">
              {isSubmitted ? 'Pedido Enviado!' : 'Fazer Pedido'}
            </h3>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {isSubmitted ? (
            <div className="text-center py-8">
              <CheckCircle className="h-16 w-16 text-emerald-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">
                Pedido enviado com sucesso!
              </h4>
              <p className="text-gray-300">
                Entraremos em contato em breve para confirmar os detalhes.
              </p>
            </div>
          ) : (
            <>
              {product && (
                <div className="bg-gray-700/50 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-white">{product.name}</h4>
                      <p className="text-emerald-400 font-bold">{formatMZN(product.price)}</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nome Completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors duration-300"
                        placeholder="Seu nome completo"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors duration-300"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-2">
                      Localização *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors duration-300"
                        placeholder="Cidade, Província"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-gray-300 mb-2">
                      Contacto *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="tel"
                        id="contact"
                        name="contact"
                        value={formData.contact}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors duration-300"
                        placeholder="+258 xx xxx xxxx"
                      />
                    </div>
                  </div>
                </div>

                {product && (
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-300 mb-2">
                      Quantidade
                    </label>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      min="1"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors duration-300"
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-300 mb-2">
                    Observações (opcional)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors duration-300 resize-none"
                    placeholder="Informações adicionais sobre o pedido..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-violet-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Enviar Pedido
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderModal;