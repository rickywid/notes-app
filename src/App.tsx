import { FunctionComponent, useEffect, useState } from 'react';
import { Box, Grid } from '@chakra-ui/react';
import './App.css';
import Card from './components/card';
import { PriorityLevel } from './components/priorityIcon';
import Navbar from './components/navbar';

export interface INote {
    id?: string;
    title: string;
    description: string;
    body: string;
    createdAt: string;
    priority: PriorityLevel;
}

const App: FunctionComponent = () => {

    const [storage, setStorage] = useState<INote[]>([]);

    useEffect(() => {

        /**
         * Check if notes array exists in localStorage.
         * localStorage can only store strings. You must convert the 
         * empty array into a string using JSON.stringify().
         */
        if (!localStorage.getItem('notes')) {
            localStorage.setItem('notes', JSON.stringify([]));
        } else {
            setStorage(JSON.parse(localStorage.getItem('notes') || '{}'));
        }
    }, []);

    const displayNotes = () => {
        return storage.map((note: INote, i) => {
            return <Card
                key={i}
                index={i}
                deleteNote={deleteNote}
                updateNote={updateNote}
                {...note}
            />
        });
    }

    const getNotes = () => {
        const data: INote[] = JSON.parse(localStorage.getItem('notes') || '{}');
        return data ? data : [];
    }


    /**
     * Keep localStorage and storage state in sync 
     * and re-render component whenever localStorage data changes.
     */
    const setNotes = (note: INote[]) => {
        localStorage.setItem('notes', JSON.stringify(note));
        setStorage(note);
    }

    const addNote = (data: INote) => {
        const { title, body, description, createdAt, priority } = data;
        const notes = getNotes();

        /**
         * Get the id of the last note and increment the new note id + 1
         */
        const note = notes[notes.length - 1];
        const newId = notes.length ? (parseInt(note.id as string) + 1).toString() : '1';

        const newNote: INote = {
            id: newId,
            title,
            description,
            body,
            priority: priority as PriorityLevel,
            createdAt
        }

        setNotes([...getNotes(), newNote]);
    }

    const deleteNote = (index: number) => {
        const data = getNotes();
        data.splice(index, 1);
        setNotes(data);
    }

    const updateNote = (index: number, note: INote) => {
        let data = getNotes();
        data[index] = note;
        setNotes(data);
    }

    return (
        <Box p={10}>
            <Navbar addNote={addNote} />
            <Box mt={5} >
                {storage.length ?
                    <Grid
                        templateColumns="repeat(8, 1fr)"
                        gap="3"
                    >
                        {displayNotes()}
                    </Grid>
                    :
                    "No notes"
                }
            </Box>
        </Box>
    );
}

export default App;
