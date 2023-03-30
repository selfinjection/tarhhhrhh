import { useState } from "react";

const CustomersReview = ({sliders}) => {
    const slidersLength = Object.keys(sliders).length
    const [currentSlide, setCurrentSlide] = useState(1);

    const isSlideIndexValid = (slideIndex) => {
        console.log(currentSlide)
        return slideIndex >= 1 && slideIndex <= slidersLength;
    };  

    const handleNextSlide = () => {
        if (isSlideIndexValid(currentSlide + 1)) {
            setCurrentSlide(currentSlide + 1);
        }
    };
      
      const handlePrevSlide = () => {
        if (isSlideIndexValid(currentSlide - 1)) {
            setCurrentSlide(currentSlide - 1);
        }
    };
    
    /* 
    const items = []
        for...items.push
    */
    const getItems = () => {
        let items = []
        for (let i = 1; i <= slidersLength; i++) {
            items.push(<div key={i} className={`${i === currentSlide ? 'square-active' : 'square'}`}/>)
        }
        return items
    };
    return (
        <div className="customer-reviews container flex-c pt-250">
            {
            <div>
                <div className="review-box">  
                    <div className="review-box_description">
                        <div className="review-box_description_intro mb-20">
                            <h2>What our customer are saying</h2>
                            <div className="line" />
                        </div>
                        <div className="review-box_content">
                            <div className="review-box_author_info">
                            <div className="review-box_author_img">
                                <img src={sliders[currentSlide].img_link} />
                            </div>
                            <h3>{sliders[currentSlide].author_name}</h3>
                            <p>{sliders[currentSlide].author_role}</p>
                            </div>
                            <p className="review-box_author_text">{sliders[currentSlide].description}</p>
                        </div>
                    </div>
                </div>
                <div className="reviews-buttons">
                    <img id={currentSlide == 1 ? 'arrow-nactive' : ''} src="assets/arrow_left.png" alt="arrow-left" onClick={handlePrevSlide} />
                        <div className="reviews-button_status_items">
                            {getItems().map((item) => item)}
                        </div>
                    <img id={currentSlide == slidersLength ? 'arrow-nactive' : ''} src="assets/arrow_right.png" alt="arrow-right" onClick={handleNextSlide} />
                </div>
            </div>
            }
        </div>
      );
    };

export default CustomersReview