import { Heading } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface NoNotesProps {

}

const NoNotes: FunctionComponent<NoNotesProps> = () => {
    return (
        <Heading
            as="h2"
            size="4xl"
            color="gold"
            margin="auto"
        >
            No Notes
        </Heading>
    );
}

export default NoNotes;