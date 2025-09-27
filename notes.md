const calculateInput = () => {

    1. Read string (display.textContent)
    2. Split string by each *, +, -, /
    3. a) IF two strings are separated by + THEN add
       b) IF two strings are separated by - THEN subtract 
       c) IF two strings are separated by * THEN multiply 
       d) IF two strings are separated by / THEN add divide

       Priority:
       1.()
       2. * /
       3.  + -

   
-------


IF (char is Operator)
    IF (currentNumber !empty) {
        PUSH currentNumber to tokens[]
        SET currentNumber to empty
    } else {
        if (char ===)
    }


    currentNumber += char
    PUSH currentNumber to tokens[]





}