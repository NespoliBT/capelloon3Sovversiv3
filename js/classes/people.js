import ComplexEntity from './complexEntity.js'

class People extends ComplexEntity {
    constructor(x, y, w, h, s, state, id) {
        super(x, y, w, h, s, state, id)
    }
}

export default People