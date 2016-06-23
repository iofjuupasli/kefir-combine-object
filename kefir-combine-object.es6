import R from 'ramda';
import Kefir from 'kefir';

export default function combineObject(active, passive = {}) {
    const keys = R.concat(R.keys(active), R.keys(passive));
    return Kefir.combine(R.values(active), R.values(passive))
        .map(R.zipObj(keys));
}
