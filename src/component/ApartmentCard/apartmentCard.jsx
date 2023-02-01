import { Link } from "react-router-dom";
import LocationsDatas from '../data/logements.json';

function LocationsListCard() {

    return (
        <section className="card-list">
            {
                LocationsDatas.map((location) =>
                    <Link className="card" to={"/location/" + location.id} key={location.id}>
                        <p>{location.title}</p>
                        <img src={location.cover} alt={location.title} />
                    </Link>
                )
            }
        </section>
    );
}

export default LocationsListCard;