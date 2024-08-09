import { useContext } from "react"
import { TodosContext } from "../contexts/TodosContextProvider"

export function useTodosContext() {
    const context = useContext(TodosContext)

    if (!context) {
        throw new Error("Forgot to add provider")
    }

    return context
}


function deepEqual(obj1: any, obj2: any): boolean {
    if (obj1 === obj2) return true;
    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
        return false;
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;

    return keys1.every((key: string) => deepEqual(obj1[key], obj2[key]));
}

export function arraysOfObjectsEqual(arr1: Array<any>, arr2:Array<any>) {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((item, index) => deepEqual(item, arr2[index]));
}