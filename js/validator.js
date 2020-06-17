
function sprwadzTowarName(){
    var formularz_obj = document.getElementById("inputTowar");
    var t_name = formularz_obj.value;
    t_name.required = true;
    var blad = document.getElementById("towar_name_blad");

    let letters = /^[A-Za-z]+$/;
    if(t_name === ""){
        blad.innerHTML = "Podaj nazwe towaru";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = true;
    }
    else if (t_name.length > 10){
        blad.innerHTML = "Za długa nazwa (max 10 znaków)";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = true;
    }
    else if (!t_name.match(letters)){
        blad.innerHTML = "Podaj nazwę bez cyfr";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = true;
    }
    else{


        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "";
        blad_danych = false;
    }
    return blad_danych;
}

function sprawdzTowarKod() {
    var formularz_obj = document.getElementById("inputKodTowaru");
    var t_kod = formularz_obj.value;
    t_kod.required = true;
    var blad = document.getElementById("towar_kod_blad");

    var objRegExp = /^\d{2}-\d{2}$/


    if(objRegExp.test(t_kod)){

        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "";
        blad_danych = false;

    }
    else if(t_kod ===""){
        blad.innerHTML = "Podaj kod towaru";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = true;
    }
    else{
        blad.innerHTML = "Błędny kod (XX-XX)";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = true;
    }

    return blad_danych;
}

function sprawdzCenaNetto() {
    var formularz_obj = document.getElementById("inputCenaNetto");
    var cena_netto = formularz_obj.value;
    cena_netto.required = true;
    var blad = document.getElementById("cena_netto_blad");

    var objRegExp = /^[0-9]+$|^[0-9]*(\.)?[0-9]?[0-9]+$/
    var obj2RegExp = /^[0-9]+$/

    if(objRegExp.test(cena_netto)){
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "";

        if(obj2RegExp.test(cena_netto)){
            reszta = ".00";
            formularz_obj.value = cena_netto.concat(reszta);
        }

        blad_danych = false;
    }
    else if (cena_netto === ""){
        blad.innerHTML = "Podaj cenę netto";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = true;
    }
    else{
        blad.innerHTML = "Błąd wprowadzonej kwoty";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = true;
    }

    return blad_danych;
}

function sprawdzVat() {
    var formularz_obj = document.getElementById("inputVat");
    var vat = formularz_obj.value;
    vat.required = true;
    var blad = document.getElementById("vat_blad");

    var objRegExp = /^\d{2}$|^\d{1}$/
    var format = /[%]/

    if(objRegExp.test(vat) || format.test(vat)){
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "";

        if(!format.test(vat)){
            procent = "%";
            formularz_obj.value = vat.concat(procent);
        }

        blad_danych = false;
    }
    else if(vat === ""){
        blad.innerHTML = "Podaj wartość VAT";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");

        blad_danych = true;
    }
    else{
        blad.innerHTML = "Błąd wprowadzonej wartości VAT";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");

        blad_danych = true;
    }
    return blad_danych;
}

function sprawdzCenaBrutto(){

    var formularz_obj = document.getElementById("inputCenaBrutto");
    var vat = document.getElementById("inputVat").value;
    var netto = document.getElementById("inputCenaNetto").value;

    if(netto === "" || vat === ""){
        formularz_obj.value = 0.00;
    }
    else{
        n = parseFloat(netto);
        v = parseFloat(vat);

        v = (v + 100)/100;

        wynik = n * v;

        formularz_obj.value = wynik.toFixed(2);
    }
    // dodać info czy dodane jest vat i netto?
}

function sprawdzKategoriaTowaru(){
    var formularz_obj = document.getElementById("inputKategorie");
    var blad = document.getElementById("blad_kategoria");


    if(formularz_obj.value === ""){
        //alert("ehs");
        blad.innerHTML = "Wybierz opcję ";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");

        blad_danych = true;
    }
    else if (formularz_obj.value !== ""){
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "";
        //alert("wwww");
        blad_danych = false;
    }

    return blad_danych;
}

function sprawdzOpcjeTowaru(){
    var formularz_obj = document.getElementById("checkBoxes");
    var blad = document.getElementById("blad_opcji");

    var box1 = document.getElementById("inlineBox1");
    var box2 = document.getElementById("inlineBox2");
    var box3 = document.getElementById("inlineBox3");
    var box4 = document.getElementById("inlineBox4");
    var box5 = document.getElementById("inlineBox5");

    let check_two_options = 0;

    if(box1.checked === true){
        check_two_options++;
    }
    if(box2.checked === true){
        check_two_options++;
    }
    if(box3.checked === true){
        check_two_options++;
    }
    if(box4.checked === true){
        check_two_options++;
    }
    if(box5.checked === true){
        check_two_options++;
    }

    if(check_two_options < 2){
        blad.innerHTML = "Zaznacz co najmniej 2 opcje";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");

        blad_danych = true;
    }
    else{
        blad.innerHTML = "";
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");

        blad_danych = false;
    }

    return blad_danych;
}

function sprawdzOcenaTowaru(){
    let formularz_obj = document.getElementsByClassName("Test");
    let test = document.getElementById("test");
    let blad = 0;
    let i;
    for(i=0; i < formularz_obj.length; i++){
        //alert(formularz_obj[i].value);
        if(formularz_obj[i].checked === true){
            blad_danych = false;
            test.innerHTML = "Poprawnie";
            return blad_danych;
        }
    }
    blad_danych = true;
    return blad_danych;
}

function validForm(){
    let valid = false;
    blad = sprwadzTowarName();
    if(blad === true){valid = true;}

    blad = sprawdzTowarKod();
    if(blad === true){valid = true;}

    blad = sprawdzCenaNetto();
    if(blad === true){valid = true;}

    blad = sprawdzVat();
    if(blad === true){valid = true;}

    blad = sprawdzKategoriaTowaru();
    if(blad === true){valid = true;}

    blad = sprawdzOpcjeTowaru();
    if(blad === true){valid = true;}

    return valid;
}

function checkboxForm(){
    let listCheckbox = document.getElementsByClassName(" checkboxOpcja");
    let checkboxString = "";
    for(let i=0; i<listCheckbox.length; ++i){
        if(listCheckbox[i].checked === true){
            checkboxString = checkboxString + listCheckbox[i].value + " ";
        }
    }

    return checkboxString;
}

function radioForm(){
    let listRadio = document.getElementsByClassName("radioOcena");
    let radioString = "";
    for(let i=0; i<listRadio.length; ++i){
        if(listRadio[i].checked === true){
            radioString = listRadio[i].value;
            break;
        }
    }
    return radioString;
}

function przyciskFormularz(){

    let valid = validForm();

    let checkboxString = checkboxForm();
    let radioString = radioForm();

    if(valid === false){
        //alert("good");
        let test = document.getElementsByClassName("nameTowar");
        let name = document.getElementById("inputTowar").value;
        let towarInTable = document.getElementById("towarInTable");

        for (let i=0; i<test.length; ++i){
            if(test[i].innerHTML === name){
                towarInTable.innerHTML = "Towar jest w tabeli";
                //alert("juz jest w tabeli");
                return false;
            }
        }


        let buttonUsun = "<button class='btn btn-danger btn-sm btn-block' onclick=\"removeRow(this)\">Usuń</button>";
        let buttonEdytuj = "<button class='btn btn-info btn-sm btn-block'  onclick=\"editRow(this)\">Edytuj</button>";
        let buttonKoszyk = "<button class='btn btn-primary btn-sm btn-block' onclick=\"addToStorage(this)\">Koszyk</button>";
        $(function () {

                var row = "<tr role='row'><td class='nameTowar'>" +
                    document.getElementById("inputTowar").value + "</td><td>" +
                    document.getElementById("inputKodTowaru").value + "</td><td>" +
                    document.getElementById("inputCenaNetto").value + "</td><td>" +
                    document.getElementById("inputVat").value + "</td><td>" +
                    document.getElementById("inputCenaBrutto").value + "</td><td>" +
                    document.getElementById("inputKategorie").value + "</td><td>" +
                    checkboxString + "</td><td>" +
                    radioString + "</td><td>" +
                    buttonUsun + "</td><td>" +
                    buttonEdytuj + "</td><td>" +
                    buttonKoszyk + "</td><td>" +
                    "</td></tr>",

                    $row = $(row),
                    resort = true;
                $('#myTable')
                    .find('tbody').append($row);

                clearForm();
                return false;
        })
    }
    else{
        //alert("not good");
    }
}

function sortowanie() {
    let option = document.getElementById('sortChoice');
    let i = option.selectedIndex;

    switch (option.options[i].value) {
        case '0' :
            $("#myTable").trigger("sorton", [ [[4,0]] ]);
            break;
        case '1':
            $("#myTable").trigger("sorton", [ [[4,1]] ]);
            break;
        case '2':
            $("#myTable").trigger("sorton", [ [[7,0]] ]);
            break;
        case '3':
            $("#myTable").trigger("sorton", [ [[7,1]] ]);
            break;
        case '4' :
            $("#myTable").trigger("sorton", [ [[0,0]] ]);
            break;
        case '5':
            $("#myTable").trigger("sorton", [ [[0,1]] ]);
            break;
    }
}

function removeRow(btn){
   let row = btn.parentNode.parentNode;
   //alert(row.cells[0].innerHTML);
   row.parentNode.removeChild(row);
}

function clearForm() {
    document.getElementById("myForm").reset();
}

function editRow(btn) {
    let nazwa_towaru = document.getElementById("inputTowar");
    let kod_towaru = document.getElementById("inputKodTowaru");
    let netto = document.getElementById("inputCenaNetto");
    let vat = document.getElementById("inputVat");
    let kategoria = document.getElementById("inputKategorie");
    let opcje = document.getElementsByClassName("checkboxOpcja");
    let ocena = document.getElementsByClassName("radioOcena");

    let row = btn.parentNode.parentNode;

    nazwa_towaru.value = row.cells[0].innerHTML;
    kod_towaru.value = row.cells[1].innerHTML;
    netto.value = row.cells[2].innerHTML;
    vat.value = row.cells[3].innerHTML;
    sprawdzCenaBrutto();

    let opts = kategoria.options;
    for(let j = 0; j < opts.length; j++){
        let opt = opts[j];
        if(opt.value === row.cells[5].innerHTML){
            kategoria.selectedIndex = j;
            break;
        }
    }

    let str = row.cells[6].innerHTML;
    let opt1 = str.slice(0, 8);
    let opt2 = str.slice(9, 17);

    for(let i = 0; i < opcje.length; i++){
        if(opcje[i].value === opt1){
            opcje[i].checked = true;
        }
        if(opcje[i].value === opt2){
            opcje[i].checked = true;
        }
    }

    for(let i = 0; i < ocena.length; i++){
        if(ocena[i].value === row.cells[7].innerHTML){
            ocena[i].checked = true;
            break;
        }
    }

    let editBtn = document.getElementById("Edit");
    editBtn.style.visibility = "visible";

    let addBtn = document.getElementById("Validate");
    addBtn.style.visibility = "hidden";
    test = row;
}

let test;
function addEditRow() {

    let valid = validForm();
    let btn = document.getElementById("towarInTable");
    if(valid === false){
        btn.innerText = "";
        test.cells[0].innerHTML = document.getElementById("inputTowar").value;
        test.cells[1].innerHTML = document.getElementById("inputKodTowaru").value;
        test.cells[2].innerHTML = document.getElementById("inputCenaNetto").value;
        test.cells[3].innerHTML = document.getElementById("inputVat").value;
        test.cells[5].innerHTML = document.getElementById("inputKategorie").value;

        test.cells[6].innerHTML = checkboxForm();
        test.cells[7].innerHTML = radioForm();

    }else{
        btn.innerText = "Niepoprawne dane";
    }
}

class Item{
    constructor(row){
        this.name = row.cells[0].innerHTML;
        this.brutto = row.cells[4].innerHTML;
        this.sztuk = 1;
    }
}

function addToStorage(btn){

    if(typeof(Storage) !== "undefined"){

        let row = btn.parentNode.parentNode;
        let item = new Item(row);


        $('[data-toggle="popover"]').on('shown.bs.popover', function() {
            setTimeout(function() {
                $('.popover').popover('hide');
            }, 600);
        });

        window.localStorage.setItem(item.name, JSON.stringify(item));

    }else{

    }
}



function koszyk() {

    let tab = document.getElementById("koszyk-tab");
    let body = tab.getElementsByTagName('tbody');
    let len = window.localStorage.length;

    if(len === 0){
        //console.log("empty");
        tab.style.visibility = "hidden";
        $("#koszyk-tab tbody tr").remove();
    }else{
        //console.log("----------not empty----------");
        tab.style.visibility = "visible";

        let rowLen = tab.tBodies[0].rows.length;
        //console.log("length storage: " + len  + " length rows: " + rowLen );
        let state = 0;

            for(let i = 0; i < len; i++){
                state = 0;
                let key = window.localStorage.key(i);
                let item = JSON.parse(window.localStorage.getItem(key));

                if(rowLen !== 0){
                    rowLen = tab.tBodies[0].rows.length;
                    //console.log("jestem (" + item.name + ")");
                    for(let j = 0; j < rowLen; j++){
                        //console.log("Who are you (" + tab.tBodies[0].rows[j].cells[0].innerHTML + ")");
                        if(item.name === tab.tBodies[0].rows[j].cells[0].innerHTML){
                            state = -1;
                        }
                    }
                }

                if(state === 0){
                    let row = tab.tBodies[0].insertRow(rowLen);
                    let name = row.insertCell(0);
                    let brutto = row.insertCell(1);
                    let sztuki = row.insertCell(2);

                    name.innerHTML = item.name;
                    brutto.innerHTML = item.brutto;
                    sztuki.innerHTML = "<input type=\"number\" value=\"1\" min=\'1\'onclick=\"cenaZakupow()\"/>";
                }
            }
    }
}

function cenaZakupow() {

    let cenaAll = document.getElementById("cenaZakupu");
    let tab = document.getElementById("koszyk-tab");
    let rowLen = tab.tBodies[0].rows.length;
    let cena = 0;
    let st = 0;
    let dost = 0;
    let all = 0;

    for(let i = 0; i < rowLen; ++i){
        cena = parseFloat(tab.tBodies[0].rows[i].cells[1].innerHTML);
        st = parseInt(tab.tBodies[0].rows[i].cells[2].firstChild.value);
        all += cena * st;
    }

    let dostawa = document.getElementsByClassName("dostawa");
    for(let j = 0; j < dostawa.length; ++j){
        if(dostawa[j].checked === true){
            dost = parseFloat(dostawa[j].value);
        }
    }

    all += dost;
    all = Math.round(all * 100)/100;
    cenaAll.innerHTML = "Cena: " + all.toString();

}

function clearLocalStorage() {

    window.localStorage.clear();
    setTimeout( function() {
        $('#modalSuccess').modal('hide');
    },
        1200
    );


}

