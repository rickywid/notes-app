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
    Heading,
    UnorderedList,
    ListItem
} from '@chakra-ui/react';
import marked from 'marked';
import moment from "moment";
import { AnimatePresence, motion } from "framer-motion"
import { HiDotsHorizontal, HiOutlineTrash, HiOutlinePencil } from "react-icons/hi";
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
    const [optionsVisible, setOptionsVisible] = useState<boolean>(false);
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
        <Box>
            <Box
                borderRadius={10}
                bg="#fff"
                p={4}
                height={175}
                mb={2}
                position="relative"
            >
                <Box
                    onClick={handleOpenCard}
                    _hover={{ cursor: 'pointer' }}
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
                    height={50}
                    width={50}
                    position="absolute"
                    right={0}
                    bottom={0}
                    _hover={{ cursor: 'pointer' }}
                    onClick={() => setOptionsVisible(!optionsVisible)}
                >
                    <HiDotsHorizontal
                        style={{
                            margin: "auto"
                        }}
                    />
                </Flex>
            </Box>
            <Flex
                justifyContent="space-between"
                alignItems="center"
            >
                <Heading
                    as="h6"
                    fontSize={11}
                    color="#888"
                >{moment(parseInt(createdAt)).format('lll')}</Heading>
                <Box position="relative">
                    <AnimatePresence>
                        {optionsVisible && (
                            <MotionBox
                                position="absolute"
                                top={-2}
                                width={132}
                                key={index}
                                initial={{ opacity: 0, y: -15, x: -135 }}
                                animate={{ opacity: 1, y: -8, x: -135 }}
                                exit={{ opacity: 0, y: -10, x: -135 }}
                            >
                                <UnorderedList
                                    margin={0}
                                >
                                    <ListItem
                                        mr={5}
                                        display="inline"
                                        onClick={handleEditClick}
                                        _hover={{ cursor: "pointer", color: "#555" }}
                                        color="gold"
                                    >
                                        <HiOutlinePencil
                                            style={{
                                                display: "inline",
                                                marginRight: "5px"
                                            }} />
                                        <Text
                                            fontSize="smaller"
                                            display="inline"
                                            verticalAlign="middle"
                                        >
                                            Edit
                                        </Text>
                                    </ListItem>
                                    <ListItem
                                        display="inline"
                                        onClick={() => deleteNote(index)}
                                        _hover={{ cursor: "pointer", color: "#555" }}
                                        color="gold"
                                    >
                                        <HiOutlineTrash
                                            style={{
                                                display: "inline",
                                                marginRight: "5px"
                                            }}
                                        />
                                        <Text
                                            fontSize="smaller"
                                            _hover={{ cursor: "pointer", color: "#555" }}
                                            display="inline"
                                            verticalAlign="middle"
                                        >
                                            Delete
                                        </Text>
                                    </ListItem>
                                </UnorderedList>
                            </MotionBox>
                        )
                        }
                    </AnimatePresence>

                </Box>
            </Flex>
            <Modal isOpen={isOpen} onClose={onClose} size="full">
                {displayModalView(modalView)}
            </Modal>
        </Box>
    );
}

export default Card;