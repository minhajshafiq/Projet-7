import { Link } from "react-router-dom";
import LocationsDatas from '../data/logements.json';
import './apartmentCard.scss';

function LocationsListCard() {

    return (
        <section className="card_list">
                {
                LocationsDatas.map((location) =>
                    <Link className="card_overlay" to={"/location/" + location.id} key={location.id}>
                    <img className="card_img" src={location.cover} alt={location.title} />
                    <p className="card_text">{location.title}</p>
                    </Link>
                )
                }
        </section>
    );
}

export default LocationsListCard;