import { Flex, Heading, Image } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import ghost from "../ghost.png";

interface NotesCountProps {
    count: number;
}

const NotesCount: FunctionComponent<NotesCountProps> = ({ count }) => {
    return (
        <Flex
            alignItems="center"
            position="absolute"
            display={{
                base: "none",
                md: "flex"
            }}
            bottom="40px"
            left="40px"
            zIndex={1}
        >
            <Image
                height={10}
                src={ghost}
                transform="scaleX(-1)"
                marginRight={3}
            />
            <Heading as="h6" size="md" color="gold">{count}</Heading>
        </Flex>
    );
}

export default NotesCount;