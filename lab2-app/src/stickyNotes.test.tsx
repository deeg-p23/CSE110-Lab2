import { render, screen, fireEvent } from "@testing-library/react";
import { StickyNotes } from "./stickyNotes";

describe("Create StickyNote", () => {
    test("renders create note form", () => {
        render(<StickyNotes />);
        const createNoteButton = screen.getByText("Create Note");
        expect(createNoteButton).toBeInTheDocument();
    });

    test("creates a new note", () => {
        render(<StickyNotes />);
     
     // Please make sure your sticky note has a title and content input field with the following placeholders.
        const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
        const createNoteContentTextarea =
          screen.getByPlaceholderText("Note Content");
        const createNoteButton = screen.getByText("Create Note");
     
        fireEvent.change(createNoteTitleInput, { target: { value: "New Note" } });
        fireEvent.change(createNoteContentTextarea, {
          target: { value: "Note content" },
        });
        fireEvent.click(createNoteButton);
     
        const newNoteTitle = screen.getByText("New Note");
        const newNoteContent = screen.getByText("Note content");
     
        expect(newNoteTitle).toBeInTheDocument();
        expect(newNoteContent).toBeInTheDocument();
    });
});

describe("Read StickyNote", () => {
    test("reads all displayed notes", () => {
        render(<StickyNotes />);

        const notes = screen.getAllByTestId("note")
        expect(notes.length).toBe(6)
    });
})

describe("Delete StickyNote", () => {
    test("filters note when clicking x button", () => {
        render(<StickyNotes />);

        const deleteButton = screen.getByTestId("note");
        fireEvent.click(deleteButton);
        expect(deleteButton).not.toBeInTheDocument();
    });
})
     