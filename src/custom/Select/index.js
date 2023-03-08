import { Typography } from '@mui/material';
import Select from 'react-select';

const CustomSelect = (props) => {
    const {option,placeholder,styes,disabled,setSelectedOptions,name,selectedOptions,isSearchable,isMulti}=props
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
        
      />
</>
  );
};

export default CustomSelect;