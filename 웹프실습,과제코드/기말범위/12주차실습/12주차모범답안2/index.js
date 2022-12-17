function Student(name, webp, iteng, chang, isu1) {
    this.name = name;
    this.webp = parseInt(webp);
    this.iteng = parseInt(iteng);
    this.chang = parseInt(chang);
    this.isu1 = (Student.prototype.OS === undefined) ? undefined : isu1;

    this.sum = function(){
        let a = this.webp + this.iteng + this.chang;
        if (Student.prototype.OS !== undefined && this.isu1 !== undefined) a += parseInt(isu1);
        return a;
    }
}

function isu1Button() {
    const isu1_name = window.prompt("새로 추가할 과목 이름을 입력하세요", "OS");
    Student.prototype[isu1_name] = 0;
}

function add() {
    const name = document.getElementById("name").value;
    const webp = document.getElementById("webp").value;
    const iteng = document.getElementById("iteng").value;
    const chang = document.getElementById("chang").value;
    const isu1 = document.getElementById("isu1").value ? document.getElementById("isu1").value : undefined;
    const student = new Student(name, webp, iteng, chang, isu1);

    arr.push(student);
    console.log(arr);
}
function search() {
    document.getElementsByTagName("table")[0].remove();
    const table = document.createElement("table");
    const head = document.createElement("tr");
    head.innerHTML = "<th>학생 이름</th><th>웹프로그래밍</th><th>IT 영어</th><th>창업 실습</th><th>OS</th><th>합계</th>"
    table.appendChild(head);

    document.getElementsByTagName("body")[0].appendChild(table);

    for (let i of arr) {
        const target = document.getElementById("search_name").value;
        if ( i.name.indexOf(target) < 0 ) continue;

        const tr = document.createElement("tr");
        const name = document.createElement("td");
        const webp  = document.createElement("td");
        const iteng = document.createElement("td");
        const chang = document.createElement("td");
        const isu1 = document.createElement("td");
        const sum = document.createElement("td");

        name.innerHTML = i.name;
        webp.innerHTML = i.webp;
        iteng.innerHTML = i.iteng;
        chang.innerHTML = i.chang;
        isu1.innerHTML = i.isu1;
        sum.innerHTML = i.sum();

        tr.appendChild(name);
        tr.appendChild(webp);
        tr.appendChild(iteng);
        tr.appendChild(chang);
        tr.appendChild(isu1);
        tr.appendChild(sum);

        table.appendChild(tr);
    }
}   

const arr = [];

document.getElementById("save").addEventListener("click", add);
document.getElementById("search").addEventListener("click", search);
document.getElementById("isu1_button").addEventListener("click", isu1Button);