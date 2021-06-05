import axios from "axios";
import interceptors from "./interceptors";

const instance = axios.create({
 
});

interceptors(instance);

export default instance;
