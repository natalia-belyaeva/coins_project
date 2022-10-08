import types from "./types"

export function addIdToState (id) {
    return {
        type: types.addIdToState,
        payload: { id: id }
    }
}