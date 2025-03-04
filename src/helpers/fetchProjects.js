import fs from "fs";
import path from "path";

export const getMarkdownContent = (fileName) => {
    const filePath = path.join(
        process.cwd(),
        "constants/projects",
        `${fileName}.md`
    );
    const fileContents = fs.readFileSync(filePath, "utf8");
    return fileContents;
};
