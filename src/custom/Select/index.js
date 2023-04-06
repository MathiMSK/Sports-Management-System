import { Typography } from '@mui/material';
import Select from 'react-select';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    background: '#fff',
    borderColor: 'lightgrey',
    marginTop: '5px',
    // borderColor: '#9e9e9e',
    minHeight: '30px',
    height: '43px',
    fontSize: '15px',
    boxShadow: state.isFocused ? null : null,
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    height: '35px',
    padding: '0 6px'
  }),

  input: (provided, state) => ({
    ...provided,
    margin: '0px',
   


  }),
  indicatorSeparator: state => ({
    display: 'none',
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    height: '40px',
  }),
};
const CustomSelect = (props) => {
    const {option,placeholder,disabled,setSelectedOptions,name,selectedOptions,isSearchable,isMulti}=props
    const handleSelect=(data)=>{
        setSelectedOptions(data);
    }
  return (
    <>
    <Typography>{name}</Typography>
    
      <Select
        defaultValue={selectedOptions}
        options={option}
        placeholder={placeholder}
        value={selectedOptions}
        onChange={handleSelect}
        isSearchable={isSearchable}
        isMulti={isMulti}
        isDisabled={disabled}
        styles={customStyles}
      />
</>
  );
};

export default CustomSelect;