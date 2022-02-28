const loadData =  async() =>{
    const inputFood = document.getElementById('input-search');
    const searchPhone= inputFood.value;
    //Input Data
   console.log(searchPhone);
  const url= ` https://openapi.programming-hero.com/api/phones?search=${searchPhone}`;
 
  const res =await fetch(url);
  const data= await res.json();
  console.log(data.data);

  displayPhoneData(data.data)
}
// Display Data in card Start
const displayPhoneData = (phones) => {
    //   console.log(id);
    phones.forEach((phone) => {
       console.log(phone.slug);
      const displayPhone = document.getElementById('display-phone');
      const div = document.createElement('div');
      div.classList.add('col');
      div.innerHTML = `
      <div class="card" style="width: 18rem">
          <img src="${phone.image}" class="card-img-top" alt="..." />
          <div class="card-body">
          <h5 class="card-title">${phone.brand}</h5>
         
          <button 
          onclick="lodeDetailByIdName('${
            phone.slug
          }')" data-bs-target="#modal-detils" data-bs-toggle="modal" class="btn btn-primary">
          Go Detail
          </button>
          </div>
      </div>
    `;
    displayPhone.appendChild(div);
    });
  };

  //Display Data in card End

  //Display data by id Start

  const lodeDetailByIdName = async (phoneId) => {
       console.log('Phone id'+' ' + phoneId);
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
  
    const res = await fetch(url);
    const data = await res.json();
     displayDetailByIdName(data.data);
    //console.log('DAta'+ ' '+ data.data);
  };
//Featc data by id end

const displayDetailByIdName = (phone) => {
    console.log(phone.slug);
      const cardDataLoad = document.getElementById('phone-detils');
      const div = document.createElement('div');
       div.classList.add('p');
      cardDataLoad.innerText='';
      div.innerHTML = `
          <div class="card" style="width: 18rem">
          <div class="card-body">
          <h5 class="card-title">${phone.slug}</h5>
          <p class="card-text">${phone.name}</p>
          </div>
      </div>
      `;
      cardDataLoad.appendChild(div);
  };



 //Dosplay data by id End


