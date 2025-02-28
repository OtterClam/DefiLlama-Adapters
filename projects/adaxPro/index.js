const { default: axios } = require("axios")

async function fetch(){
    const tvl = (await axios.post("https://amm-api.adax.pro/", {endpoint: "getStatistics", type: "total"})).data
    return tvl[tvl.length-1].tvl_usd
}


module.exports={
    methodology: "Data is retrieved from the api at https://amm-api.adax.pro/",
    timetravel: false, // but there's historical data, this can be changed!
    fetch
}