import naturalFood from '../assets/imgs/natural_food.jpg'

export function HomePageHero() {

    return <section className="home-page-hero full main-layout">
        <img className="full" src={naturalFood} alt="" />
        <section className="hero">
            <span className="yellowtail">100% Natural Food</span>
            <h1>Choose the best healthier way of life</h1>
            <button className="btn-regular">Explore Now</button>
        </section>
    </section >
}