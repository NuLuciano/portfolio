import React from 'react'
import BackToTop from "react-back-to-top-button";

const BackToTopButton = () => {
    return (
        <BackToTop
            showOnScrollUp
            showAt={100}
            speed={1500}
            easing="easeInOutQuint"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '30px'
            }}
        >
            <span className="bx bx-up-arrow-circle"></span>
        </BackToTop>
    )
}

export default BackToTopButton
