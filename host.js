function askUserName() {
    let userName = localStorage.getItem("userName"); 
    if (!userName) {
        userName = prompt("Введите ваше имя:");
        if (userName && userName.trim() !== "") {
            localStorage.setItem("userName", userName);
        } else {
            userName = "Гость";
        }
    }
    return userName;
}


function displayUserInfo() {
    const userName = askUserName();

 
    const userBlock = document.createElement("div");
    userBlock.id = "user-block";
    userBlock.style.position = "fixed";
    userBlock.style.top = "80px";
    userBlock.style.left = "20px";
    userBlock.style.padding = "20px";
    userBlock.style.background = "rgba(0,0,0,0.6)";
    userBlock.style.color = "#fff";
    userBlock.style.borderRadius = "10px";
    userBlock.style.boxShadow = "0 0 15px rgba(0,0,0,0.5)";
    userBlock.style.zIndex = "1000";
    userBlock.style.maxWidth = "200px";

   
    userBlock.innerHTML = `
        <h3>Привет, ${userName}!</h3>
        <p>Ваш личный рацион:</p>
        <ul>
            <li>Завтрак: овсянка + фрукты</li>
            <li>Обед: курица + овощи</li>
            <li>Ужин: рыба + салат</li>
        </ul>
    `;

    document.body.appendChild(userBlock);
}


window.addEventListener("DOMContentLoaded", displayUserInfo);


