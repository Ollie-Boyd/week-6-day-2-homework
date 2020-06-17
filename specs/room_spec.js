const assert = require('assert')
const Room = require('../models/room.js')


describe('room', function(){

    let room;

    beforeEach(function(){
        room = new Room(20, false)
    })

    describe('Properties', function(){

        it('should have an area', function(){
            const actual = room.area;
            assert.strictEqual(actual, 20)
        })

        it('should be painted or not', function(){
            const actual = room.painted;
            assert.strictEqual(actual, false)
        })

        it('can be painted', function(){
            room.paint();
            const actual = room.painted;
            assert.strictEqual(actual, true)
        })

    })

    describe('Functions', function(){




        
    })





})