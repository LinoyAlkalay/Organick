import oranges from '../assets/imgs/oranges.jpg'
import organic from '../assets/imgs/organic.svg'
import quality from '../assets/imgs/quality.svg'

export function HomePageAbout() {
    const aboutUsList = [
        {
            id: 101,
            head: 'Organic Foods Only',
            txt: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
            img: organic
        },
        {
            id: 102,
            head: 'Quality Standards',
            txt: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
            img: quality
        }
    ]

    return <section className="home-page-about full main-layout">
        <img className="full" src={oranges} alt="" />
        <section className="content">
            <span className="yellowtail">About Us</span>
            <h2>We Believe in Working Accredited Farmers</h2>
            <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
            <ul className="about-list">
                {aboutUsList.map(about =>
                    <li key={about.id}>
                        <img src={about.img} alt="" />
                        <div>
                            <h6>{about.head}</h6>
                            <span>{about.txt}</span>
                        </div>
                    </li>
                )}
            </ul>
            <button className="btn-dark">Shop Now</button>
        </section>
    </section>
}