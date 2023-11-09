const ItemCard = ({x}) => {
    return <div>
        <div>
            <img
                src={x.link}
                className="card__image"
                alt='clothing items' />
        </div>
        <div className="card__name">{x.name}</div>
    </div>;
}

export default ItemCard;