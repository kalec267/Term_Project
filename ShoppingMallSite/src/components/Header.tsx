import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export function Header({ cartItemCount, onCartClick }: HeaderProps) {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
            <h1 className="text-2xl font-bold text-primary">서일대Shop</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">홈</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">패션</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">전자제품</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">홈&인테리어</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">뷰티</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">스포츠</a>
          </nav>

          {/* Search */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="상품을 검색하세요..." 
                className="pl-10 bg-input-background border-0"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="lg:hidden">
              <Search className="w-5 h-5" />
            </Button>

            <Button asChild variant="ghost" size="sm" className="flex items-center">
              <a href="../SignUpPage/signUpPage.html">
              <User className="w-5 h-5 mr-2" />
              로그인
              </a>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="relative"
              onClick={onCartClick}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 w-5 h-5 rounded-full p-0 flex items-center justify-center"
                >
                  {cartItemCount > 99 ? '99+' : cartItemCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}