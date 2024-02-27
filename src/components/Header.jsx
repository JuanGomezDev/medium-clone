import PropTypes from 'prop-types';
import '../styled-components/header.scss';


export default function Header({title = 'Titulo del articulo'}) {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
