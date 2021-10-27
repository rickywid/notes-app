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
import { AnimatePresence, motion } from "framer-motion"

import PriorityIcon, { PriorityLevel } from './priorityIcon';
import { INote } from "../App";

export type ModalView = 'new' | 'edit' | 'view' | unknown;

interface CardProps extends INote {
    index: number;
    deleteNote: any;
    updateNote: (index: number, note: INote) => void;
}

const Card: FunctionComponent<CardProps> = ({
    id,
    title,
    body,
    description,
    createdAt,
    priority,
    index,
    deleteNote,
    updateNote }) => {

    const MotionBox = motion(Box)
    const [updateTitle, setTitle] = useState<string>(title);
    const [updateBody, setBody] = useState<string>(body);
    const [updateDescription, setDescription] = useState<string>(description);
    const [updatePriority, setPriority] = useState<PriorityLevel>(priority);
    const [modalView, setModalView] = useState<ModalView>('edit');
    const { isOpen, onOpen, onClose } = useDisclosure();

    const createMarkup = (markup: string) => {
        return { __html: markup };
    }

    const displayModalView = (view: ModalView) => {
        return view === 'edit' ? modalEditCardView() : modalCardView();
    }

    const handleSave = () => {
        updateNote(index, { id, title: updateTitle, body: updateBody, description: updateDescription, priority: updatePriority as PriorityLevel, createdAt: (new Date().getTime()).toString() });
        onClose();
    }

    const truncateString = (text: string) => {
        const length = 100;
        return text.length > length ? `${text.substr(0, length)}...` : text;
    }

    const modalEditCardView = () => {
        return (
            <>
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
                        <FormControl id="priority">
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
                        <Button onClick={handleSave}>Save</Button>
                    </ModalFooter>
                </ModalContent>
            </>
        )
    }

    const modalCardView = () => {
        return (
            <>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>{description}</Text>
                        <hr />
                        <div dangerouslySetInnerHTML={createMarkup(marked(body))} />
                        <Text>{priority}</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Text fontSize="smaller">{moment(parseInt(createdAt)).format('lll')}</Text>
                    </ModalFooter>
                </ModalContent>
            </>
        )
    }

    const handleEditClick = () => {
        onOpen();
        setModalView('edit');
    }

    const handleOpenCard = () => {
        onOpen();
        setModalView('view');
    }

    return (
        <AnimatePresence>
            <MotionBox
                key={1}
                _hover={{ cursor: 'pointer' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                    opacity: 0,
                    transition: { duration: 4 }

                }}
            >
                <Box
                    onClick={handleOpenCard}
                    borderRadius={10}
                    bg="#fff"
                    p={4}
                    height={145}
                >
                    <Flex
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Heading as="h4" size="sm" mb={4}>{title}</Heading>
                        <PriorityIcon priority={priority} />
                    </Flex>
                    <Text color="grey">{truncateString(description)}</Text>
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
                            onClick={handleEditClick}
                            _hover={{
                                color: "#000",
                                cursor: "pointer"
                            }}
                        />
                    </Box>
                </Flex>
                <Modal isOpen={isOpen} onClose={onClose} size="full">
                    {displayModalView(modalView)}
                </Modal>
            </MotionBox>
        </AnimatePresence>
    );
}

export default Card;