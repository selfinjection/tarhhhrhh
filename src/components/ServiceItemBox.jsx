const ServiceItemBox = ({service}) => {
    return (
        <div className="box">
            <div className="s-item">
                <img className="services-icon" src={service.img_link} />
                <div className="s-item_content">
                    <h3>{service.service_name}</h3>
                    <p>{service.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceItemBox