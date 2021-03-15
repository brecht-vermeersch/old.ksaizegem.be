import axios from "axios";

axios.defaults.baseURL = "https://cms.ksaizegem.be";

async function getGeleidingen() {
  const { data } = await axios.get(`/items/geleidingen?sort=sort`);
  return data.data;
}

async function getGeleiding(id) {
  const { data } = await axios.get(`/items/geleidingen/${id}?fields=*,activiteiten.*,leiders.*,bestanden.*,bestanden.type.*`);
  return data.data;
}

async function getHomePage() {
  const { data } = await axios.get(`/items/homepagina`);
  return data.data;
}

async function getContactPage() {
  const { data } = await axios.get(`/items/contactpagina`);
  return data.data;
}

function getAssetUrl(id) {
  return `https://cms.ksaizegem.be/assets/${id}`;
}

export default { getGeleidingen, getGeleiding, getAssetUrl, getHomePage, getContactPage }