import del from "del";

// конфигурация
import path from "../config/path.js";

// удаление
export default () => {
    return del(path.root);
};
