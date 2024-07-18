const form = document.querySelector("form");
const changeInput = document.querySelector("#chooseImg");

function thousandK(value) {
    return value.slice(0, -3) + "K";
}

changeInput.addEventListener("change", evt => {
    document.getElementById("showChoosenImg").src = URL.createObjectURL(evt.target.files[0]);
});

form.addEventListener("submit", evt => {
    evt.preventDefault();
    let followersValue = evt.target.followers.value;
    let postsValue = evt.target.posts.value;
    const usernameValue = evt.target.username.value;
    const modifiedUsername = `@${usernameValue}`;

    if (postsValue.endsWith("000")) {
        postsValue = thousandK(postsValue);
    }

    if (followersValue.endsWith("000")) {
        followersValue = thousandK(followersValue);
    }

    const data = {
        img: evt.target.img.src,
        followers: followersValue,
        posts: postsValue,
        username: modifiedUsername,
        bio: evt.target.bio.value
    }
    window.localStorage.setItem('userData', JSON.stringify(data))
    location.pathname = './result.html'

});

function selectOption(option) {
    document.getElementById('dropdownInput').value = option;
}