import PropTypes from 'prop-types';
import Link from './Link';
import '../styled-components/links.scss';


export default function Links({ relatedLinksList }) {
    return (
        <section className="links-container">
            {relatedLinksList.map((link) => {
                return <Link key={link.id} relatedLink={link}/>
            })}
        </section>
    )
}

Links.propTypes = {
    relatedLinksList: PropTypes.array.isRequired,
}



