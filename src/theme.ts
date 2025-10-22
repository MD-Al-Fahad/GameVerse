import { createSystem, defaultConfig } from "@chakra-ui/react";

const customConfig = {
    theme: {
        tokens: {
            colors: {},
        },
    },
    globalCss: {
        "html": {
            colorScheme: "dark",
        },
        "body": {
            bg: "gray.900",
            color: "white",
        },
    },
};

const system = createSystem(defaultConfig, customConfig);

export default system;