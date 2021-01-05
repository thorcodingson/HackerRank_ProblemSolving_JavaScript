 function staircase(n) {

        for (let i = 0; i < n; i++) {
            
            let str = '';
            for (let  j = 1;  j <= n;  j++) {
                if(j < n-i) str += ' ';
                else str += '#';
            }
            console.log(str);
        }

}

staircase(16);