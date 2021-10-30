import { Box } from "@chakra-ui/react";
import { FunctionComponent } from "react";

export type PriorityLevel = "low" | "medium" | "high";

interface PriorityIconProps {
    priority: PriorityLevel;
}

const PriorityIcon: FunctionComponent<PriorityIconProps> = ({ priority }) => {

    const displayBgColour = () => {
        if (priority === 'low') {
            return "#74e774";
        }

        if (priority === 'medium') {
            return "#f3b04d";
        }

        if (priority === 'high') {
            return "#ff7c7c";
        }
    }

    return (
        <Box
            height={2}
            width={2}
            borderRadius="50%"
            background={displayBgColour()}
        />
    );
}

export default PriorityIcon;