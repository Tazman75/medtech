import dispatcher from "../dispatcher";
import axios from "axios";

export function reloadProducts() {
  axios("/rest/product/").then((data) => {
    console.log("got the data!", data);
    dispatcher.dispatch({type: "RECEIVE_PRODUCTS", products: data.data})
  });
  // axios("http://someurl.com/somedataendpoint").then((data) => {
  //   console.log("got the data!", data);
  // })
  // http://127.0.0.1:8000/rest/product/?format=json
  // dispatcher.dispatch({type: "FETCH_PRODUCTS"});
  // setTimeout(() => {
  //   dispatcher.dispatch({type: "RECEIVE_PRODUCTS", products: [
  //     {"id":973,"product_name":"Nifedipine","description":"Secondary malig neo lung","cost":"$930.93","manufacturer_url":"http://sourceforge.net"},
  //     {"id":974,"product_name":"Lamotrigine","description":"Cerv incompet preg-unsp","cost":"$238.09","manufacturer_url":"https://instagram.com"},
  //     {"id":975,"product_name":"Divalproex Sodium","description":"Prostatic disorder NOS","cost":"$227.31","manufacturer_url":"http://360.cn"},
  //     {"id":976,"product_name":"CITALOPRAM HYDROBROMIDE","description":"Fx low end femur NOS-opn","cost":"$865.05","manufacturer_url":"http://wisc.edu"},
  //     {"id":977,"product_name":"Ampicillin Sodium","description":"Personality disorder NOS","cost":"$668.44","manufacturer_url":"https://printfriendly.com"},
  //     {"id":978,"product_name":"Benztropine Mesylate","description":"Unspcf anomaly jaw size","cost":"$100.62","manufacturer_url":"http://people.com.cn"},
  //   ]});
  // }, 2000);
}
