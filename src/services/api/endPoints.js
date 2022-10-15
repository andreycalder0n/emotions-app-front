//end ponits diccionario
const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
  },
  thoughts: {
    getThought: (id) => `${API}/api/${VERSION}/thoughts/${id}`,
    getThoughts: `${API}/api/${VERSION}/thoughts`,
    addThought: `${API}/api/${VERSION}/thoughts`,
    updateThought: (id) => `${API}/api/${VERSION}/thoughts/${id}`,
    deleteThought: (id) => `${API}/api/${VERSION}/thoughts/${id}`,
  },
  products: {
    getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    getProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
  },
  emotions: {
    getEmotion: (id) => `${API}/api/${VERSION}/emotions/${id}`,
    getEmotions: `${API}/api/${VERSION}/emotions`,
  },

};

export default endPoints;
