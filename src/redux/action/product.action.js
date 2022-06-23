import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import * as ActionTypes from '../ActionTypes';

export const fetchProduct = () => async (dispatch) => {
    const querySnapshot = await getDocs(collection(db, "product"));
    let Arr = []
    querySnapshot.forEach((doc) => {
        let data = {
            id: doc.id,
            title: doc.data().title,
            sub_title: doc.data().sub_title,
            description: doc.data().description,
            image_url: doc.data().image_url,
            quantity: doc.data().quantity,
            category: doc.data().category,
            price: doc.data().price,
            rating: doc.data().rating
        }
        Arr.push(data)
        dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: Arr })
    });
}