export function EntityPreview({ entity }) {


    const { title, price, img, rate, tags } = entity
    return <>
        <span className="tags">{tags[0]}</span>
        <img src={require(`../assets/imgs/${img}.jpg`)} alt="" />
        <span>{title}</span>
        <div>
            <span>${price}</span>
            <span>{rate}</span>
        </div>
    </>
}