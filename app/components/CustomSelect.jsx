import React, { useState, useRef, useEffect } from 'react';

export default function CustomSelect({ options, value, onChange, placeholder = 'Select...', name }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div ref={ref} className="relative w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
      <button
        type="button"
        className={`w-full px-4 py-3 rounded-md border border-[#DEE3EB] bg-[#F7F9FB] text-[16px] font-normal text-left flex items-center justify-between transition-all focus:outline-none focus:border-[#41E5FF] ${open ? 'border-[#41E5FF] shadow' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        name={name}
      >
        <span className={selectedOption ? 'text-[#23262F]' : 'text-[#6B7280]'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg className={`ml-2 w-5 h-5 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="#23262F" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      {open && (
        <ul
          className="absolute z-50 mt-2 w-full max-h-60 overflow-auto rounded-md border border-[#DEE3EB] bg-white shadow-lg text-[16px] font-normal"
          style={{ minWidth: '100%', maxWidth: '100%' }}
          tabIndex={-1}
          role="listbox"
        >
          {placeholder && (
            <li
              className={`px-4 py-2 text-[#6B7280] cursor-pointer hover:bg-[#F7F9FB] ${!value ? 'bg-[#F7F9FB]' : ''}`}
              onClick={() => { onChange(''); setOpen(false); }}
              role="option"
              aria-selected={!value}
            >
              {placeholder}
            </li>
          )}
          {options.map(opt => (
            <li
              key={opt.value}
              className={`px-4 py-2 cursor-pointer transition-all ${value === opt.value ? 'bg-[#41E5FF] text-white' : 'text-[#23262F] hover:bg-[#F7F9FB]'} rounded-md`}
              onClick={() => { onChange(opt.value); setOpen(false); }}
              role="option"
              aria-selected={value === opt.value}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
} 