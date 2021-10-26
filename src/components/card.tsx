import { FunctionComponent, useState } from "react";
import {
    Box,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    Select,
    Textarea,
    Flex,
    Text,
    Heading
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import marked from 'marked';
import moment from "moment";
import PriorityIcon, { PriorityLevel } from './priorityIcon';
import { INote } from "../App";

interface CardProps extends INote {
    index: number;
    deleteNote: any;
    updateNote: (index: number, note: INote) => void;
}

const Card: FunctionComponent<CardProps> = ({ id, title, body, description, createdAt, priority, index, deleteNote, updateNote }) => {

    const [updateTitle, setTitle] = useState<string>(title);
    const [updateBody, setBody] = useState<string>(body);
    const [updateDescription, setDescription] = useState<string>(description);
    const [updatePriority, setPriority] = useState<PriorityLevel>(priority);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const createMarkup = (markup: string) => {
        return { __html: markup };
    }

    const handleUpdate = () => {

    }
    
    return (
        <Box>
            <Box
                border="1px solid #888"
                p={4}
            >
                <Heading as="h4" size="sm">{title}</Heading>
                <Text>{description}</Text>
                {/* {body ? <div dangerouslySetInnerHTML={createMarkup(marked(body))} /> : ""} */}
                <PriorityIcon priority={priority} />
            </Box>
            <Flex
                justifyContent="space-between"
                alignItems="center"
            >
                <Text 
                    fontSize="smaller"
                    color="#888"
                >{moment(parseInt(createdAt)).format('lll')}</Text>
                <Box>
                    <DeleteIcon
                        mr={1}
                        color="#aaa"
                        onClick={() => deleteNote(index)}
                        _hover={{
                            color: "#000",
                            cursor: "pointer"
                        }}
                    />
                    <EditIcon
                        color="#aaa999"
                        onClick={onOpen}
                        _hover={{
                            color: "#000",
                            cursor: "pointer"
                        }}
                    />
                </Box>
            </Flex>
            {/* MODAL */}

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>New Note</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl id="title">
                            <FormLabel>Title</FormLabel>
                            <Input type="text" defaultValue={title} onChange={(e) => setTitle(e.target.value)} />
                        </FormControl>
                        <FormControl id="description">
                            <FormLabel>Description</FormLabel>
                            <Input type="text" defaultValue={description} onChange={(e) => setDescription(e.target.value)} />
                        </FormControl>
                        <FormControl id="body">
                            <FormLabel>Note</FormLabel>
                            <Textarea placeholder="Here is a sample placeholder" defaultValue={body} onChange={(e) => setBody(e.target.value)} />
                        </FormControl>
                        <FormControl id="body">
                            <FormLabel>Priority</FormLabel>
                            <Select defaultValue="low" onChange={(e) => setPriority(e.target.value as PriorityLevel)}>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </Select>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button onClick={() => updateNote(index, { id, title: updateTitle, body: updateBody, description: updateDescription, priority: updatePriority as PriorityLevel, createdAt: (new Date()).toString() })}>Save</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
}

export default Card;