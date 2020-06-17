const assert = require('assert')
const Paint = require('../models/paint.js')

describe('paint', function(){

    let paint 

    beforeEach(function(){
        paint = new Paint(40)
    })


    describe('Properties', function(){
        it('should have a volume', function(){
            const actual = paint.volume;
            assert.strictEqual(actual, 40)
        })
    })


    describe('Functions', function(){
        it('should check if empty', function(){
            const actual = paint.isEmpty();
            assert.strictEqual(actual, false)
        })

        it('should be able to empty itself', function(){
            paint.empty();
            const actual = paint.isEmpty();
            assert.strictEqual(actual, true)
        })

      
    })
    
})