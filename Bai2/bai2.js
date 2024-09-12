var no = 0;
var total = 0;
function add() {
    no++
    var pname = frm.pname.value;
    var qty = parseFloat(frm.qty.value);
    var price = parseFloat(frm.pp.value);
    var sub = qty * price;
    total+=sub;
    var row = "<tr>";
    row += "<td>" + no + "</td>";
    row += "<td>" + pname + "</td>";
    row += "<td>" + qty + "</td>";
    row += "<td>" + price + " VND</td>";
    row += "<td>" + sub + " VND</td>";
    row += "</tr>";
    document.getElementById("tbl").innerHTML += row;
    document.getElementById("total").innerHTML = total + " VND";

}





