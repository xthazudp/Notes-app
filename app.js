const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// customize  yargs version
yargs.version('1.1.0')

// add | remove | read | list

// Create a add command
yargs.command({
    command:'add',
    describe:'Add a new note.',
    builder:{
        title:{
            describe:'Note Title',
            demandOption: true,
            type: 'string'
        },

        body:{
            describe:'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        // console.log('Adding a new notes!', argv)
        notes.addNote(argv.title, argv.body)
    }
})

// Create a remove command
yargs.command({
    command:'remove',
    describe:'Remove a note.',
    builder:{
        title:{
            describe:'Note Title to be removed',
            demandOption: true,
            type:'string'
        }
        // body:{
        //     describe:'Body of note to be removed.',
        //     demandOption: false,
        //     type:'string'
        // }
    },
    handler(argv){
        // console.log('Removing a note!')
        notes.removeNote(argv.title)
    }
})

// Create a read command
yargs.command({
    command:'read',
    describe:'Read a note!',
    builder: {
        title:{
            describe:'Note title to be read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        // console.log('Reading a Note.')
        notes.readNote(argv.title)
    }
})

// Create a list command
yargs.command({
    command:'list',
    describe:'List your notes.',
    handler(){
        notes.listNotes()
    }
})
yargs.parse()

// console.log(yargs.argv)