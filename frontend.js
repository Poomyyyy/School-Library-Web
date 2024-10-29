let GENRE = {
    'computer': 'วิทยาการคอมพิวเตอร์ สารสนเทศ และงานทั่วไป',
    'philosophy': 'ปรัชญาและจิตวิทยา',
    'religion': 'ศาสนา',
    'social': 'สังคมศาสตร์',
    'language': 'ภาษา',
    'science':'วิทยาศาสตร์',
    'technology':'เทคโนโลยี',
    'art':'ศิลปะและนันทนาการ',
    'literature':'วรรณกรรม',
    'history':'ประวัติศาสตร์และภูมิศาสตร์',
    'novel':'นวนิยาย',
    'shortstory':'เรื่องสั้น'
}

let toggleGenre = false;
let currentGenre;

const body = document.body
const genre = document.getElementById("genre");
const content = document.getElementById("genre-content");

function toggleFilterGenre(toggleGenre) {
    if (content.style.display == "" || content.style.display == "none") {
        content.style.display = "block";
    }else{
        if (toggleGenre == false){
            genre.style.backgroundColor = "#363636";
            genre.getElementsByTagName('p')[0].innerHTML = "หมวดหมู่";
            currentGenre = null;
        }
        content.style.display = "none";
    }
}


function genreSelect(currentGenre) {
    toggleGenre = true;
    genre.style.backgroundColor = "#1782FF";
    console.log(currentGenre);
    content.style.display = "none";
    let outGenre = GENRE[currentGenre];
    let filterBar = document.getElementById("main-filter-bar");

    if (outGenre.length * 7.8 + 10 > filterBar.clientWidth - 300 - 28) {
        let maxLen = Math.floor((filterBar.clientWidth - 300 - 28) / 7.8);

        outGenre = outGenre.slice(0, maxLen + 1) + '...';
    }
    
    genre.getElementsByTagName('p')[0].innerHTML = outGenre;
}

let toggleAvail = true;
function toggleFilterAvail() {
    let avail = document.getElementById("avail");
    if (toggleAvail) {
        toggleAvail = false;
        avail.style.backgroundColor = "#1782FF";
    }else{
        toggleAvail = true;
        avail.style.backgroundColor = "#363636";
    }
}

/*
//create genre
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const para = document.createElement("button");
    para.onclick = "genreSelect('" + element + "')";
    para.innerHTML = element;
    
    document.getElementsById("genre-content").appendChild(para);
}
<button onclick="genreSelect('math')">คณิตศาสตร์</button>
*/

