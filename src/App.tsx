import { FunctionComponent, useEffect, useState } from 'react';
import { Box, Grid, Select, Flex, Text } from '@chakra-ui/react';
import Card from './components/card';
import { PriorityLevel } from './components/priorityIcon';
import Navbar from './components/navbar';
import notesMock from './notes';
import NoNotes from './components/noNotes';
import BgPicker from './components/bgPicker';
import NotesCount from './components/notesCount';

export interface INote {
    id?: string;
    title: string;
    description: string;
    body: string;
    createdAt: string;
    priority: PriorityLevel;
}

export type BgImageType = "skull" | "skull2" | "skull3" | "skull4" | "skull5" | "skull6" | "skull7";

const App: FunctionComponent = () => {

    const [storage, setStorage] = useState<INote[]>([]);
    const [bgImg, setBgImg] = useState<BgImageType>("skull");
    const [filter, setFilter] = useState<PriorityLevel | "none">("none");

    useEffect(() => {

        /**
         * Check if notes array exists in localStorage.
         * localStorage can only store strings. You must convert the 
         * empty array into a string using JSON.stringify().
         */
        if (!localStorage.getItem('notes')) {
            localStorage.setItem('notes', JSON.stringify([]));
            generateNotes();
        } else {
            setStorage(JSON.parse(localStorage.getItem('notes') || '{}'));
        }
    }, []);

    const filterCards = (cards: INote[]) => {
        if (filter === "none") return storage;
        return cards.filter(card => card.priority === filter);
    }

    const displayNotes = () => {
        return filterCards(storage).map((note: INote, i) => {
            return <Card
                key={note.id}
                index={i}
                deleteNote={deleteNote}
                updateNote={updateNote}
                {...note}
            />
        });
    }

    const generateNotes = () => {
        localStorage.setItem('notes', JSON.stringify(notesMock));
        setStorage(notesMock);
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

    const setBackground = (image: BgImageType) => {
        console.log('set bg');
        setBgImg(image);
    }

    return (
        <Box
            p={10}
            minHeight="100vh"
            bg={`#1a1c1f URL('${bgImg}.png') no-repeat center`}
            bgSize={600}
        >
            <BgPicker
                setBackground={setBackground}
                bgImage={bgImg}
            />
            <NotesCount count={storage.length}/>
            <Navbar
                addNote={addNote}
                setBackground={setBackground}
                bgImage={bgImg}
            />
            <Box
                mt={10}
                mb={10}
            >
                <Flex
                    alignItems="center"
                    float="right"
                    mb={35}
                >
                    <Text
                        color="gold"
                        fontSize="lg"
                        mr={5}
                    >
                        Filter
                    </Text>
                    <Select
                        size="sm"
                        defaultValue="none"
                        onChange={(e) => setFilter(e.target.value as PriorityLevel)}
                        border="none"
                        background="white"
                        width={200}
                    >
                        <option value="none">All</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </Select>
                </Flex>
                <Box style={{ clear: "both" }}>
                    {storage.length ?
                        <Grid
                            templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
                            gap="5"
                        >
                            {displayNotes()}
                        </Grid>
                        :
                        <Flex height="65vh">
                            <NoNotes />
                        </Flex>
                    }
                </Box>
            </Box>
        </Box>
    );
}

export default App;
