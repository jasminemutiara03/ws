var myHeaders = new Headers();
myHeaders.append("Cookie", "connect.sid=s%3AMsnp_KW3uPWTf6gN4GDNl7XAoOShdRL2.VK05aaDbN1FeG%2BScGHtOuxENv5s2ABoZZzLpqN%2FUbZs");

var requestOptions = {
    method: 'GET',
    headers: myHeaders ,
    redirect: 'follow'
  };
  
hasil = ""
txt=""

trtaabel = ` <tr class="hover:bg-gray-50">
<th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
  
  <div class="text-sm">
    <div class="font-medium text-gray-700" id="nama">#TEXT#</div>
  </div>
</th>
</tr>`;
// hasil.articles[0].author

fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population", requestOptions)
  .then(response => response.text())
  .then(result => tampilkan(result))
  .catch(error => console.log('error', error));


function tampilkan(result){
    console.log(result)
    hasil=JSON.parse(result);
    // crot = trtaabel.replace("#text#", hasil.data[1].title)
    txt = hasil.data.forEach(isiintabelnya);
}
function isiintabelnya(value){
    console.log(value)
    txt+= trtaabel.replace("#TEXT#", value.Year)
    document.getElementById("konten").innerHTML=txt;
    return txt

}