'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Phone, Facebook, Twitter, Instagram, Menu, X, User, Lock, Eye, EyeOff } from 'lucide-react';

export default function MembersLogin() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: ''
  });
  const [loginStatus, setLoginStatus] = useState('idle'); // idle, submitting, success, error

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginStatus('submitting');

    // Simulate login process
    setTimeout(() => {
      if (loginForm.username === 'member' && loginForm.password === 'renzo2024') {
        setLoginStatus('success');
        // Redirect to dashboard
        window.location.href = '/members/dashboard';
      } else {
        setLoginStatus('error');
        setTimeout(() => setLoginStatus('idle'), 3000);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm relative z-50 animate-slide-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <img
                  src="https://518stores.com/cdn/shop/collections/renzo_pnatherlogo_blank_1600x.png?v=1596651391"
                  alt="Renzo Gracie Pearland"
                  className="h-12 w-auto cursor-pointer hover-scale"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <Link href="/" className="nav-link text-gray-900 hover:text-blue-600 font-medium transition-colors">HOME</Link>
              <Link href="/about" className="nav-link text-gray-900 hover:text-blue-600 font-medium transition-colors">ABOUT US</Link>
              <Link href="/schedule" className="nav-link text-gray-900 hover:text-blue-600 font-medium transition-colors">SCHEDULE</Link>
              <Link href="/gallery" className="nav-link text-gray-900 hover:text-blue-600 font-medium transition-colors">GALLERY</Link>
              <Link href="/members" className="nav-link text-blue-600 font-medium">MEMBER LOGIN</Link>
            </nav>

            {/* Contact Info & Social */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center text-gray-600">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+18324589839" className="text-sm hover:text-blue-600 transition-colors cursor-pointer">(832) 458-9839</a>
              </div>
              <div className="flex space-x-2">
                <a href="https://www.facebook.com/RenzoGraciePearland" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="h-5 w-5 text-blue-600 cursor-pointer hover:text-blue-700 hover-scale" />
                </a>
                <a href="https://www.instagram.com/renzograciepearland" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-5 w-5 text-pink-600 cursor-pointer hover:text-pink-700 hover-scale" />
                </a>
                <a href="https://twitter.com/RGPearland" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5 text-blue-400 cursor-pointer hover:text-blue-500 hover-scale" />
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                type="button"
                className="text-gray-900 hover-scale"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t animate-slide-down">
            <div className="px-4 py-2 space-y-2">
              <Link href="/" className="block py-2 text-gray-900 hover:text-blue-600">HOME</Link>
              <Link href="/about" className="block py-2 text-gray-900 hover:text-blue-600">ABOUT US</Link>
              <Link href="/schedule" className="block py-2 text-gray-900 hover:text-blue-600">SCHEDULE</Link>
              <Link href="/gallery" className="block py-2 text-gray-900 hover:text-blue-600">GALLERY</Link>
              <Link href="/members" className="block py-2 text-blue-600 font-medium">MEMBER LOGIN</Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="max-w-md w-full mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in-up">
            {/* Logo */}
            <div className="text-center mb-8">
              <User className="h-16 w-16 mx-auto mb-4 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Member Portal</h1>
              <p className="text-gray-600 mt-2">Access your training materials and schedules</p>
            </div>

            {/* Demo Credentials */}
            <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">Demo Login:</h3>
              <p className="text-sm text-blue-700">Username: <code className="bg-blue-100 px-1 rounded">member</code></p>
              <p className="text-sm text-blue-700">Password: <code className="bg-blue-100 px-1 rounded">renzo2024</code></p>
            </div>

            {/* Error Message */}
            {loginStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 border border-red-300 text-red-700 rounded-lg animate-fade-in-up">
                <p className="font-semibold">Login Failed</p>
                <p className="text-sm">Invalid username or password. Please try again.</p>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                  Username or Email
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={loginForm.username}
                    onChange={handleInputChange}
                    required
                    className="form-input w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your username"
                    disabled={loginStatus === 'submitting'}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={loginForm.password}
                    onChange={handleInputChange}
                    required
                    className="form-input w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your password"
                    disabled={loginStatus === 'submitting'}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    disabled={loginStatus === 'submitting'}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loginStatus === 'submitting'}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loginStatus === 'submitting' ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing In...
                    </span>
                  ) : (
                    'Sign In'
                  )}
                </button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Not a member yet?{' '}
                <Link href="/#contact" className="font-medium text-blue-600 hover:text-blue-500">
                  Contact us to join
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">&copy; 2024 Renzo Gracie Academy Pearland. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
