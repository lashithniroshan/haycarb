// components/Navbar.tsx
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

const Navbar = ({ isScrolled, isContentVisible }: { isScrolled: boolean; isContentVisible: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [pdfFiles, setPdfFiles] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fetch PDF files from API route
  useEffect(() => {
    const fetchPdfFiles = async () => {
      try {
        const response = await fetch('/api/pdfs');
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data)) {
            setPdfFiles(data);
          } else if (data.error) {
            console.error('API Error:', data.error);
            // Fallback to hardcoded list if API fails
            setPdfFiles([
              'full-Annual-Report-2024.pdf',
              'full-Annual-Report-2024-2025.pdf',
              'Haycarb-Glance.pdf',
              'Our-Approach-to-Reporting.pdf',
              'Our-Products.pdf',
              'Performance-Highlights.pdf',
              'Strategic-in-Every-Move.pdf',
            ]);
          }
        } else {
          console.error('Failed to fetch PDF files from API');
          // Fallback to hardcoded list
          setPdfFiles([
            'full-Annual-Report-2024.pdf',
            'full-Annual-Report-2024-2025.pdf',
            'Haycarb-Glance.pdf',
            'Our-Approach-to-Reporting.pdf',
            'Our-Products.pdf',
            'Performance-Highlights.pdf',
            'Strategic-in-Every-Move.pdf',
          ]);
        }
      } catch (error) {
        console.error('Error fetching PDF files:', error);
        // Fallback to hardcoded list
        setPdfFiles([
          'full-Annual-Report-2024.pdf',
          'full-Annual-Report-2024-2025.pdf',
          'Haycarb-Glance.pdf',
          'Our-Approach-to-Reporting.pdf',
          'Our-Products.pdf',
          'Performance-Highlights.pdf',
          'Strategic-in-Every-Move.pdf',
        ]);
      }
    };

    fetchPdfFiles();
  }, []);

  // Filter PDFs based on search query
  const filteredPdfs = pdfFiles.filter((file) =>
    file.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle PDF selection
  const handlePdfSelect = (file: string) => {
    window.open(`/pdf/${file}`, '_blank');
    setSearchQuery('');
    setIsDropdownOpen(false);
  };

  // Toggle dropdown on search icon/input focus
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

    // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'scrollednavbg text-white'
          : 'bg-transparent text-white'
      }`}
      style={{ paddingTop: '10px' }}
    >
      <div className="container mx-auto px-4 py-7 flex items-center justify-between">
        {/* Hamburger Menu (Always Visible) */}
        {isContentVisible && (
          <div>
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16m-7 6h7'
                  }
                />
              </svg>
            </button>
          </div>
        )}

        {/* Brand Logo (Centered) */}
        <div className="absolute left-1/2 transform -translate-x-1/2" style={{ top: '10px' }}>
          <Image
            src="/haycarblogo.png"
            alt="Haycarb Logo"
            width={226}
            height={102}
            className="h-20 w-auto"
          />
        </div>

        {/* Right Side: Search and User Profile */}
        {isContentVisible && (
          <div className="flex space-x-4 relative">
            {/* Search Dropdown */}
            <div className="relative" style={{ display: 'flex' }} ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="focus:outline-none"
                aria-label="Toggle search"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white text-black rounded-md shadow-lg z-50" style={{
                         background: '#3C7DA6',
    color: 'rgb(255, 255, 255)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    fontSize: '14px'
                }}>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsDropdownOpen(true)}
                    // onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
                    placeholder="Search PDFs..."
                    className="w-full p-1 border-b focus:outline-none"
                  />
                  <ul className="max-h-40 overflow-y-auto">
                    {filteredPdfs.length > 0 ? (
                      filteredPdfs.map((file, index) => (
                        <li
                          key={index}
                          className="p-2 hover:bg-blue-200 cursor-pointer"
                          onClick={() => handlePdfSelect(file)}
                        >
                          {file}
                        </li>
                      ))
                    ) : (
                      <li className="p-2 text-gray-500">No PDFs found</li>
                    )}
                  </ul>
                </div>
              )}
            </div>

            {/* User Profile Icon */}
            <button className="focus:outline-none" aria-label="User Profile">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Mobile Menu */}
        {isContentVisible && (
          <div
            className={`fixed top-0 left-0 bg-blue-900 text-white transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            } w-78 z-40 backdrop-blur-md`}
            style={{ backgroundColor: 'rgba(2, 30, 67, 0.8)', paddingBottom: '0', borderBottomRightRadius: '30px' }}
          >
            <button
              onClick={toggleMenu}
              className="text-2xl mb-4 focus:outline-none text-white"
              aria-label="Toggle menu"
              style={{ padding: '10px 0px 0px 20px' }}
            >
              ×
            </button>
            <ul className="space-y-4">
              <li className="p-8 hover:bg-[rgba(73,220,248,0.1)] block w-full" style={{ borderBottom: '0.5px solid rgba(0, 141, 168, 0.5)' }}>
                <a href="#home" className="" onClick={toggleMenu}>
                  Home
                </a>
              </li>
              <li className="p-8 hover:bg-[rgba(73,220,248,0.1)] block w-full" style={{ borderBottom: '0.5px solid rgba(0, 141, 168, 0.5)' }}>
                <a href="#haycarb-in-focus" className="block w-full p-2" onClick={toggleMenu}>
                  Haycarb in Focus
                </a>
              </li>
              <li className="p-8 hover:bg-[rgba(73,220,248,0.1)] block w-full" style={{ borderBottom: '0.5px solid rgba(0, 141, 168, 0.5)' }}>
                <a href="#non-financial" className="" onClick={toggleMenu}>
                  Non-financial
                </a>
              </li>
              <li className="p-8 hover:bg-[rgba(73,220,248,0.1)] block w-full" style={{ borderBottom: '0.5px solid rgba(0, 141, 168, 0.5)' }}>
                <a href="#climate-resilience" className="" onClick={toggleMenu}>
                  Assessing climate resilience
                </a>
              </li>
              <li className="p-8 hover:bg-[rgba(73,220,248,0.1)] block w-full">
                <a href="#contact" className="" onClick={toggleMenu}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;