import './ActorCard.css'

function ActorCard({ actor }) {
    return (
        <div className="ActorCard">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" />
            <h1>{actor}</h1>
        </div>
    );
};

export default ActorCard;