import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { FunctionComponent, useState } from "react";
import { BgImageType } from "../App";


const variants = {
    initial: { opacity: 0, y: 200 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } },
    exit: { opacity: 0, y: 200, transition: { duration: 1 } }
}

interface BgPickerProps {
    setBackground: (image: BgImageType) => void;
    bgImage: BgImageType;
}

const BgPicker: FunctionComponent<BgPickerProps> = ({ bgImage, setBackground }) => {

    const MotionFlex = motion(Flex);
    const MotionBox = motion(Box);
    const [showModal, setShowModal] = useState<boolean>(false);

    const updateBg = (image: BgImageType) => {
        setBackground(image);
        setShowModal(!showModal);
    }

    const displayImages = () => {
        const images: BgImageType[] = ["skull", "skull2", "skull3", "skull4", "skull5", "skull6", "skull7"];
        return images.map((image) => {
            return (
                <MotionBox
                    background="white"
                    borderRadius={10}
                    boxShadow={bgImage === image ? "0px 0px 17px 1px white" : ""}
                    whileHover={{
                        boxShadow: "0px 0px 17px 1px white",
                        cursor: "pointer"
                    }}
                >
                    <Image
                        onClick={() => updateBg(image)}
                        height={250}
                        src={`${process.env.PUBLIC_URL}/${image}.png`}
                        margin="0 auto"
                        padding="25px"
                    />
                </MotionBox>
            )
        })
    }
    return (
        <>
            <MotionFlex
                onClick={() => setShowModal(!showModal)}
                background="white"
                borderRadius={5}
                height="50px"
                width="50px"
                _hover={{
                    cursor: "pointer",
                }}
                whileHover={{
                    boxShadow: "0px 0px 17px 1px white"
                }}
                display={{
                    base: "none",
                    md: "flex"
                }}
                position="absolute"
                bottom="40px"
                right="40px"
                zIndex={1}
            >
                <Image
                    src={`${process.env.PUBLIC_URL}/${bgImage}.png`}
                    alt="skull-image"
                    height="35px"
                    margin="auto"
                />
            </MotionFlex>
            <AnimatePresence>
                {showModal && (
                    <MotionFlex
                        position="absolute"
                        left={0}
                        top={0}
                        zIndex={1000}
                        minHeight="100%"
                        width="100%"
                        background="#1a1c1ff2"
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <Box margin="auto" width="100%">
                            <Grid
                                templateColumns="repeat(auto-fill, minmax(220px, 1fr))"
                                gap="5"
                                width="70%"
                                margin="0 auto"
                            >
                                {displayImages()}
                            </Grid>
                        </Box>
                    </MotionFlex>
                )}
            </AnimatePresence>
        </>
    );
}

export default BgPicker;