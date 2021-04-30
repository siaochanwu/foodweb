export default function(num) {
    const n = Number(num);
    return 'NT$ ' + n.toFixed(0).replace(/(\d)(?=(\d{3})+\.)/g, "$1, ") + " 元"
}