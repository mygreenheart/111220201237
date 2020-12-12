import React, { useState } from 'react'
import headerLogo from "../../imgs/header_img.png"
import "./Header.css"

export default function Header() {
    const [headerName, setHeaderName] = useState("Вероника Ростова")
    const [headerPosition, setHeaderPosition] = useState("Менеджер по продажам")
    const [headerText, setHeaderText] = useState("Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны")
    return (
        <div className="header">
            <div className="logo">
                <img src={headerLogo} />
            </div>
            <div className="title">
                <h2 className="header-name">{headerName}</h2>
                <p className="header-position">{headerPosition}</p>
                <div className="header-text">
                    <p>{headerText}</p>
                </div>
            </div>
        </div>
    )
}
