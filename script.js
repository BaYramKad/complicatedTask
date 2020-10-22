
let rDom = Math.floor(100 * Math.random()) + 1;
function randomGame(rDom){
    let count = 10;
    function name(){
        let input = prompt(`"Угадайте число которое загадал компьютер от 1 до 100" У вас ${count} попыток`);
        if (count > 0){
            if (input === null){
                alert("Игра окончена"); 
            }
            count--;
            if(isNaN(input) || input.trim() === ""){
                alert("Введите число!");
            } else if(input == rDom){
                let al = confirm("Поздравляем!!! Вы угадали, Хотели бы сыграть еще ?");
                if (al){
                    location.reload();
                } else {
                    alert("Игра окончена");
                }
            } else if(input > rDom){
                alert(`"Загаданное число меньше" Осталось ${count} попыток`);
            } else if(input < rDom){
                alert(`"Загаданное число больше" Осталось ${count} попыток`);
            }  
            name();
        } else if (count <= 0) {
            let exit = confirm("Попытки закончились, хотите сыграть еще?");
            console.log(exit);
            if (exit){
                location.reload();
            } else {
                alert("Игра окончена"); 
            }
        } 
    }
    return name();
}
randomGame(rDom);