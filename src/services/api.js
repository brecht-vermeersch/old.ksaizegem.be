import axios from "axios";

axios.defaults.baseURL = "https://cms.ksaizegem.be";

async function getGeleidingen() {
  const { data } = await axios.get(`/items/geleidingen?sort=sort`);
  return data.data;
}

async function getGeleiding(naam) {
  const { data } = await axios.get(`/items/geleidingen?fields=*,activiteiten.*,leiders.*`, {
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

async function getShopItemsByType() {
  const { data } = await axios.get(`/items/winkel_artikelen_types?fields=*,artikelen.*`);
  return data.data;
}

async function getBestandenByType(geleidingNaam) {
  const { data } = await axios.get(`/items/bestanden_types?fields=*,bestanden.*`, {
    params: {
      filter: {
        bestanden: {
          geleiding: {
            naam: { "_eq": geleidingNaam } 
          }
        }
      }
    }
  });

  return data.data;
}

export default { getGeleidingen, getGeleiding, getAssetUrl, getHomePage, getContactPage, getShopItemsByType, getBestandenByType }