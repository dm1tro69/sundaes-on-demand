import React, {useEffect, useState} from 'react';
import axios from "axios";
import ScoopOption from "./ScoopOption";
import {Row} from "react-bootstrap";
import ToppingOptions from "./ToppingOptions";
import AlertBanner from "../common/AlertBanner";
import {pricePerItem} from "../../constans";
import {useOrderDetails} from "../../context/OrderDetails";

const Options = ({optionType}) => {

    const [items, setItems] = useState([])
    const [error, setError] = useState(false)

    const [orderDetails, updateItemCount] = useOrderDetails()

    useEffect(() => {
        axios.get(`http://localhost:3030/${optionType}`)
            .then(response => setItems(response.data))
            .catch(err => {
                setError(true)
            })
    }, [optionType])

    if (error) {
        return <AlertBanner/>
    }

    const ItemComponent = optionType === 'scoops'? ScoopOption : ToppingOptions

    const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase()

    const optionItems = items.map((item) => {
        return (
            <ItemComponent
                key={item.name}
                name={item.name}
                imagePath={item.imagePath}
                updateItemCount={(itemName, newItemCount) => updateItemCount(itemName, newItemCount, optionType)}/>
        )
    })

    return (
        <>
            {title}
            <p>{pricePerItem[optionType]} each</p>
            <p>{title} total: {orderDetails.totals[optionType]}</p>
        <Row>
            {optionItems}
        </Row>
        </>
    );
};

export default Options;
