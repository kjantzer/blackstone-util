/*
	Now you too can experience the thrills of proprietary pricing systems!
	
	Written by Aaron, restructured by Kevin
*/

// TODO load this from the same JSON that the server loads
const appleTierIncrements = {
	USD: [
		[0, 30, 0.25],
		[30, 65, 0.5],
		[65, 80, 1.00],
		[80, 92, 5.00],
		[92, 96, 25.00],
		[96, 98, 50.00],
		[98, 100, 100.00]
	]
};

const __test_cases = [
	[0,0],
	[7.49, 30],
	[7.51, 31],
	[24.99, 65],
	[25.01, 66],
	[71.85, 87],
	[450.07,100],
	[783.88, 100]
];

/** Now you too can experience the thrills of proprietary pricing systems! **/
module.exports = class AppleTier {
	
	constructor(price, currency="USD"){
		this.price = parseFloat(price)
		this.currency = currency
		
		if( !this.price || this.price < 0 || isNaN(this.price) )
			throw Error('Invalid price: '+price)
			
		if( !appleTierIncrements.hasOwnProperty(currency) )
			throw Error('Unsupported currency: '+currency)
	}

    get tier(){
        const halfPrice = (Math.ceil(this.price*50)/100.0).toFixed(2);

        return this.applePriceTier(halfPrice);
    }

    applePriceTier(price){
        return this._tierFormula(price);
    }

    appleTierPrice(tier){
        return this._priceFormula(tier)
    }

    _getIncrements(){
        return appleTierIncrements[this.currency];
    }

    // These Formulae may seem overly complicated when we could use a large switch statement, but defining them this
    // way is future proofing for when we get updated tier list and tier lists for different currencies

    _priceFormula(n, i=0, sum=0){
        let start,end,inc;
        if(i >= this._getIncrements().length){
            return sum; // Max tier price
        }
        [start,end,inc] = this._getIncrements()[i];
        if(n < end){
            return sum + (n-start)*inc;
        } else {return this._priceFormula(n, ++i, sum+(end-start)*inc)}
    }

    // This formula is a tad inefficient, but considering we only need to calculate a handful at a time it's a moot point
    _tierFormula(p, i=0, lastMax=0){
        let start,end,inc;
        [start,end,inc] = this._getIncrements()[i];
        const max = this.appleTierPrice(end);

        if(p > max){
            if(i >= this._getIncrements().length-1){
                return end; // Max tier
            }
            return this._tierFormula(p,++i, max);
        } else {return Math.ceil((p-lastMax)/inc+start)}

    }

    __test(){
        const failed = [];
        for(let i=0; i<this.__test_cases.length; i++){
            let input, expected;
            [input, expected] = this.__test_cases[i];
            const result = this.applePriceTier(input);
            if(result !== expected){
                failed.push({expected: expected, got: result});
            }
        }
        if(failed.length === 0){
            console.log("Passed all test successfully");
        } else{
            console.log("The following prices failed the test: ", failed);
        }
    }

    
}