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
    Text,
    Flex,
    Heading,
    Image,
    FormHelperText
} from '@chakra-ui/react';
import { AddIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion"
import { BgImageType, INote } from '../App';
import { PriorityLevel } from './priorityIcon';
import hat from '../hat.png';

interface NavbarProps {
    addNote: (data: INote) => void;
    setBackground: (image: BgImageType) => void;
    bgImage: BgImageType;
}

const Navbar: FunctionComponent<NavbarProps> = ({ addNote, setBackground, bgImage }) => {

    const MotionButton = motion(Button);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [priority, setPriority] = useState<PriorityLevel>("low");
    const [errorMsg, setErrorMsg] = useState<string>("");

    const handleAddNote = (e: any) => {
        try {
            e.preventDefault();
            validateForm();
            const data = {
                title,
                description,
                body,
                priority,
                createdAt: (new Date().getTime()).toString()
            }
            addNote(data);
            setErrorMsg("");
            onClose();
        } catch (e: any) {
            setErrorMsg(e.message);
        }
    }

    const validateForm = () => {
        if (!title || !body || !description) {
            throw Error('All fields required');
        }
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
                        src={hat}
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
                        SPOOKY NOTES
                    </Heading>
                </Flex>
                <MotionButton
                    onClick={onOpen}
                    _hover={{ background: "gold" }}
                    size="md"
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
                    <form onSubmit={(e) => handleAddNote(e)}>
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
                                <Textarea placeholder="" onChange={(e) => setBody(e.target.value)} />
                                <FormHelperText>Markdown supported</FormHelperText>
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
                            {errorMsg ?
                                <Text color="red" marginRight={20}>{errorMsg}</Text> :
                                ""
                            }
                            <Button colorScheme="blue" mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button type="submit" colorScheme="yellow" onClick={(e) => handleAddNote(e)}>Save</Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </nav >
    );
}

export default Navbar;