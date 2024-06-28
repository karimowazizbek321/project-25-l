


const num = prompt('ведите число')

if (isNaN(num)) {
    
    alert('введите цифру')
    
}else{
    if(num % 2 === 0){
        alert('четное')
    }else{
        alert('нечетное')
    }
}