function calc(num1,num2)
{
    var sum=0;

    var compare;
    (num1 === num2) ? compare = true : compare = false;

    sum = num1 + num2;

    var compare_one;    
    (sum > 10) ? compare_one = true : compare_one = false;

    var compare_two;
    (sum < 20) ? compare_two = true : compare_two = false;

    if(compare == true && compare_one == true && compare_two == true)
    {
        let answer = "Os números: " + num1 + " e " + num2 + " são iguais. Sua soma é: " + sum + " que é maior que 10 e menor que 20!";
        return answer;
    }else
    {
        if(compare == true && compare_one == true && compare_two == false)
        {
            let answer = "Os números: " + num1 + " e " + num2 + " são iguais. Sua soma é: " + sum + " que é maior que 10 e não é menor que 20!";
            return answer;
        }else
        {
            if(compare == true && compare_one == false && compare_two == true)
            {
                let answer = "Os números: " + num1 + " e " + num2 + " são iguais. Sua soma é: " + sum + " que não é maior que 10 e menor que 20!";
                return answer;
            }
            else
            {
                if(compare == false && compare_one == true && compare_two == true)
                {
                    let answer = "Os números: " + num1 + " e " + num2 + " não são iguais. Sua soma é: " + sum + " que é maior que 10 e menor que 20!";
                    return answer;
                }else
                {
                    if(compare == false && compare_one == true && compare_two == false)
                    {
                        let answer = "Os números: " + num1 + " e " + num2 + " não são iguais. Sua soma é: " + sum + " que é maior que 10 e não é menor que 20!";
                        return answer;
                    }
                    else
                    {
                        let answer = "Os números: " + num1 + " e " + num2 + " não são iguais. Sua soma é: " + sum + " que não é maior que 10 e menor que 20!";
                        return answer;                    
                    }
                }
            }
            
        }
    }
    
}

console.log(calc(2,2));
console.log(calc(11,11));
console.log(calc(6,6));
console.log(calc(7,6));
console.log(calc(9,20));
console.log(calc(5,4));

