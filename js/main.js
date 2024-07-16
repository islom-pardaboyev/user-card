let form = document.querySelector("form");

function thousandK(value) {
    const newValue = value.slice(0, -3) + "K";
    return newValue
}

form.addEventListener("submit", evt => {
    evt.preventDefault();
    const followersValue = evt.target.followers.value;
    const postsValue = evt.target.posts.value;
    if(postsValue.endsWith("000")){
        console.log(thousandK(postsValue));
    }
    if (followersValue.endsWith("000")) {
        console.log(thousandK(followersValue))
    }
});

function selectOption(option) {
    document.getElementById('dropdownInput').value = option;
}

