import PropTypes from 'prop-types';
import '../styled-components/link.scss';


export default function Link({ relatedLink }) {
    return (
        <a 
            className='link' 
            href={relatedLink.reference}>
                {relatedLink.name}
        </a>
    )
}

Link.propTypes = {
    relatedLink: PropTypes.object.isRequired,
}



