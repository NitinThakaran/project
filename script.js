
const getCovidData=async ()=>{
   const res= await fetch("https://api.covid19india.org/data.json");
    const actualData=await res.json();
    console.log(actualData.statewise);
    const data=actualData.statewise;
    if(data.length>0){
        var temp="";

        data.forEach((element) => {
            temp+="<tr>";
            temp+="<td>"+element.state+"</td>";
            temp+="<td>"+element.active+"</td>";
            temp+="<td>"+element.confirmed+"</td>"
            temp+="<td>"+element.recovered+"</td>";
            temp+="<td>"+element.deaths+"</td>";
            temp+="<td>"+element.lastupdatedtime+"</td></tr>";
        });
        document.getElementById("table_data").innerHTML=temp;

    }
}

getCovidData();

