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
} from '@chakra-ui/react';
import { INote } from "../App";
import { PriorityLevel } from "./priorityIcon";

export type ModalView = 'new' | 'edit' | 'view' | unknown;

interface ModalCProps extends INote {
    view: ModalView;
    index: number;
    updateNote: (index: number, note: INote) => void;
}

const ModalC: FunctionComponent<ModalCProps> = ({ id, title, body, description, createdAt, priority, index, updateNote }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [updateTitle, setTitle] = useState<string>(title);
    const [updateBody, setBody] = useState<string>(body);
    const [updateDescription, setDescription] = useState<string>(description);
    const [updatePriority, setPriority] = useState<PriorityLevel>(priority);

    return (
        <>
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
                        <Button onClick={() => updateNote(index, { id, title: updateTitle, body: updateBody, description: updateDescription, priority: updatePriority as PriorityLevel, createdAt: (new Date()).toString() })}>Save</Button>
                    </ModalFooter>
        </>
    );
}

export default ModalC;