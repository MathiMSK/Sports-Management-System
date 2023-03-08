/* eslint-disable react/no-children-prop */
import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import MDButton from "components/MDButton";
import CustomInput from "custom/Input";
import { InputGroupText,InputGroup, Input } from "reactstrap";
import SearchIcon from '@mui/icons-material/Search';
export function SearchBar({ globalFilter, setGlobalFilter }, props) {
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);
  const { variant, children, ...rest } = props;
  return (
    <>
      <InputGroup className="searchCon" style={{ width: "200px", paddingBottom: "20px" }} {...rest}>
        <InputGroupText
          style={{
            height: "42px",
            backgroundColor: "transparent",
            borderColor: "transparent",
            paddingLeft: 0,
            width: "100%",    
            paddingRight: "0px"
          }}
          children={
            <>
              <Input
                type="search"
                className="mass"
              
                value={value || ""}
                onChange={(e) => {
                  setValue(e.target.value);
                  onChange(e.target.value);
                }}
                placeholder={`Search records...`
              }
              />
              
            </>
          }
        />
      </InputGroup>
    </>
  );
}
