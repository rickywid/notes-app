import { FunctionComponent, useState } from 'react';
import {
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
    Heading,
    Image
} from '@chakra-ui/react';
import { AddIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion"
import { INote } from '../App';
import { PriorityLevel } from './priorityIcon';
import pumpkin from '../pumpkin.png';

interface NavbarProps {
    addNote: (data: INote) => void;
}

const Navbar: FunctionComponent<NavbarProps> = ({ addNote }) => {

    const MotionButton = motion(Button);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [priority, setPriority] = useState<PriorityLevel>("low");

    const handleAddNote = () => {
        const data = {
            title,
            description,
            body,
            priority,
            createdAt: (new Date().getTime()).toString()
        }
        addNote(data);
    }

    return (
        <nav>
            <Flex
                alignItems="center"
                justifyContent="space-between"
            >
                <Flex
                    alignItems="baseline"
                >
                    <Image
                        src={pumpkin}
                        alt="logo"
                        display="inline"
                        height={35}
                        marginRight="10px"
                    />
                    <Heading
                        as="h1"
                        size="lg"
                        color="gold"
                        mt={-3}
                    >
                        Notes-App
                    </Heading>
                </Flex>
                <MotionButton
                    onClick={onOpen}
                    size="sm"
                    bg="gold"
                    animate={{
                        boxShadow: "0px 0px 17px 10px gold"
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity
                    }}
                ><AddIcon mr={3} />New Note</MotionButton>
            </Flex>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>New Note</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl id="title">
                            <FormLabel>Title</FormLabel>
                            <Input type="text" onChange={(e) => setTitle(e.target.value)} />
                        </FormControl>
                        <FormControl id="description">
                            <FormLabel>Description</FormLabel>
                            <Input type="text" onChange={(e) => setDescription(e.target.value)} />
                        </FormControl>
                        <FormControl id="body">
                            <FormLabel>Note</FormLabel>
                            <Textarea placeholder="Here is a sample placeholder" onChange={(e) => setBody(e.target.value)} />
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
                        <Button onClick={handleAddNote}>Save</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </nav>
    );
}

export default Navbar;