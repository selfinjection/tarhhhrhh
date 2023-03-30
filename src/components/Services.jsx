import ServiceItemBox from "./ServiceItemBox"

const Services = ({services}) => {

    return (
        <div className="services container">
            <div className="services-intro flex-c items-mb-25">
                <h2>Our services</h2>
                <div className="line"></div>
                <p>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
            </div>
            <div className="services-items">
                {
                    Object.keys(services).map(serviceid => 
                    <ServiceItemBox 
                    key={serviceid} 
                    service={services[serviceid]} />
                    )
                }
            </div>
            <div className="services-learn_more">
                <p className="button-transperent">Learn more</p>
            </div>
        </div>
    )
}

export default Services