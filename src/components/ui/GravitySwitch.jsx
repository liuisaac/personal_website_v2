import { motion } from "framer-motion";

const GravitySwitch = ({ gravity, toggleGravity }) => {
    return (
        <div
            className="fixed top-0 right-0 mt-5 mr-5 cursor-pointer z-50 pointer-events-auto lg:flex hidden"
            onClick={toggleGravity}
        >
            <motion.div
                className={`relative w-10 h-10 rounded-lg transition-colors duration-300 ease-in-out`}
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <figure className={`w-2 h-2 ${gravity? "bg-white" : "bg-tomato"} rounded-full shadow-md`} />
                </div>

                <Arrow
                    direction={"topLeft"}
                    isOn={gravity}
                    className="top-1 left-1"
                />
                <Arrow
                    direction={"topRight"}
                    isOn={gravity}
                    className="top-1 right-1"
                />
                <Arrow
                    direction={"bottomLeft"}
                    isOn={gravity}
                    className="bottom-1 left-1"
                />
                <Arrow
                    direction={"bottomRight"}
                    isOn={gravity}
                    className="bottom-1 right-1"
                />
            </motion.div>
        </div>
    );
};

const Arrow = ({ className, direction, isOn }) => {
    const getPath = () => {
        switch (direction) {
            case "topLeft":
                return "M0 4L2 2L4 4M2 2V7";
            case "topRight":
                return "M0 4L2 2L4 4M2 2V7";
            case "bottomLeft":
                return "M0 3L2 5L4 3M2 0V5";
            case "bottomRight":
                return "M0 3L2 5L4 3M2 0V5";
            default:
                return "";
        }
    };

    const getRotate = () => {
        switch (direction) {
            case "topLeft":
                return isOn ? 135 : -45;
            case "topRight":
                return isOn ? -135 : 45;
            case "bottomLeft":
                return isOn ? -135 : 45;
            case "bottomRight":
                return isOn ? 135 : -45;
            default:
                return 0;
        }
    };

    return (
        <motion.div
            className={`absolute ${className}`}
            initial={{ rotate: getRotate() }}
            animate={{ rotate: getRotate() }}
            transition={{ duration: 0.1 }}
        >
            <svg
                width="12"
                height="12"
                viewBox="0 0 4 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d={getPath()}
                    stroke={isOn ? "white" : "#FF4D4D"}
                    strokeWidth="1.5"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                />
            </svg>
        </motion.div>
    );
};

export default GravitySwitch;
