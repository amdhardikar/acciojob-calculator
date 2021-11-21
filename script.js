var input = document.getElementById('display');
var buttons = document.querySelectorAll('#btn');

var op, button_value;

for (const x of buttons) {
   x.addEventListener('click', () => {
      button_value = x.innerHTML;

      switch (button_value) {
         case '+':
            input.value += '+';
            break;

         case '−':
            input.value += '-';
            break;

         case '×':
            input.value += '*';
            break;

         case '÷':
            input.value += '/';
            break;

         case '=':
            op = eval(input.value);
            input.value = op.toString();
            break;

         case 'ac':
            input.value = '';
            break;

         default:
            input.value += button_value;
            break;
      }
   });
}
