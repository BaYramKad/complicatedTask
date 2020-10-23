function randomGame(){ 
    let rDom = Math.floor(100 * Math.random()) + 1;
    let count = 10;
    let input;
    function result(){
        input = prompt(`"Угадайте число которое загадал компьютер от 1 до 100" У вас ${count} попыток`);
        if (count > 0){
            if (input === null){
                alert("Игра окончена"); 
            } 
            count--;
            if(isNaN(input) || input.trim() === ""){
                alert("Введите число!");
                result();
            } else if(input > rDom){
                alert(`"Загаданное число меньше" Осталось ${count} попыток`);
                result();
            } else if(input < rDom){
                alert(`"Загаданное число больше" Осталось ${count} попыток`);
                result();
            } else if(input == rDom){
                let cong = confirm("Поздравляем!!! Вы угадали, Хотели бы сыграть еще ?");
                if (cong){
                    location.reload();
                } else {
                    alert("Игра окончена");
                }
            }
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
    result();
}
randomGame();