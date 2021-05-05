import { createAction } from 'redux-actions'

export function createAsyncAction (actionType, apiFunc, cb) {
    return (payload) => createAction(actionType, async () => {
        const data = await apiFunc(payload);
        payload = null;

        if (data.code === 0) {
            return cb(data.data);
        }
    });
}
