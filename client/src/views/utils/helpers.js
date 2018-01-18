import axios from 'axios'

const helpers = {
	
	runVideoQuery: function() {
    return axios.get("/videos");
  },
}

export default helpers;