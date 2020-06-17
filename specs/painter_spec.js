const assert = require('assert')
const Painter = require('../models/painter.js')
const Paint = require('../models/paint.js')
const Room = require('../models/room.js')

describe('painter', function(){

    let painter
    let paint
    let room1

    beforeEach(function(){
        painter = new Painter()
        paint1 = new Paint(40)
        paint2 = new Paint(10)
        room1 = new Room(90)
        room2 = new Room(20)
    })


    describe('Properties', function(){

        it('should start with empty stock', function(){
            const actual = painter.paintStock;
            assert.deepStrictEqual(actual, [])
        })

    })


    describe('Functions', function(){

        it('should add can to stock', function(){
            painter.addPaint(paint1)
            const actual = painter.paintStock;
            assert.deepStrictEqual(actual, [paint1])
        })

        it('should add can to stock', function(){
            painter.addPaint(paint1)
            painter.addPaint(paint2)
            const actual = painter.totalVolume();
            assert.deepStrictEqual(actual, 50)
        })

        it('should be able to cover room', function(){
            painter.addPaint(paint1)
            painter.addPaint(paint2)
            const actual = painter.enoughPaint(room1)
            assert.deepStrictEqual(actual, false)
        })

        it('should be able to paint room', function(){
            painter.addPaint(paint1)
            painter.addPaint(paint2)
            painter.paint(room2)

            assert.deepStrictEqual(actual, false)
        })


    })
    
})