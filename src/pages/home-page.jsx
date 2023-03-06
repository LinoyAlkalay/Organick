import { useEffect } from "react"
import { useSelector } from "react-redux"

import { EntityList } from "../cmps/entity-list"
import { HomePageAbout } from "../cmps/home-page-about"
import { HomePageHero } from "../cmps/home-page-hero"
import { OfferBanner } from "../cmps/offer-banner"
import { loadEntitys, removeEntity } from "../store/entity.actions"

import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"

export function HomePage() {
    const entitys = useSelector(storeState => storeState.entityModule.entitys)

    useEffect(() => {
        onLoadEntitys()
    }, [])

    async function onLoadEntitys() {
        try {
            await loadEntitys()
        } catch (err) {
            showErrorMsg('Cannot load entitys', err)
        }
    }

    async function onRemoveEntity(entityId) {
        try {
            await removeEntity(entityId)
            showSuccessMsg('Entity removed')
        } catch (err) {
            showErrorMsg('Cannot remove entity', err)
        }
    }

    async function onEditEntity(entityId) {
        console.log('entityId:', entityId)
    }

    return <section className="home-page full main-layout">
        <HomePageHero />
        <OfferBanner />
        <HomePageAbout />
        <section className="home-page-list">
            <span className="yellowtail">Categories</span>
            <h2>Our Products</h2>
            <EntityList entitys={entitys} onRemoveEntity={onRemoveEntity}
                onEditEntity={onEditEntity} />
                <button className="btn-dark">Load More</button>
        </section>
        <p>dfkjhgbslkjghbvlrdhgbvlrjhbv</p>
    </section >
}