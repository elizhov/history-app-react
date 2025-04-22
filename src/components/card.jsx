
const Card = ({ title, details }) => {
    return (
        <div className="card">
            <h3 className="card-title">{title}</h3>
            <p className="card-content">{details}</p>
        </div>
    );
};

export default Card;
