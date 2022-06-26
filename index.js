const init = () => {


    const imageButton = document.querySelector('#btn1')
 
 
 const form = document.querySelector('form')
 
 form.addEventListener('submit', (e) => {
    e.preventDefault()
 })
 
 
     const getImageFromApi = async () => {
     let randomNumber = Math.floor(Math.random() * 10);
     const res = await fetch("https://api.unsplash.com/search/photos?query=famous/tourism/destinations&client_id=6skgkMHJej6_lVjk5PjNDgCCMZvyt_qZyHhbG3ePsKA");
     
     const responseJson = await res.json();
      let allImages =responseJson.results[randomNumber];
      console.log(allImages.urls.regular)
   
      return allImages.urls.regular
     
   };
 
 
 
    
 imageButton.addEventListener('click', async () =>{
     let randomImage = await getImageFromApi();
   const pictures = document.getElementById('pictures');
   pictures.innerHTML= `
   <div> 
   <img src="${randomImage}" 
                     style="width: 650px; 
                         height: 350px; 
                                box-shadow: 0 8px 5px rgba(104, 104, 104, 0.9); 
                                    border-radius: 15px;"
                                        />
   </div>`
   
 
     
 
 })
 
 
 
  }
  document.addEventListener('DOMContentLoaded', init