import { useEffect } from "react"
import { useSelector } from "react-redux"

import { loadEntitys, removeEntity } from "../store/entity.actions"
import { EntityList } from "../cmps/entity-list"

import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"

export function EntityIndex() {
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

    return <section className="entity-index">
        <EntityList entitys={entitys} onRemoveEntity={onRemoveEntity}
            onEditEntity={onEditEntity} />
    </section>
}