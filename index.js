const axios = require('axios');
const envconfig = require('dotenv/config');
// import axios from 'axios';

let apiKey = process.env.API_KEY

const config = {
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
    "Ocp-Apim-Subscription-Key": apiKey
  }
}

const body = {
  "search": "(search string~ OR search string*) AND nutsCodes:(FI1*) AND cpvCodes:(03111*) AND mainType:(ContractNotices OR PriorInformationNotices OR ContractAwardNotices)",
  "filter": "isLatest eq true and (includesFrameworkAgreement eq true or includesDynamicPurcharingSystem eq true)",
  "top": "5",
  "count": "true",
  "searchMode": "any",
  "orderby": "datePublished desc"

}

axios.post('https://api.hankintailmoitukset.fi/avp/notices/docs/search', body, config)
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response));
