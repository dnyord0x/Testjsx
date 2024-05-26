import React, { useState } from 'react';

function CarListForm() {
  const [priceInquiry, setPriceInquiry] = useState(false);
  const [additionalText, setAdditionalText] = useState('');

  const togglePriceInquiry = () => {
    setPriceInquiry(!priceInquiry);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Main Category */}
        <div>
          <label htmlFor="category" className="block text-gray-700">Основна категория</label>
          <select id="category" className="w-full p-2 border rounded-md">
            <option value="cars-and-jeeps">Автомобили и Джипове</option>
            <option value="buses">Автобуси</option>
            <option value="trucks">Камиони</option>
          </select>
        </div>

        {/* Brand, Model, Location, Category, Type */}
        {[
          { id: 'brand', label: 'Марка' },
          { id: 'model', label: 'Модел' },
          { id: 'location', label: 'Местоположение' },
          { id: 'subcategory', label: 'Категория' },
          { id: 'type', label: 'Тип' },
        ].map(({ id, label }) => (
          <div key={id}>
            <label htmlFor={id} className="block text-gray-700">{label}</label>
            <select id={id} className="w-full p-2 border rounded-md">
              <option value="">{label}</option>
              {/* Add relevant options for each field */}
            </select>
          </div>
        ))}

        {/* Price Section */}
        <div className="flex items-center space-x-2">
          <input type="number" name="price" disabled={priceInquiry} className="w-24 p-2 border rounded-md" />
          <select name="currency" disabled={priceInquiry} className="p-2 border rounded-md">
            <option value="bgn">лв.</option>
          </select>
          <label className="flex items-center">
            <input type="checkbox" checked={priceInquiry} onChange={togglePriceInquiry} className="mr-2" />
            <span className="text-gray-700">Цена само при запитване</span>
          </label>
        </div>

        {/* Mileage and Production Date */}
        {[
          { id: 'mileage', label: 'Пробег', type: 'number' },
          { id: 'productionDate', label: 'Година на производство', type: 'number' },
        ].map(({ id, label, type }) => (
          <div key={id}>
            <label htmlFor={id} className="block text-gray-700">{label}</label>
            <input type={type} id={id} className="w-full p-2 border rounded-md" />
          </div>
        ))}

        {/* Additional Text Field */}
        <div className="md:col-span-2">
          <label htmlFor="additionalText" className="block text-gray-700">Допълнителна информация</label>
          <textarea
            id="additionalText"
            value={additionalText}
            onChange={(e) => setAdditionalText(e.target.value)}
            placeholder="Добавете допълнителни детайли за търсенето..."
            className="w-full p-2 border rounded-md h-24"
          />
        </div>
      </div>

      {/* Safety and Comfort Checkboxes (Sectioned) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Безопасност', options: ['GPS система за проследяване', 'Автоматичен контрол на стабилността', 'Адаптивни предни светлини', 'Антиблокираща система', 'Въздушни възглавници - Задни'] },
          { title: 'Комфорт', options: ['Auto Start Stop function', 'Bluetooth / handsfree система', 'DVD, TV', 'Steptronic, Tiptronic', 'USB, audio/video, IN/AUX изводи'] },
          { title: 'Други', options: ['4x4', '7 места', 'Buy back', 'Бартер', 'Газова уредба'] },
          { title: 'Защита', options: ['OFFROAD пакет', 'Аларма', 'Брониран', 'Каско', 'Лебедка'] }
        ].map(({ title, options }) => (
          <div key={title} className="space-y-4">
            <h3 className="text-lg font-medium mb-2">{title}</h3>
            <div className="space-y-2">
              {options.map((option) => (
                <label key={option} className="flex items-center">
                  <input type="checkbox" name={title.toLowerCase()} value={option.toLowerCase().replace(/\s+/g, '-')} className="mr-2" />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarListForm;
