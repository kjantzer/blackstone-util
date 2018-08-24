/*
	ISBN
	
	@author Kevin Jantzer, Ryan Farmer – Blackstone Publshing
	
	let isbn = new ISBN('978-1-5385-0785-8')
	
	isbn.isValid
	isbn.to13
	isbn.to10
	isbn.formatted
*/

module.exports = class ISBN extends String {
	
	constructor(isbn){
		super(ISBN.normalize(isbn))
	}
	
	get isValid(){
		return ISBN.isValid(this)
	}
	
	get to13() {
		return ISBN.to13(this)
	}
	
	get to10(){
		return ISBN.to10(this)
	}
	
	get formatted(){
		return ISBN.formatted(this)
	}
	
	static formatted(isbn){
		
		isbn = ISBN.normalize(isbn)
		
		if( isbn.length == 13 )
			return isbn.replace(/([0-9]{3})([0-9])([0-9]{4})([0-9]{4})([0-9X])/g, '$1-$2-$3-$4-$5')
		if( isbn.length == 10 )
			return isbn.replace(/([0-9])([0-9]{4})([0-9]{4})([0-9X])/g, '$1-$2-$3-$4');
	}
	
	static normalize(isbn){
		
		// if already instance of isbn, then its been normalized already
		if( isbn instanceof ISBN ) return isbn
		
		if( !isbn ) return ''
		
		if( typeof isbn == 'number' )
			isbn = isbn.toString()
		
		isbn = isbn.trim()
		isbn = isbn.replace(/-/g, '')
		
		return isbn
	}
	
	static isValid(isbn){

        if(!isbn) return false;
		
		isbn = ISBN.normalize(isbn)

        var isbn = isbn.replace(/-\s/g, '').trim();

        if(isbn.length == 10){

            var incr = 0, sum = 0, i;

            for (i = 10; i > 0; i -= 1) {

                var num = isbn[incr];
                if(incr == 9)
                    num = isbn[9] == 'X' ? 10 : isbn[9];

                sum += ( i * parseInt(num) );
                incr += 1;
            }
            return (sum % 11) == 0;
        }
        else if(isbn.length == 13){

            var check, i;
            check = 0;
            for (i = 0; i < 13; i += 2) {
              check += +isbn[i];
            }
            for (i = 1; i < 12; i += 2){
              check += 3 * +isbn[i];
            }
            return check % 10 === 0;
        }
        else return false;

    }
	
	static to13(isbn){
		
		isbn = ISBN.normalize(isbn)

        if( !ISBN.isValid(isbn) )
            return ISBN();
        else{

            var isbn = isbn.replace(/-/g, '').trim(),
                len = isbn.length;

            //already an ISBN 13?, return it
            if( len == 13)
                return new ISBN(isbn);
			
			 //not a 10?, return undefined
            if(len != 10)
                return new ISBN;

            var i = "978" + isbn.toString().substring( 0, 9),
                pre =  parseInt(i[1]) + parseInt(i[3]) + parseInt(i[5]) + parseInt(i[7]) + parseInt(i[9]) + parseInt(i[11]),
                sum = 3 * pre + parseInt(i[0]) + parseInt(i[2]) + parseInt(i[4]) + parseInt(i[6]) + parseInt(i[8]) + parseInt(i[10]),
                check = parseInt(sum) % 10;
            
        if (check != 0) {
            check = 10 - check;
        }

        return new ISBN(i + check.toString());
       }

   }
   
   static to10(isbn){
	   
	   isbn = ISBN.normalize(isbn)

	   if( !ISBN.isValid(isbn) )
		   return undefined;
	   
	   var isbn = isbn.replace(/-/g, '').trim(),
	   len = isbn.length;

	   //already an ISBN 10?, return it
	   if( len  == 10)
		   return new ISBN(isbn);
		   
	   if(len != 13 || isbn.substring(0, 3) != '978') //not a 13 or wrong prefix?, return undefined
		   return new ISBN;

	   //we have a valid 13, process it and return a 10
	   let i = isbn.toString().substring(3);

	   let sum = parseInt(i[0])*1 + parseInt(i[1])*2 + parseInt(i[2])*3 + parseInt(i[3])*4 + parseInt(i[4])*5 + parseInt(i[5])*6 + parseInt(i[6])*7 + parseInt(i[7])*8 + parseInt(i[8])*9;

	   let check = sum % 11;
	   
	   if (check == 10) {
		   check = "X";
	   }

	   return new ISBN(i.substring(0, i.length-1) + check.toString());
   }
}