const loadData =  async() =>{
    const inputData = document.getElementById('input-search');
    //error Msg
    const errorDiv = document.getElementById('msgError');
    const searchPhone= inputData.value;
    //Error Msg Condition
    if(searchPhone.trim()==""){
      errorDiv.innerText = "Cant be empty";
      errorDiv.style.display = "block";
    }else{
      errorDiv.style.display = "none";
    }
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
          <h3 class="card-title">${phone.brand}</h3>
          <h5 class="card-title">${phone.phone_name}</h5>
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

  //Display data by id  Start

  const lodeDetailByIdName = async (phoneId) => {
       console.log('Phone id'+' ' + phoneId);
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
  
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
     displayDetailByIdName(data.data);
    //console.log('DAta'+ ' '+ data.data);
  };
//Featc data by id end

const displayDetailByIdName = (phone) => {
    console.log(phone.slug);
      const cardDataLoad = document.getElementById('phone-detils');
      const div = document.createElement('div');
     // div.classList.add('p');
      cardDataLoad.innerText='';
      div.innerHTML = `
      
          <div class="card" id="close-card" style="width: 30rem">
             <div class="card-header">
                 <button class="btn btn-danger onClick="closeCard()" >x</button>
            </div>
          <div class="card-body">
            <div class="d-flex">
             <div>
                <img class="img-fluid" src="${phone.image}" class="card-img-top" alt="phone" />
             </div>
    
             <div class="ps-2">
              <h5 class="card-title">${phone.name}</h5>
               <p class="card-text">${(phone?.releaseDate)? phone.releaseDate:'Release date not found'}</p>
                <h3 class="text-danger">Main Features</h3>
                <p class="card-text"> <b>Storage:</b> 
                ${ (phone?.mainFeatures?.storage) !== undefined ? phone.mainFeatures.storage : 'N/A'}
                      </p>
                      <p class="card-text"> <b>Display:</b> 
                      ${ (phone?.mainFeatures?.displaySize) !== undefined ? phone.mainFeatures.displaySize : 'N/A'}
                          </p>
                          <p class="card-text"> <b>Chipset:</b> 
                          ${ (phone?.mainFeatures?.chipSet) !== undefined ? phone.mainFeatures.chipSet : 'N/A'}
                                </p>
                                <p class="card-text"> <b>Memory:</b> 
                                ${ (phone?.mainFeatures?.memory) !== undefined ? phone.mainFeatures.memory : 'N/A'}
                                    </p>
          </div>
        </div>
      </div>
      `;
      cardDataLoad.appendChild(div);
  };


 //Dosplay data by id End

// card close button
 const closeCard =()=>{
  var x = document.getElementById("close-card");
  x.style.display = "none";
 }


