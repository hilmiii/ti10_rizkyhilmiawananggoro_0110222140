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
        setTimeout(() => alert("DRAW"), 250);
    }

    // Jika Pilihan User Menang
    if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        setTimeout(() => alert("USER WIN (Rock beat Scissors)"), 250);
    } else if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        setTimeout(() => alert("USER WIN (Paper beat Rock)"), 250);
    } else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        setTimeout(() => alert("USER WIN (Scissors beat Paper)"), 250);
    }
    
    // Jika Pilihan User Kalah
    else if(pilihanUser == "Scissors" && pilihanKomputer == "Rock"){
        setTimeout(() => alert("USER LOST (Rock Beat Scissors)"), 250);
    } else if(pilihanUser == "Rock" && pilihanKomputer == "Paper"){
        setTimeout(() => alert("USER LOST (Paper beat Rock)"), 250);
    } else if(pilihanUser == "Paper" && pilihanKomputer == "Scissors"){
        setTimeout(() => alert("USER LOST (Scissors beat Paper)"), 250);
    }
}