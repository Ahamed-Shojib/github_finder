class UI{
    constructor(){
        this.profile = document.getElementById('git_profile');
    }
    showProfile(user){
        this.profile.innerHTML = 
        `<div class="card card-body">
            <div class='row'>
                <div class='col-md-3 my-1'>
                    <img style='border-radius: 50%;' class='img-fluid' src='${user.avatar_url}'>
                    <a href="${user.html_url}" class="btn btn-primary d-block my-2 p-2" target="_blank">View Profile</a>
                </div>
                    <div class="col-md-9">
                        <span class="badge bg-success">Public Report : ${user.public_repos}</span>
                        <span class="badge bg-warning">Follower : ${user.followers}</span>
                        <span class="badge bg-secondary">Following : ${user.following}</span>
                        <span class="badge bg-danger">Public Gists : ${user.public_gists}</span>
                        <br>
                        <ul class="list-group my-2">
                            <li class="list-group-item">Company : ${user.company}</li>
                            <li class="list-group-item">Website/Blog : ${user.blog}</li>
                            <li class="list-group-item">Location : ${user.location}</li>
                        </ul>
                    </div>
            </div>
        </div>`;
    }
}