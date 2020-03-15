function insert(num) {
    document.form.textview.value = document.form.textview.value + num
}

function equal() {
    let main = document.form.textview.value;
    if (main) {
        document.form.textview.value = eval(main)
    }
}

function c() {
    document.form.textview.value = ""
}

function blank() {
    let main = document.form.textview.value;
    document.form.textview.value = main.substring(0, main.length - 1)
}
