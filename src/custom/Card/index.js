import { Card } from "@mui/material";
import React from "react";

const CustomCard = (props) => {
    const { style, children, ...rest } = props;
    return (
        <Card style={style} {...rest}>
        {children}
        </Card>
    );
    }

export default CustomCard;
