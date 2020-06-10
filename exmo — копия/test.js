let input1 = document.getElementById("result"),
    input2 = document.getElementById("input_field");

input2.oninput = function () {
    input1.value = input2.value * 3.8;
    
};

input1.oninput = function () {
    input2.value = input1.value / 3.8;
    
};
