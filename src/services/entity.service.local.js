import { storageService } from './async-storage.service'
import { utilService } from './util.service'

const STORAGE_KEY = 'entity'

_createEntitys()

export const entityService = {
    query,
    getById,
    save,
    remove,
    getEmptyEntity,
    getDefaultFilter
}

async function query(filterBy = { txt: '' }) {
    let entitys = await storageService.query(STORAGE_KEY)
    if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        entitys = entitys.filter(entity => regex.test(entity.title))
    }
    return entitys
}

function getById(entityId) {
    return storageService.get(STORAGE_KEY, entityId)
}

async function remove(entityId) {
    await storageService.remove(STORAGE_KEY, entityId)
}

async function save(entity) {
    let savedEntity
    if (entity._id) {
        savedEntity = await storageService.put(STORAGE_KEY, entity)
    } else {
        // Later, owner is set by the backend
        // entity.owner = userService.getLoggedinUser()
        savedEntity = await storageService.post(STORAGE_KEY, entity)
    }
    return savedEntity
}

function getEmptyEntity(title = '', price = 0, img = 'broccoli', rate = 4.9, tags = []) {
    return { title, price, img, rate, tags }
}

function getDefaultFilter() {
    return { txt: '' }
}

function _createEntitys() {
    let entitys = utilService.loadFromStorage(STORAGE_KEY)
    if (!entitys || !entitys.length) {
        entitys = []
        entitys.unshift(_createEntity('Zelco Suji Elaichi Rusk', 15.00, 'rusk', 4.3, ['fresh']))
        entitys.unshift(_createEntity('Eggs', 17.00, 'eggs', 4.6, ['fresh']))
        entitys.unshift(_createEntity('Brown Hazelnut', 12.00, 'hazelnut', 4.8, ['nuts']))
        entitys.unshift(_createEntity('Mung Bean', 11.00, 'bean', 4.1, ['health']))
        entitys.unshift(_createEntity('Vegan Red Tomato', 17.00, 'tomato', 4.7, ['vegetable']))
        entitys.unshift(_createEntity('White Nuts', 15.00, 'nuts', 4.5, ['millets']))
        entitys.unshift(_createEntity('Fresh Banana Fruites', 14.00, 'banana', 4.8, ['fresh']))
        entitys.unshift(_createEntity('Calabrese Broccoli', 13.00, 'broccoli', 4.9, ['vegetable']))
        utilService.saveToStorage(STORAGE_KEY, entitys)
    }
}

function _createEntity(title, price, img, rate, tags) {
    const entity = getEmptyEntity(title, price, img, rate, tags)
    entity._id = utilService.makeId()
    return entity
}

