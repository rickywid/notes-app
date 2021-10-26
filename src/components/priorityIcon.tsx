import { FunctionComponent } from "react";

export type PriorityLevel = "low" | "medium" | "high";

interface PriorityIconProps {
    priority: PriorityLevel;
}

const PriorityIcon: FunctionComponent<PriorityIconProps> = ({ priority }) => {
    return (
        <div>{priority}</div>
    );
}

export default PriorityIcon;