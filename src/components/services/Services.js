import React from 'react'
import "./Services.css"

export default function Services() {
    const servicesNames = [
        { servicesName: "Ручное бронирование", rating: 11 },
        { servicesName: "Пакетные туры", rating: 3 },
        { servicesName: "Отели", rating: 1 }]
    let amount = 0
    servicesNames.map(service => {
        amount += service.rating
        return amount
    })
    return (
        <div className="services-container">
            <div className="services">
                <div className="services-title">
                    <div>Услуг</div>
                </div>
                <div className="sevices-chart-container">
                    {servicesNames.map(service => {
                        return (
                            <div className="services-chart">
                                <div style={{ backgroundColor: (service.rating > 5) ? "#B1E19B" : "#ACE2F8", width: (service.rating * 20) + "px" }} className="services-name"><p>{service.servicesName}</p></div>
                                <div className="services-rating">{service.rating}</div>
                            </div>
                        )
                    })}
                </div>
                <div className="services-amount">
                    <div>Всего</div>
                    <div>{amount}</div>
                </div>
            </div>
        </div >
    )
}
