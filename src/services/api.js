import axios from "axios";

axios.defaults.baseURL = "https://cms.ksaizegem.be";

async function getGeleidingen() {
  const { data } = await axios.get(`/items/geleidingen?sort=sort`);
  return data.data;
}

async function getGeleiding(naam) {
  const { data } = await axios.get(`/items/geleidingen?fields=*,activiteiten.*,leiders.*,bestanden.*,bestanden.type.*`, {
    params: {
      filter: {
        naam: {
          "_eq": naam
        }
      }
    },
  });

  return data.data[0];
}

async function getHomePage() {
  const { data } = await axios.get(`/items/homepagina`);
  return data.data;
}

async function getContactPage() {
  const { data } = await axios.get(`/items/contactpagina`);
  return data.data;
}

function getAssetUrl(id, download = false) {
  return `https://cms.ksaizegem.be/assets/${id}${download ? "?download" : ""}`;
}

export default { getGeleidingen, getGeleiding, getAssetUrl, getHomePage, getContactPage }