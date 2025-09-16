import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">ShopMall</h3>
            <p className="text-sm opacity-80">
              서일대 소공과 김민한이 만든 <br/>쇼핑몰 사이트입니다.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer" />
              <Instagram className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer" />
              <Twitter className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer" />
              <Youtube className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">빠른 링크</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="opacity-80 hover:opacity-100">회사소개</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100">이용약관</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100">개인정보처리방침</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100">공지사항</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="font-semibold">고객서비스</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="opacity-80 hover:opacity-100">자주 묻는 질문</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100">배송 정보</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100">반품/교환</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100">고객센터</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">연락처</h4>
            <div className="space-y-2 text-sm">
              <p className="opacity-80">
                <span className="block">고객센터: 1588-1234</span>
                <span className="block">평일 09:00 - 18:00</span>
              </p>
              <p className="opacity-80">
                <span className="block">이메일: minhanSeoil@seoil.ac.kr</span>
              </p>
              <p className="opacity-80">
                <span className="block">주소: 서울시 중랑구 용마산로 90길 28-8</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2025 ShopMall. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}