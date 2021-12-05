function adduser() {
    player1_name_id = document.getElementById("player1_name").value;

    player2_name_id = document.getElementById("player2_name").value;

    localStorage.setItem("player1_name_id",player1_name_id);

    localStorage.setItem("player2_name_id",player2_name_id);

    window.location.replace("index.html");
}