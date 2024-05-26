import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          <nav className="flex flex-wrap justify-center space-x-4 lg:space-x-6 text-center lg:text-left">
            <a href="#" className="hover:text-white transition duration-300">Начало</a>
            <a href="#" className="hover:text-white transition duration-300">Блог</a>
            <a href="#" className="hover:text-white transition duration-300">Условия за ползване</a>
            <a href="#" className="hover:text-white transition duration-300">Политика за лични данни</a>
            <a href="#" className="hover:text-white transition duration-300">За реклама</a>
            <a href="#" className="hover:text-white transition duration-300">Карта на сайта</a>
            <a href="#" className="hover:text-white transition duration-300">Контакт</a>
          </nav>
          <div className="text-center lg:text-right text-sm">
            © 2024 Automoto.bg - безплатни обяви. Използването на Automoto.bg или публикуването на обява в сайта означава съгласие с Общи условия за ползване на Automoto.bg
          </div>
          <div className="flex justify-center lg:justify-end space-x-4">
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition duration-300 inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 text-gray-300" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.73 0-1.325.596-1.325 1.326v21.348c0 .73.596 1.326 1.326 1.326h11.495v-9.285h-3.116v-3.622h3.116v-2.672c0-3.1 1.894-4.788 4.662-4.788 1.324 0 2.462.098 2.792.142v3.24l-1.917.001c-1.503 0-1.794.715-1.794 1.763v2.313h3.587l-.468 3.622h-3.119v9.285h6.117c.73 0 1.326-.596 1.326-1.326v-21.348c0-.73-.596-1.326-1.326-1.326z"/>
              </svg>
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition duration-300 inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 text-gray-300" viewBox="0 0 24 24">
                <path d="M20.947 8.305c.013.177.013.354.013.531 0 5.438-4.139 11.709-11.709 11.709-2.328 0-4.492-.676-6.324-1.854.33.038.66.051.998.051 1.937 0 3.718-.66 5.13-1.776-1.813-.038-3.336-1.23-3.862-2.873.253.038.506.064.772.064.369 0 .733-.051 1.073-.139-1.888-.379-3.304-2.051-3.304-4.06v-.051c.555.303 1.19.485 1.869.506-1.11-.742-1.849-2.013-1.849-3.456 0-.762.204-1.469.555-2.081 2.018 2.474 5.031 4.1 8.43 4.273-.064-.303-.102-.62-.102-.947 0-2.279 1.849-4.127 4.127-4.127 1.19 0 2.265.506 3.017 1.318.937-.178 1.82-.525 2.614-.998-.303.948-.948 1.742-1.793 2.265.829-.102 1.623-.317 2.359-.639-.555.818-1.249 1.524-2.034 2.098z"/>
              </svg>
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition duration-300 inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 text-gray-300" viewBox="0 0 24 24">
                <path d="M12 2.163c-5.464 0-9.84 4.376-9.84 9.84 0 5.463 4.376 9.84 9.84 9.84 5.464 0 9.84-4.376 9.84-9.84 0-5.464-4.376-9.84-9.84-9.84zm0 18.12c-4.586 0-8.28-3.694-8.28-8.28s3.694-8.28 8.28-8.28 8.28 3.694 8.28 8.28-3.694 8.28-8.28 8.28zm2.016-13.497h-4.033c-1.1 0-1.99.891-1.99 1.99v4.033c0 1.1.891 1.99 1.99 1.99h4.033c1.1 0 1.99-.891 1.99-1.99v-4.033c0-1.1-.891-1.99-1.99-1.99zm.953 6.023c0 .517-.42.937-.937.937h-4.033a.936.936 0 0 1-.937-.937v-4.033c0-.517.42-.937.937-.937h4.033c.517 0 .937.42.937.937v4.033z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
