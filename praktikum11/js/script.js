document.querySelectorAll("#option a").forEach((a) => {
    // Jika nanti di klik maka akan menjalankan fungsi computerChoice()
    a.addEventListener("click", (element) => {
        computerChoice(element);
    });
})
function computerChoice(element){
    // Pilihan User
    let pilihanUser = element.target.innerText;

    // Menangkap Elemen result dengan queryselector
    let pilihanKomputer = document.querySelector("#result");

    // Membuat Array Pilihan untuk komputer
    let choices = ["Rock", "Paper", "Scissors"];

    // Pilihan Random Komputer
    pilihanKomputer.innerHTML = choices[Math.round(Math.random() * 2)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    // Jika pilohan user == Komputer (draw)
    if(pilihanUser == pilihanKomputer){
        alert("DRAW");
    }

    // Jika Pilihan User Menang
    if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        alert("USER WIN (Rock beat Scissors)");
    } else if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        alert("USER WIN (Paper beat Rock)")
    } else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        alert("USER WIN (Scissors beat Paper)")
    } else if(pilihanUser == "Scissors" && pilihanKomputer == "Rock"){
        alert("USER LOST (Rock Beat Scissors)")
    } else if(pilihanUser == "Rock" && pilihanKomputer == "Paper"){
        alert("USER LOST (Paper beat Rock)")
    } else if(pilihanUser == "Paper" && pilihanKomputer == "Scissors"){
        alert("USER LOST (Scissors beat Paper)")
    }
}