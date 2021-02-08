import * as firebase from "./firebase";
import * as apiCall from "./axios";

const services = {
  ...firebase,
  ...apiCall,
}

export default services