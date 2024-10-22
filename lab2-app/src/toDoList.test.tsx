import { render, screen, fireEvent } from "@testing-library/react";
import { ToDoList } from "./toDoList";

describe("Read ToDoList", () => {
    test("default items are all displayed", () => {
        render(<ToDoList />);

        expect(0).toBe(1)
    });

    test("check that default checked items are same as title", () => {
        render(<ToDoList />);

        expect(0).toBe(1)
    });
});