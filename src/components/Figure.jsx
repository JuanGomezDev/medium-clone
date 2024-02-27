import PropTypes from 'prop-types';
import '../styled-components/figure.scss';


export default function Figure({ figureImg, imgCaption  }) {
    return (
        <figure>
            <img src={figureImg} alt={imgCaption}/>
            <figcaption>{imgCaption}</figcaption>
        </figure>
    )
}

Figure.propTypes = {
    figureImg: PropTypes.string.isRequired,
    imgCaption: PropTypes.string.isRequired,
}
