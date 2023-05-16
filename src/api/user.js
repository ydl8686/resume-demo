import base from './base'
import axios from '../request/http';
import qs from "qs"; 

const user = {
  articleList() {
    return axios.get(`${base.bd}`);
  },
  articleDetail(id, params) {
    return axios.get(`${base.sq}/topic/${id}`, {
      params: params,
    });
  },
  login(params) {
    return axios.post(`${base.sq}/accesstoken`, qs.stringify(params));
  },
};

export default user;
