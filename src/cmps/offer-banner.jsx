export function OfferBanner() {
    const offersContent = [
        {
            name: 'natural',
            head: 'Get Garden Fresh Fruits',
        },
        {
            name: 'offer',
            head: 'Get 10% off on Vegetables',
        }
    ]

    return <ul className="offer-banner">
        {offersContent.map(offer =>
            <li className="offer-preview" key={offer.name}>
                <img src={require(`../assets/imgs/${offer.name}.jpg`)} alt="" />
                <div className={offer.name}>
                    <span className="yellowtail">{`${offer.name}!!`}</span>
                    <h3>{offer.head}</h3>
                </div>
            </li>
        )}
    </ul>
}