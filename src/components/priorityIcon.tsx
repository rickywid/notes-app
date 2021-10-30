import { Box } from "@chakra-ui/react";
import { FunctionComponent } from "react";

export type PriorityLevel = "low" | "medium" | "high";

interface PriorityIconProps {
    priority: PriorityLevel;
}

const PriorityIcon: FunctionComponent<PriorityIconProps> = ({ priority }) => {

    const displayBgColour = () => {
        if (priority === 'low') {
            return "#43a843";
        }

        if (priority === 'medium') {
            return "#f3b04d";
        }

        if (priority === 'high') {
            return "#eb3535";
        }
    }

    return (
        <Box
            height={3}
            width={3}
            borderRadius="50%"
            background={displayBgColour()}
        />
    );
}

export default PriorityIcon;