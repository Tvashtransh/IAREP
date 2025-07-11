import React from 'react';
import Select from 'react-select';

interface OptionType {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: OptionType[];
  value: OptionType | null;
  onChange: (option: OptionType | null) => void;
  placeholder?: string;
  isDisabled?: boolean;
  name?: string;
  className?: string;
}

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    minHeight: '40px',
    fontSize: '16px',
    '@media (max-width: 768px)': {
      fontSize: '13px',
      minHeight: '32px',
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    fontSize: '16px',
    '@media (max-width: 768px)': {
      fontSize: '13px',
    },
    zIndex: 9999,
  }),
  option: (provided: any) => ({
    ...provided,
    fontSize: '16px',
    '@media (max-width: 768px)': {
      fontSize: '13px',
    },
  }),
};

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  placeholder,
  isDisabled,
  name,
  className,
}) => {
  // SSR safety for menuPortalTarget
  const menuPortalTarget = typeof window !== 'undefined' ? document.body : undefined;
  return (
    <Select
      options={options}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      isDisabled={isDisabled}
      name={name}
      className={className}
      styles={customStyles}
      isSearchable={false}
      menuPortalTarget={menuPortalTarget}
      menuPosition="fixed"
    />
  );
};

export default CustomSelect; 