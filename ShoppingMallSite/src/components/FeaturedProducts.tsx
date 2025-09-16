import { ProductCard, Product } from './ProductCard';

interface FeaturedProductsProps {
  onAddToCart: (product: Product) => void;
}

const featuredProducts: Product[] = [
  {
    id: '1',
    name: '프리미엄 스마트폰 케이스',
    price: 29000,
    originalPrice: 39000,
    image: 'https://images.unsplash.com/photo-1520088096110-20308c23a3cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lfGVufDF8fHx8MTc1NzkxODUzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.5,
    reviewCount: 128,
    isNew: true
  },
  {
    id: '2',
    name: '럭셔리 레더 시계',
    price: 189000,
    originalPrice: 249000,
    image: 'https://images.unsplash.com/photo-1670177257750-9b47927f68eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaHxlbnwxfHx8fDE3NTc5Mzk1MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.8,
    reviewCount: 89
  },
  {
    id: '3',
    name: '디자이너 운동화',
    price: 129000,
    image: 'https://images.unsplash.com/photo-1625622176700-1ad9e716c8b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHNuZWFrZXJzfGVufDF8fHx8MTc1NzkzOTUyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.3,
    reviewCount: 234,
    isNew: true
  },
  {
    id: '4',
    name: '프리미엄 무선 이어폰',
    price: 149000,
    originalPrice: 199000,
    image: 'https://images.unsplash.com/photo-1645684084216-b52ba9e12aaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGdhZGdldHN8ZW58MXx8fHwxNzU3OTE3MDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.6,
    reviewCount: 176
  },
  {
    id: '5',
    name: '모던 테이블 램프',
    price: 79000,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZnVybml0dXJlfGVufDF8fHx8MTc1NzkxODU2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.4,
    reviewCount: 98
  },
  {
    id: '6',
    name: '뷰티 스킨케어 세트',
    price: 89000,
    originalPrice: 119000,
    image: 'https://images.unsplash.com/photo-1676570092589-a6c09ecbb373?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjb3NtZXRpY3N8ZW58MXx8fHwxNzU3OTE3MDIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.7,
    reviewCount: 145,
    isNew: true
  },
  {
    id: '7',
    name: '요가 매트 & 액세서리',
    price: 59000,
    image: 'https://images.unsplash.com/photo-1602211844066-d3bb556e983b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzU3ODQ0NDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.2,
    reviewCount: 67
  },
  {
    id: '8',
    name: '캐주얼 데님 재킷',
    price: 89000,
    originalPrice: 129000,
    image: 'https://images.unsplash.com/photo-1627342229908-71efbac25f08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBzdG9yZXxlbnwxfHx8fDE3NTc4MzA5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.5,
    reviewCount: 203
  }
];

export function FeaturedProducts({ onAddToCart }: FeaturedProductsProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">추천 상품</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            엄선된 인기 상품들을 특별한 가격으로 만나보세요
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}