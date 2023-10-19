//Fatch the id.......
let button = document.getElementById('searchMe');
let input_value = document.getElementById('git_search');
let ui = new UI();
// Add eventListener ..........
button.addEventListener('click',fatchAPI);
//input_value.addEventListener('keyup',fatchValue);

function fatchAPI(){
    if(input_value.value!=''){
        fetch(`https://api.github.com/users/${input_value.value}`)
        .then(result => result.json())
        .then(data =>{
            if(data.message === 'Not Found'){
                //Error Message
                ui.showAlert('Profile Not found!','alert alert-danger');
                input_value.value = '';
                ui.clearProfile();
            }else{
                //Show Profile
                ui.showProfile(data);
                input_value.value = '';
            }
        })
        
    }else{
        //Clear Profile
        input_value.value = '';
        ui.clearProfile();
    }
}
